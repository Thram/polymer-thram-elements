polymer-thram-elements
======================

Polymer Elements made by Thram

```html
<!-- VENDOR -->
<script src="components/webcomponentsjs/webcomponents.min.js"></script>
<!-- THRAM'S ELEMENTS -->
<link rel="import" href="components/polymer-thram-elements/thram-elements.html">
```

Thram's Drawer

**Attributes**:
  *'right': Drawer floats right. By default it floats left.
  *'half': Cover half width of the <html> and 100% of the height
  *'width': Define specific width
  *'height': Define specific height

```html
<html>
<head>
  <!-- VENDOR -->

  <script src="components/webcomponentsjs/webcomponents.min.js"></script>
  <link rel="import" href="components/polymer-thram-elements/thram-elements.html">

  <!-- To cover the whole screen -->
  <style>
      html, body{ width:100%; height:100% }
  </style>
</head>
<body>
  <drawer-element half style="background: red;"></drawer-element>
  <drawer-element half right style="background: blue;"></drawer-element>
</body>
</html>
```