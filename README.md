# Let's draw!

Let's draw is a webapp where you can draw. While you are drawing others can also draw.
Basically you can draw with other people, all on the same canvas.

I made this to make myself familiar with websockets. I also learned a lot about node.

You can find a version of this website on https://drawing.tristantrouwen.com/.

## Screenshot

<img src="https://i.imgur.com/BJgkeXY.png"
     alt="Screenshot website" />


## Installation

Do you want to host this yourself?

Clone the project and go into the folder. Make sure you have `npm` installed and run `npm install` in the folder. Now you can change the `config.js` file to select a host and port. After that you need to go in the `public` folder and edit `sketch.js`. In the line `socket = io.connect('http://localhost:3000');` you should replace the url with the one you use to acces the site. That is it. Go back to the project root and run `nodejs server.js`.

## Credits

This project is inspired by a <a href="https://www.youtube.com/playlist?list=PLRqwX-V7Uu6b36TzJidYfIYwTFEq3K5qH">video series off Daniel Shiffman</a>.
