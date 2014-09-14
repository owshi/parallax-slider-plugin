#Parallax slider Plugin

## What is it?
A simple js plugin to make a one page parallax slider

## Features
- Responsive height

## Implementation

###CSS and Image
Insert the CSS in the Head of your HTML document.

```html
<link rel="stylesheet" href="/css/parallax-plugin.css" />
```

###HTML
Insert the div with sections inside as your pages
```html
<div id="wrapper">
	<section>
		...
	</section>

	...

	<section>
		...
	</section>
</div>
```

###JavaScript
Insert the JavaScript file right before the closing Body element of your HTML document. Add a Script element to initialize the slider. Options are passed in JSON format. You also need jQuery. The options are:


```html
<script src="js/parallax-plugin.js"></script>
<script>

// Initialize
$(document).ready(function(){
	$("#wrapper").buildSlider();
})
</script>
```
## Live Demo
[View Demo](http://www.ovvshi.pp.ua/parallax/)
