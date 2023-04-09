# Interaction-Intelligence-1D-Game
### Game Name: Pea Shooter Showdown
### Elements:
•	Two players represented by orange and blue pixels.
•	Bullets represented by yellow and cyan pixels.
•	Power-ups represented by grey pixels that enhance the next shot's power.
### Attack:
1. Normal shoot 2. Power-up shot 3. Laser attack 4. Remote shoot 5. Explode
### Game Instructions: 
1. Peashooter is a two-player game played on an LED strip. Each player controls one pixel representing their avatar on the strip. The goal of the game is to eliminate the other player's avatar by shooting them with bullets. 
2. Player one is represented by an orange pixel on the strip while player two is represented by a blue pixel. Their bullets are also represented by orange and blue pixels respectively. As a player gets hurt more, the color of their pixel darkens more. 
3. Each player has two buttons to move left or right and two buttons to shoot left or right. 
4. The bullets are represented by pixels on the line; each player has two bullets. The bullets counteract each other when they encounter each other. If a player's bullet counteracts the other player's bullet or hits the other player, their clip will be refilled. 
5. Players can pick up kits by moving their avatar to the kit's location. There are at most five power-ups on the strip, represented by grey pixels. Several seconds after players pick up power-ups, new power-ups will automatically appear on the strip. A kit can help the next shot's power plus 1 to be a super bullet and will not counteract the normal bullets by the other player. However, the super bullet can still be countered by another player's super bullet. 
6. There are three combo attacks: Laser attack, Remote shooting, and Explode. To use the Explode combo attack, a player must have picked up two kits without using them. The other two combo attacks can be used anytime during the game.
7. Laser attack is a laser beam represented by ten orange or blue pixels in a gradient that can push the other player's avatar 35 pixels away. 
8. Remote shooting means firing a bullet 15 pixels away from an avatar so that the bullet can hit the avatar of the other player sooner. 
9. When two players get really close to each other (less than 3 pixels in distance), a normal shot will push the other player 18 pixels away. 
10. Each player has 20 units of "life". A normal bullet, a remote-shot bullet, and a laser attack each cause 1 unit hurt on the other player. 
11. To use the Explode combo attack, the player must collect two kits in a row, which means the player should avoid firing until they have successfully picked up both kits.
**Note**: After a player picks up a kit, the next shot will automatically be the super bullet, whether the player wants it or not.

