class MenuScene {
  private smallFrostingImage: p5.Image;
  private logoImage: p5.Image;
  private sprinklesImage: p5.Image;
  private gameRulesHeading: string;
  private gameRules: string;
  private buttonStartGame: Button;
  private buttonQuitGame: Button;

  constructor() {
    this.smallFrostingImage = images.backgroundObjects.frostingSmall;
    this.logoImage = images.logo;
    this.sprinklesImage = images.backgroundObjects.sprinkles;
    this.gameRulesHeading = "Welcome!";
    this.gameRules = `Grandma is in a jam.\nShe doesn’t have the ingredients to bake for her grandkids.\nHelp her catch the right ingredients to complete the recipe.
    But make sure you don’t ruin the cake by \ncatching the wrong ingredient or you will have to start all over.`;
    this.buttonStartGame = new Button(
      createVector(500, 550),
      "Start",
      "recipeScene"
    );
    this.buttonQuitGame = new Button(
      createVector(730, 550),
      "Quit",
      "startScene"
    );
  }

  public update() {
    this.buttonStartGame.update();
    this.buttonQuitGame.update();
  }

  //Draw the images, buttons and menue-text to this menuescen.
  public draw() {
    image(
      this.smallFrostingImage,
      0,
      0,
      innerWidth,
      this.smallFrostingImage.height
    );
    image(this.logoImage, 50, 0, 190, 150);
    image(
      this.sprinklesImage,
      width - this.sprinklesImage.width,
      height - this.sprinklesImage.height
    );
    fill("#808080");
    textAlign(CENTER);
    textFont("Josefin Sans");
    textSize(40);
    text(this.gameRulesHeading, 715, 265);
    textSize(30);
    textAlign(CENTER);
    text(this.gameRules, 710, 410);
    noStroke();
    this.buttonStartGame.draw();
    this.buttonQuitGame.draw();
    this.buttonStartGame.checkHover();
    this.buttonQuitGame.checkHover();
  }
}
