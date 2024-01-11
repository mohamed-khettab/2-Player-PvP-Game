function Gun() {
  gun2.y = player2.y;
  gun1.y = player1.y;
  guns.rotationLock = true;

  if (direction2 === "right") {
    gun2.x = player2.x + gun2.w + player2.w + 5;
    gun2.mirror.x = false
  } else {
    gun2.x = player2.x - gun2.w - player2.w - 5;
    gun2.mirror.x = true
  }
  if (direction1 === "right") {
    gun1.x = player1.x + gun1.w + player1.w + 5;
    gun1.mirror.x = false
  } else {
    gun1.x = player1.x - gun1.w - player1.w - 5;
    gun1.mirror.x = true
  }

  /*
  0 = Nothing
  1 = Pistol
  2 = Shotgun
  3 = Rifle
  4 = Rocket Launcher
  */
  if (player1Health > 0) {
    if (gunSelected1 === 0) {
      gun1.visible = false;
      gun1.collider = "n";
    } else if (gunSelected1 === 1) {
      gun1.visible = true;
      gun1.ani = 'pstl'
      gun1.collider = "d";
      gun1.w = 10;
      gun1.h = 10;
      if (kb.pressed("m")) {
        bullet = new bullets.Sprite(0, gun1.y, 3, 3, "k");
        bullet.life = 100;
        if (direction1 === "right") {
          bullet.x = gun1.x + gun1.w;
          bullet.velocity.x = 5;
        } else {
          bullet.x = gun1.x - gun1.w;
          bullet.velocity.x = -5;
        }
      }
    } else if (gunSelected1 === 2) {
      gun1.ani = 'shotgun'
      gun1.collider = "d";
      gun1.w = 25;
      gun1.h = 10;

      if (kb.pressed("m")) {
        for (i = 0; i < 5; i++) {
          bullet = new bullets.Sprite(0, gun1.y, 3, 3, "k");
          bullet.velocity.y = random(-2, 2);
          if (direction1 === "right") {
            bullet.x = gun1.x + gun1.w;
            bullet.velocity.x = 5;
          } else {
            bullet.x = gun1.x - gun1.w;
            bullet.velocity.x = -5;
          }
        }
      }
    } 
     else if (gunSelected1 === 3) {
      gun1.ani = 'rpg'
      gun1.collider = "d";
      gun1.w = 50;
      gun1.h = 10;
      if (kb.pressed("m")) {
        if (rocketAmmo1 > 0) {
          rocket = new rockets.Sprite(0, gun1.y, 20, 5, "k");
          rocketAmmo1--;
          if (direction1 === "right") {
            rocket.x = gun1.x + gun1.w;
            rocket.velocity.x = 5;
          } else {
            rocket.x = gun1.x - gun1.w;
            rocket.velocity.x = -5;
          }
        }
      }
    }
    if (kb.pressed(".")) {
      if (
        Math.floor(player1.rotation) > 85 ||
        Math.floor(player1.rotation) < -85
      ) {
        player1.rotation = 0;
      }
    }
  }

  if (player2Health > 0) {
    if (gunSelected2 === 0) {
      gun2.visible = false;
      gun2.collider = "n";
    } else if (gunSelected2 === 1) {
      gun2.visible = true;
      gun2.ani = 'pstl'
      gun2.collider = "d";
      gun2.w = 10;
      gun2.h = 10;
      if (kb.pressed("e")) {
        bullet = new bullets.Sprite(0, gun2.y, 3, 3, "k");
        bullet.life = 100;
        if (direction2 === "right") {
          bullet.x = gun2.x + gun2.w;
          bullet.velocity.x = 5;
        } else {
          bullet.x = gun2.x - gun2.w;
          bullet.velocity.x = -5;
        }
      }
    } else if (gunSelected2 === 2) {
      gun2.ani = 'shotgun'
      gun2.collider = "d";
      gun2.w = 25;
      gun2.h = 10;

      if (kb.pressed("e")) {
        for (i = 0; i < 5; i++) {
          bullet = new bullets.Sprite(0, gun2.y, 3, 3, "k");
          bullet.velocity.y = random(-2, 2);
          if (direction2 === "right") {
            bullet.x = gun2.x + gun2.w;
            bullet.velocity.x = 5;
          } else {
            bullet.x = gun2.x - gun2.w;
            bullet.velocity.x = -5;
          }
        }
      }
    }  else if (gunSelected2 === 3) {
      gun2.ani = 'rpg'
      gun2.collider = "d";
      gun2.w = 50;
      gun2.h = 10;
      if (kb.pressed("e")) {
        if (rocketAmmo2 > 0) {
          rocket = new rockets.Sprite(0, gun2.y, 20, 5, "k");
          rocketAmmo2--;
          if (direction2 === "right") {
            rocket.x = gun2.x + gun2.w;
            rocket.velocity.x = 5;
          } else {
            rocket.x = gun2.x - gun2.w;
            rocket.velocity.x = -5;
          }
        }
      }
    }
    if (kb.pressed("q")) {
      if (
        Math.floor(player2.rotation) > 85 ||
        Math.floor(player2.rotation) < -85
      ) {
        player2.rotation = 0;
      }
    }
  }
  for (i = 0; i < bullets.length; i++) {
    if (bullets[i].collides(player2)) {
      if (bullets[i].velocity.x >= 4 || bullets[i].velocity.x <= -4) {
        player2Health -= 0.5;
      }
      bullets[i].color = 'red'
      bullets[i].velocity.x = 0;
      bullets[i].collider = 'd'
      bullets[i].overlaps(player2)

      bullets.life = 30;
      player2.velocity.x /= 2;
      
    } else if (bullets[i].collides(player1)) {
      if (bullets[i].velocity.x >= 4 || bullets[i].velocity.x <= -4) {
        player1Health -= 0.5;
      }
      bullets[i].color = 'red'
      bullets[i].collider = 'd'
      bullets[i].overlaps(player1)
      bullets[i].life = 30;
      bullets[i].velocity.x = 0;

      player1.velocity.x /= 2;
    }
  }
  for (i = 0; i < rockets.length; i++) {
    if (rockets[i].collides(player2)) {
      rockets[i].life = 0;
      player2Health -= 50;
      while (explosions.length < 40) {
        explosion = new explosions.Sprite(player2.x, player2.y, 8, 8);
        explosion.life = 100;
        explosion.color = random(colors);
        explosion.velocity.x = random(-100, 100);
        explosion.velocity.y = random(0, -100);
        player2.velocity.x = random(-10, 10);
        player2.velocity.y = random(-10, 0);
      }
    } else if (rockets[i].collides(player1)) {
      rockets[i].life = 0;
      player1Health -= 50;
      while (explosions.length < 40) {
        explosion = new explosions.Sprite(player1.x, player1.y, 8, 8);
        explosion.life = 100;
        explosion.color = random(colors);
        explosion.velocity.x = random(-100, 100);
        explosion.velocity.y = random(-100, 0);
        player1.velocity.x = random(-10, 10);
        player1.velocity.y = random(-10, 10);
      }
    }
  }
}
