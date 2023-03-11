class WinnerScene extends MessageBox {
  private buttonNextLevel: Button;
  private buttonMenu: Button;
  private image: p5.Image;
  private starFilled: p5.Image;
  private starOutlined: p5.Image;
  private level: ITime;
  private gameLevel: ILevel;
  private centeredCanvas: CenteredCanvas;
  private title: string;

  constructor(level: ITime, gameLevel: ILevel) {
    super(900, 600);
    this.level = level;
    this.gameLevel = gameLevel;
    this.centeredCanvas = new CenteredCanvas(900, 600);
    this.buttonMenu = new Button(
      createVector(
        this.centeredCanvas.width - 140,
        this.centeredCanvas.height / 2 + 245
      ),
      "Menu",
      "menuScene"
    );
    this.image = images.recipes.pancake;
    this.starFilled = images.starFilled;
    this.starOutlined = images.starOutlined;
    this.title = "Congrats!";

    if (gameLevel.getCurrentLevel() === 3) {
      this.buttonNextLevel = new Button(
        createVector(
          this.centeredCanvas.width / 2 - 20,
          this.centeredCanvas.height / 2 + 245
        ),
        "Finish",
        "finalScene"
      );
    } else {
      this.buttonNextLevel = new Button(
        createVector(
          this.centeredCanvas.width / 2 + 80,
          this.centeredCanvas.height / 2 + 245
        ),
        "Next level",
        "recipeScene"
      );
    }
  }

  public update() {
    this.buttonMenu.update();
    this.buttonNextLevel.update();
  }

  public draw() {
    cursor(ARROW);

    // Draw the centered canvas
    this.centeredCanvas.draw();

    // Draw the messageBox with title
    super.draw();

    // Add all stars
    const starDistance = 80;
    let x = this.centeredCanvas.width / 2 + 180;
    for (let i = 0; i < this.getStars(); i++) {
      image(this.starFilled, x, this.centeredCanvas.height / 2 + 135);
      x += starDistance;
    }
    for (let i = 0; i < 3 - Number(this.getStars()); i++) {
      image(this.starOutlined, x, this.centeredCanvas.height / 2 + 135);
      x += starDistance;
    }

    // Image of the recipe
    if (this.gameLevel.getCurrentLevel() == 1) {
      this.image = images.recipes.pancake;
    } else if (this.gameLevel.getCurrentLevel() == 2) {
      this.image = images.recipes.pie;
    } else {
      this.image = images.recipes.chocolateCake;
    }

    this.buttonNextLevel.draw();
    this.buttonMenu.draw();
    this.buttonNextLevel.checkHover();
    this.buttonMenu.checkHover();

    // Image of done recipe, will change to the current recipe
    image(
      this.image,
      this.centeredCanvas.width / 2 + 155,
      this.centeredCanvas.height / 2 - 80
    );
    textStyle(BOLD);
    fill("#808080");
    textSize(45);
    text(this.title, 720, 220);
  }

  private getStars() {
    const time = this.level.getTime();
    if (time <= 30) {
      return 3;
    } else if (time <= 60) {
      return 2;
    } else {
      return 1;
    }
  }
}
