### how2do/sw-design

## a cilinder in solid-works?
*example:* `cilinder.sldprt` <br>
*reference:* `https://www.youtube.com/watch?v=ASu2lAyMPT4`
```
1. draw a circle in top-plane (sketch>circle>draw)
2. extrude the circle (features>extrude), indicate the width (ex. 3in), enter
3. select top circle surface, select sketch, and draw another circle in top cilinder
4. extrude the circle to cut the cilinder (features>ectrude-cut)
5. get more circle edges with fillet
```

## make a cup?
*reference:* `https://www.youtube.com/watch?v=4QfLiTHOcyo` <br>
*tools:* `ReferenceGeometry>Plane`, `Swept Boss/Base`, `Sketch>Circle`,`Sketch>SmartDimension`,`Section View`
```
1. Download the cilinder.sldprt file.
2. Define a plane tanget to cilinder-surface, and parallel to right-plane with [Plane].
3. Draw a circle in the plane defined in previous step with [Circle].
4. Draw a three-point circle on top-plane  with [Circle].
5. Do constrains in radious and vertical alignment of circle with [Smart dimension].
6. Use [swept boss/base] to make the handle-cup.
```

### make an electronic case?

*refenrece:* `https://www.youtube.com/watch?v=0QZf9Dz1zVM&t=567s`

```
1. make a cuadrilater
2. over the cuadrilater's top-face draw points (use smart dimension to fixed them).
3. Select hole-wizard and configure the hole 
> (Straight Tap, Tapped Hole, 4-40, Blind, 2in, and deselect Near-side-countersink).
4. Select as position to the holes the points drawned previously.
5. Select the shell tool to make the low part of the case.
```

## make movements?
```
angular: shift + [<,^,>,v]
shifting: ctrl + [<,^,>,v]
referenece: ctrl + space-bar
```