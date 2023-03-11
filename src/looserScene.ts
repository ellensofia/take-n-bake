class LooserScene extends MessageBox {
  private buttonRestart: Button;
  private buttonQuit: Button;
  private image: p5.Image;
  private game: IScene;
  private instruction: string;
  private centeredCanvas: CenteredCanvas;
  private topCanvas: p5.Graphics;
  private title: string;

  constructor(game: IScene, canvasWidth: number, canvasHeight: number) {
    super(canvasWidth, canvasHeight);
    this.instruction = "You caught the wrong ingredient...try again!";
    this.game = game;
    this.centeredCanvas = new CenteredCanvas(900, 600);
    this.buttonRestart = new Button(
      createVector(
        this.centeredCanvas.width / 2 + 60,
        this.centeredCanvas.height / 2 + 245
      ),
      "Restart",
      "levelScene"
    );
    this.buttonQuit = new Button(
      createVector(
        this.centeredCanvas.width - 170,
        this.centeredCanvas.height / 2 + 245
      ),
      "Quit game",
      "startScene"
    );
    this.image = images.spilledBowl;
    this.centeredCanvas = new CenteredCanvas(canvasWidth, canvasHeight);

    // Create a new canvas element on top of the existing one
    this.topCanvas = createGraphics(canvasWidth, canvasHeight);
    this.topCanvas.position(0, 0);
    this.topCanvas.style("pointer-events", "none");
    this.title = "Ops..";
  }

  public update() {
    const wasClicked = this.buttonRestart.update();
    this.buttonQuit.update();
    this.buttonRestart.update();
  }

  public draw() {
    super.draw(); // call this method first

    // Draw on the top canvas
    this.topCanvas.background(0);
    this.topCanvas.noStroke();
    this.topCanvas.fill(0, 0, 255);
    this.topCanvas.rect(0, 0, this.canvasWidth, this.canvasHeight);

    // Draw on the centered canvas
    const canvas = this.centeredCanvas;
    textSize(45);
    text(this.title, 700, 200);
    textSize(30);
    textAlign(CENTER);
    text(this.instruction, this.canvasWidth * 0.8, 290);
    cursor(ARROW);
    this.buttonRestart.draw();
    this.buttonQuit.draw();
    this.buttonRestart.checkHover();
    this.buttonQuit.checkHover();
    image(this.image, canvas.width / 2 + 100, canvas.height / 2);
  }
}
