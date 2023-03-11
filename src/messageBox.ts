class MessageBox {
  // private title: string;
  public canvasWidth: number;
  public canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    // this.title = title;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  public draw() {
    strokeWeight(60);
    stroke("#C6E3DE");
    fill("#F5F5F5");
    rect(this.canvasWidth / 2 - 260, this.canvasHeight / 2 - 206, 1050, 612);
    fill("#808080");
    noStroke();
    textSize(64);
    textStyle(BOLD);
    textAlign(CENTER);
    // text(this.title, this.canvasWidth / 2, this.canvasHeight / 2 - 200);
  }
}
