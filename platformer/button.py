from constants import *


class Button:
    def __init__(self, x,y, image) -> None:
        self.image = image
        self.rect = self.image.get_rect(topleft = (x,y))


    def draw(self):
        action = False
        pos = pygame.mouse.get_pos()
        if self.rect.collidepoint(pos):
            if pygame.mouse.get_pressed()[0]:
                action = True
        SCREEN.blit(self.image, self.rect)
        #TODO   not completed
        return action