//Create a class for carousel
class Carousel {
    //USe the constructor to pass in each image
    constructor (image) {
        this.image = image;
        this.lButton = this.image.querySelector('.left-button');
        this.rButton = this.image.querySelector('.right-button');
        this.images = this.image.querySelectorAll('img');
        this.index = 0;
        this.lastIndex = 0;

        this.images.forEach(img => img.classList.remove('current-img'));
        this.images[0].classList.add('current-img');

        this.lButton.addEventListener('click', () => this.scroll(-1));
        this.rButton.addEventListener('click', () => this.scroll(+1));
    }

    scroll(inc) {
        this.lastIndex = this.index;
        this.index += inc;
        this.index = this.index % this.images.length;
        if (this.index < 0) {
            this.index += this.images.length;
        }

        this.moveAlong();
    }

    moveAlong() {
        this.images.forEach(img => img.classList.remove('current-img'));
        this.images[this.index].classList.add('current-img');
    }
}
let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
