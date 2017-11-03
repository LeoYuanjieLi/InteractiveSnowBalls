# InteractiveSnowBalls
A "Network" of Snow balls that can response to the mouse.
I am new to Javascript, but I have some experience coding in python and I have basic knowledge of data structure and algorithm.

## The first day I want to add nodes and edges

###Feature 1 - Build a class called Jitter

It is not quite the same build a class. In fact, Javascript does not have class. Everything is an instance.
1.1 Jitter should have a location (x,y).
1.2 Jitter should use a circle to display itself.

###Feature 2 - Build a class to represent the edges of each Jitter
2.1 It takes 2 parameters: pointA and pointB, which are 2 Jitter objects.
2.2 It needs a way to display itself. I use p5.js.line.
2.3 I define the edge will display only when the two points are within a certain distance.

###Feature 3 - Connects the dots.
Use 2 for loops to check every Jitter's distance and check whether to display the edge or not. This algorithm takes O(n^2) of time.
