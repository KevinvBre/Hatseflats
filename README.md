# Hatseflats for Sketch (Beta)
_An experiment to get some form of generative design into the UI wireframe design process._

Wouldn't it be nice to te able to tell Sketch you need a homepage design for a small webshop that will focus on the elderly people with a new brand.
And then Sketch will show you a few options, suggestions and examples.

Yes, that would be nice. Thats why I've created experiment Hatseflats.

### How it works
You as a designer can define your project, the page your are working on and the target audience you have.
Hatseflats will use that input to suggest a desktop design for you.

### Getting started
1. Download and open [Hatseflats](https://github.com/KevinvBre/Hatseflats/archive/master.zip)
2. Double click on the plugin and open up Sketch.
3. Download [Assets for Hatseflats](https://www.dropbox.com/s/wd74ncmfkzczyu0/Hatseflats.sketch?dl=1) and add them to your libraries.
4. Enjoy.

---  

###### How it works (the more technical version.)
Sketch

0. launches web interface.

JS
1. Select the best components to meet your needs
2. Order the selected components using a probability theory.
3. Select the best elements for each component and each row.
4. Define all y positions.
5. Define all x positions.
6. Create a hash to bridge JS -> Sketch

Sketch

7. Sketch: Unhash and create arrays.
8. Load Hatseflats design library
9. Create artboard and place all symbols.


---  

######  Learnings
1. It's complex and difficult to setup the logic.
2. Thinking in components > elements > atom/styles: Defining the components and the order they should be in works pretty good.
3. Creating logic within the order and placement of elements to create 'nice' designs is hard. Boy did I underestimated this. (They are all so ugly!)

---  

###### Version history

* 0.1 Added first version of the plugin
