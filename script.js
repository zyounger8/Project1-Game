
//DOM - Items to Grab
const myCanvas = document.querySelector('canvas').getContext('2d')
// const plyBtn = document.getElementById('#playButton')

// Creating the Player - class

class Player {
    constructor(){
        this.position = {
            x: 200,
            y: 200
        }
        this.velocity = {
            x: 0,
            y: 0
        }

const image = new Image()
image.src = './images/player.png'

        this.image = image
            this.width = 100
            this.height = 100
    }
    draw(){
        // myCanvas.fillStyle = 'red'
        // myCanvas.fillRect(this.position.x, this.position.y, this.width, this.height)
        myCanvas.drawImage(this.image, this.position.x, this.position.y)
    }
}

const player = new Player()
player.draw()

function animate(){
    requestAnimationFrame(animate)
    player.draw()
}
animate()