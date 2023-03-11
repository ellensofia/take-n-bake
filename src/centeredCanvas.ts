class CenteredCanvas {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = 900;
    this.height = 600;
  }

  public draw() {
    fill("#F5F5F5");
    background("#F5F5F5");
    textAlign(CENTER);
    createCanvas(width, height);
  }
}
