from pygame.locals import *
from constants import *
from world import World
from levels.level1 import world_data
from player import Player

player_group = pygame.sprite.Group()
enemy_group = pygame.sprite.Group()

player = Player(100, 100)


game_world = World(world_data, player_group,enemy_group)
game_status = "playing"
running = True
while running:
    for event in pygame.event.get():
        if event.type == KEYDOWN:
            if event.key == K_ESCAPE:
                running = False
    game_world.draw_bg(SCREEN)
    # game_status = player_group.update(game_world.tile_map, enemy_group,game_status)
    game_status = player.update(game_world.tile_map, enemy_group,game_status)
    player.draw()
    enemy_group.draw(SCREEN)
    enemy_group.update()
    pygame.display.update()
    CLOCK.tick(FPS)



# TODO Lava to the game