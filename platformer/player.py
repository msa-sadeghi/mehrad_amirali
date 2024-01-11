import pygame.draw
from pygame.sprite import Sprite
from constants import *
class Player(Sprite):
    def __init__(self, x,y):
        super().__init__()
        self.right_images = []
        self.left_images = []
        self.right_idle_images = []
        self.left_idle_images = []
        for i in range(1, 9):
            img = pygame.image.load(f"assets/boy/Run ({i}).png")
            img = pygame.transform.scale(img, (img.get_width() * 0.2, img.get_height() * 0.2))
            self.right_images.append(img)

            img = pygame.transform.flip(img, True, False)
            self.left_images.append(img)

        for i in range(1,10):
            img = pygame.image.load(f"assets/boy/Idle ({i}).png")
            img = pygame.transform.scale(img, (img.get_width() * 0.2, img.get_height() * 0.2))
            self.right_idle_images.append(img)
            img = pygame.transform.flip(img, True, False)
            self.left_idle_images.append(img)



        self.frame_index = 0
        self.image = self.right_idle_images[self.frame_index]
        self.dead_image = pygame.image.load("assets/img/ghost.png")
        self.rect = self.image.get_rect(topleft=(x,y))
        self.vel_y = 0
        self.speed = 5
        self.direction = 1
        self.counter = 0
        self.idle = True

    def update(self,tile_map, enemy_group, game_status):
        if self.direction == 1:
            rect = pygame.Rect(self.rect.x + 42, self.rect.y + 8, self.image.get_width()-60, self.image.get_height()-17)
        if self.direction == -1:
            rect = pygame.Rect(self.rect.x + 20, self.rect.y + 8, self.image.get_width()-60, self.image.get_height()-17)
        
        dx = 0
        dy = 0
        if game_status == "playing":
            keys = pygame.key.get_pressed()
            if keys[pygame.K_SPACE]:
                self.vel_y = -10

            if keys[pygame.K_LEFT]:
                self.idle = False
                self.direction = -1
                dx -= self.speed
            if keys[pygame.K_RIGHT]:
                self.idle = False
                self.direction = 1
                dx += self.speed

            if not keys[pygame.K_LEFT] and not keys[pygame.K_RIGHT]:
                self.idle = True

            self.vel_y += 1
            dy += self.vel_y

            for tile in tile_map:
                if tile[1].colliderect(rect.x + dx, rect.y, self.image.get_width()-60, self.image.get_height()-17):
                    dx = 0
                if tile[1].colliderect(rect.x, rect.y + dy, self.image.get_width()-60, self.image.get_height()-17):
                    if self.vel_y >= 0:
                        self.vel_y = 0
                        dy = tile[1].top - rect.bottom
                    else:
                        dy = tile[1].bottom - rect.top

            self.animation()

            self.rect.x += dx
            self.rect.y += dy

            # if pygame.sprite.spritecollide(self, enemy_group, False):
            for enemy in enemy_group:
                if enemy.rect.colliderect(rect):
                    game_status = "game_over"
                    break
        elif game_status == "game_over":
            self.image = self.dead_image
            if self.rect.y > 200:
                self.rect.y -= 5
        
        return game_status
        # if self.rect.bottom >= SCREEN_HEIGHT:
        #     self.rect.bottom = SCREEN_HEIGHT


        
    def animation(self):
        COOL_DOWN = 2
        self.counter += 1
        if self.counter > COOL_DOWN:
            self.frame_index += 1
            self.counter = 0

        if self.frame_index >= len(self.right_images) - 1:
            self.frame_index = 0

        if self.direction == 1:
            if self.idle:
                self.image = self.right_idle_images[self.frame_index]
            else:
                self.image = self.right_images[self.frame_index]
        if self.direction == -1:
            if self.idle:
                self.image = self.left_idle_images[self.frame_index]
            else:
                self.image = self.left_images[self.frame_index]


    def draw(self):
        SCREEN.blit(self.image, self.rect)