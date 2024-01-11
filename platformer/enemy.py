from pygame.sprite import Sprite
from constants import *

class Enemy(Sprite):
    def __init__(self, x,y):
        super().__init__()
        self.image = pygame.image.load("assets/img/blob.png")
        self.rect = self.image.get_rect(topleft = (x,y))
        self.direction = 1
        self.counter = 0

    def update(self):
        self.rect.x += self.direction
        self.counter += 1
        if self.counter > 2 *TILE_SIZE:
            self.direction *= -1
            self.counter *= -1
