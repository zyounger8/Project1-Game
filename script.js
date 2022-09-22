//DOM - Items to Grab
const myCanvas = document.querySelector("canvas")
const c = myCanvas.getContext("2d");
// const plyBtn = document.getElementById('#playButton')

// Creating the Player - class

class Player {
  constructor() {
      this.velocity = {
          x: 0,
          y: 0,
        };
    
        const image = new Image();
        image.src = "./assets/player.png";
        image.onload = () => {
            // const scale = 0.15
            this.image = image
            this.width = image.width 
            this.height = image.height
            this.position = {
              x: myCanvas.width / 2 - this.width / 2,
              y: myCanvas.height - this.height - 20
            };
        }
  }
  draw() {
    // myCanvas.fillStyle = 'red'
    // myCanvas.fillRect(this.position.x, this.position.y, this.width, this.height)
    c.drawImage( 
      this.image,
      this.position.x, 
      this.position.y,
      this.width,
      this.height
      );
    }
    update(){
    if (this.image){
    this.draw()
    this.position.x += this.velocity.x
    }
  }
}


const player = new Player();
const keys = {
  a: {
    pressed: false
  }
}

function animate() {
  requestAnimationFrame(animate);
  player.update();

  if (keys.a.pressed) {
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
  }
}


animate();

// if (){
//   const speed = [-7, 7]
  
// }

// Add Event Listeners - get spaceship to move left or right based on key

const movement= myCanvas.addEventListener('keydown', ({key}) => {
   switch(key) {
       case 'a':
        player.velocity.x = -5
        break
      //  case 'ArrowRight':
      //   console.log('right')
      //   break
      //   case ' ':
      //   console.log('space')
      //   break
    }    
  
})


