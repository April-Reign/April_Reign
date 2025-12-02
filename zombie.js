

//constructor for the Zombies
function zombie(y) {
	//initial x so all zombies start to the left of the screen
	this.x = -10;
	this.y = y;
	//set a random speed
	this.speed = random(0.2, 0.5);
    //Gives each zombie a health of 1
    this.health = 1;

	//draw the zombie to the screen
	this.draw = function() {
		push();
		//arms
		fill(128, 0, 128);
		rect(this.x - 10, this.y - 50, 65, 15);
		rect(this.x - 10, this.y + 35, 65, 15);
		//shoulders
		rect(this.x - 20, this.y - 50, 35, 100, 10);
		//head
		fill(50);
		ellipse(this.x, this.y, 50);

        //shows health
        fill(255);   // white text
        textSize(16);
        text(this.health, this.x - 5, this.y + 5);
        
		pop();
	}

	//update the zombies x location as it lumbers across the screen
	this.updateLocation = function() {
		this.x += this.speed;
	}

    //checks if the zombie's head is clicked
    this.clicked = function(mx, my) {
        //dist from mouse to zombie head
        let d = dist(mx, my, this.x, this.y);
        // head radius is 25 (since ellipse(this.x, this.y, 50))
        if (d<25) {
        //decrease health by 1
            this.health -= 1;
        }
    }
}
