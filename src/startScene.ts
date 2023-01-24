class StartScene {

    private image: p5.Image;
    private image2: p5.Image;
    private logo: p5.Image;
    private buttonGoToGame: Button;
    private game: IScene;

    

    constructor(game: IScene) { 
        this.game = game;
        this.buttonGoToGame = new Button(createVector(570, 490), "Start game");
        this.image = images.backgroundObjects.frostingBig;
        this.image2 = images.backgroundObjects.sprinkles;
        this.logo = images.logo;
    }

    public update() {
        this.buttonGoToGame.update();
    }

    public draw() {
        this.buttonGoToGame.draw();
        this.buttonGoToGame.checkHover();
        image(this.image, 0, -100);
        image(this.image2, width - this.image2.width, height - this.image2.height ); // position x y, bild x y
        image(this.logo, 500, 250, 300, 200); // position x y, bild ändra storlek och kanske designen i figma eller 
    }

    }