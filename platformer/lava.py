from pygame.sprite import Sprite
from constants import *


class Lava(Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.image.load("assets/img/lava.png")
        self.image = pygame.transform.scale(self.image, (TILE_SIZE, TILE_SIZE))
        self.rect = self.image.get_rect(topleft=(x, y))
