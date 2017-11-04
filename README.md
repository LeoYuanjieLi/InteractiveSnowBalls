# InteractiveSnowBalls
A "Network" of Snow balls that can response to the mouse.
I am new to Javascript, but I have some experience coding in python and I have basic knowledge of data structure and algorithm.

## The first day I want to add nodes and edges

### Feature 1 - Build a class called Jitter

It is not quite the same build a class. In fact, Javascript does not have class. Everything is an instance.
1.1 Jitter should have a location (x,y).
1.2 Jitter should use a circle to display itself.

### Feature 2 - Build a class to represent the edges of each Jitter

2.1 It takes 2 parameters: pointA and pointB, which are 2 Jitter objects.
2.2 It needs a way to display itself. I use p5.js.line.
2.3 I define the edge will display only when the two points are within a certain distance.

### Feature 3 - Connects the dots.

Use 2 for loops to check every Jitter's distance and check whether to display the edge or not. This algorithm takes O(n^2) of time.

### Feature 4 - Mouse node.

4.1 Create a node when you move your mouse, and connect to the "local" nodes within a certain distance.

### Feature 5 - Moving nodes.

5.1 Create moving modes that connects to the local (but not each other! It will be too many lines!)
<br>
<p align="center">
  <img src="https://raw.githubusercontent.com/LeoYuanjieLi/InteractiveSnowBalls/master/imgs/Screenshot%202017-11-04%2011.53.49.png" width="600"/>
</p>
