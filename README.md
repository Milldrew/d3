A workspace for d3 components to be packaged into libraries.

<p>
  These components need to be decoupled into reusable pieces. Which can be achieved by using javascripts prototypical inheritence. 
</p>
<p>
 I will create a module called chart-foundations which will include classes that create responsive svg canvas and title
</p>
<p>
  Angular Material Compatability, another module will be used to create angular material compatability 
  <br>
  ways to do this. if angular material is being used as a peer dependency create a class that extends the base class by adding in the native angular material colors and styles to the project.
  <br>
  The chart needs to include foreground and background that is responsive to the angular material color theme. 
  It also must inherit the typography of angular material. 
</p>

1. Dot
   <ul>
   <li>
   input: { sizeValue: value} []
   </li>
   <li>
   input name of figure
   </li>
   <li>
   input: name of unit
   </li>
   <li>
   input: interval
   An array of chronologicalValues.
   </li>
   </ul>
   The dot grows and shrinks over time as a result of the chronolgicalValues
