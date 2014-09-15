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
Insert the JavaScript file right before the closing Body element of your HTML document. Add a Script element to initialize the slider. Options are passed in JSON format. You also need jQuery to be set up


```html
<script src="js/parallax-plugin.js"></script>
<script>

// Initialize
$(document).ready(function(){
	$("#wrapper").buildSlider();
})
</script>
```

##Options are:

- animationSpeed (integer) - Set speed of the slide animation (min 900 recomended)
- pager (boolean) - Toggle pagination panel
- responsiveHeight (boolean) - Toggle adaptation height of the pages to the height of the window
- controls (boolean) - Toggle "Previous" and "Next" buttons
- activeOffset (integer) - Set top margin before active slide (px)
- infiniteLoop (boolean) - Toggle infinite pages loop (work in progress)
###Example
```html
// Setting options
$(document).ready(function(){
	$("#wrapper").buildSlider({
	  responsiveHeight: true,
	  activeOffset: 10,
	  animationSpeed: 1300,
	});
})
```
## Live Demo
[View Demo](http://www.ovvshi.pp.ua/parallax/)
