from pygame.sprite import Sprite
from constants import *


class Exit(Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.image.load("assets/img/exit.png")
        self.image = pygame.transform.scale(self.image, (TILE_SIZE, TILE_SIZE))
        self.rect = self.image.get_rect(topleft=(x, y))

# TODO  سکوهای مرحله یک را کامل کنید و درب خروج را در بالاترین سکو در صفحه نمایش دهید