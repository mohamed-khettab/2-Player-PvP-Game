function Players() {
  // Input
  // Player 2
  if (player2Health > 0) {
    if (kb.pressed("w")) {
      if (
        player2.colliding(base) ||
        player2.colliding(player1) ||
        player2.colliding(gun1)
      ) {
        player2.velocity.y = -8;
      }
    }
    if (kb.pressing("a")) {
      player2.x -= 3;
      direction2 = "left";
    }
    if (kb.pressing("d")) {
      player2.x += 3;
      direction2 = "right";
    }
    if (gunSelected2 <= 3) {
      if (kb.pressed("s")) gunSelected2++;
    } else {
      gunSelected2 = 0;
    }
  }
  // Player 1
  if (player1Health > 0) {
    if (kb.pressed("ArrowUp")) {
      if (
        player1.colliding(base) ||
        player1.colliding(player2) ||
        player1.colliding(gun2)
      ) {
        player1.velocity.y = -8;
      }
    }
    if (kb.pressing("ArrowLeft")) {
      player1.x -= 3;
      direction1 = "left";
    }
    if (kb.pressing("ArrowRight")) {
      player1.x += 3;
      direction1 = "right";
    }
    if (gunSelected1 <= 3) {
      if (kb.pressed("ArrowDown")) gunSelected1++;
    } else {
      gunSelected1 = 0;
    }
  }
  // Health
  if (player1Health > 50) {
    player1.ani = 'neutral'
  }
  if (player1Health > 0 && player1Health <= 50) {
    player1.ani = 'hurt'
  }
  if (player1Health < 0) {
    player1.ani = 'dead'
    player2.ani = 'happy'
  }
  if (player2Health > 50) {
    player2.ani = 'neutral'
  }
  if (player2Health > 0 && player2Health <= 50) {
    player2.ani = 'hurt'
  }
  if (player2Health < 0) {
    player2.ani = 'dead'
    player1.ani = 'happy'
  }
}
