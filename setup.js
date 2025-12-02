function setup() {
	createCanvas(800, 600);

	//create a new horde and add zombies
	horde = new Horde();
	horde.addZombies(7);

    function mousePressed() {
    horde.checkClicks(mouseX, mouseY);
    }

}
