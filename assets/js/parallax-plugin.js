;(function($){	

	var defaults = {
		animationSpeed: 1000,
		pager: true,
		responsiveHeight: false,
		controls: true,
		activeOffset: -1,
		infiniteLoop: false,
	};

	$.fn.buildSlider = function(options){
		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){$(this).buildSlider(options)});
			return this;
		}

		// Variables

			var slider = {},
				el = this,
				windowWidth = $(window).width(),
				windowHeight = $(window).height(),				
				w = $(window);
				
				var s, l, a, aOffset, aHeight, aBotOffset, aIndex, n, p, li, prev, next, sFirstOffset, pOffset, nOffset;

	// Refresh vars

			var refresh = function(){
				s = el.children(".slide");
				l = s.length;
				sFirst = s.eq(0);
				sLast = s.eq(l-1);
				sFirstOffset = sFirst.offset().top+slider.settings.activeOffset;				
				sLast = s.eq(l-1);
				a = $(".slide.active");
				aFirst = $(".slide").eq(0).hasClass("active");
				aLast = sLast.hasClass("active");
				aIndex = a.index();
				aOffset = a.offset().top+slider.settings.activeOffset;
				aHeight = parseInt(a.css("height"));
				aBotOffset = aOffset+aHeight+slider.settings.activeOffset;
				if(aLast){
					if(slider.settings.infiniteLoop){
						n = $(".slide").eq(0);
					} else if (!slider.settings.infiniteLoop){
						n = $(".slide").eq(l-1);
					}
				} else {
					n = $(".slide").eq(a.index()+1);
				}
				p = $(".slide").eq(a.index()-1);
				nOffset = n.offset().top+slider.settings.activeOffset;
				pOffset = p.offset().top+slider.settings.activeOffset;
				$("div.pagination li").removeClass("active");
				$("div.pagination li").eq(aIndex).addClass("active");
			}

	// Setup slider
		// Create slides

			var createSlides = function(){
				el.children("section").addClass("slide");
				el.children("section").eq(0).addClass("active");
				refresh();				
			}

		// Create controls box
			var createControlBox = function(){				
				$("body").prepend("<div class='control-box'></div>");		
			}
		// Create controls
			var createControls = function(){
				$(".control-box").append("<div class='controls'><div class='prev'></div><div class='next'></div></div>");
				prev = $(".controls .prev");
				next = $(".controls .next");
			}
		// Create navigation bar

			var createNav = function() {				
				$(".control-box").append("<div class='pagination'><ul></ul></div>");				
				for (var i=0;i<l;i++){
					$("div.pagination ul").append("<li></li>");
					$("div.pagination li").eq(aIndex).addClass("active");							
				}
				li = $("div.pagination li");
			}

			var setup = function(){
				createSlides();
				if(slider.settings.pager || slider.setting.controls){createControlBox();}
				if(slider.settings.controls){createControls();}
				if(slider.settings.pager){createNav();}
			}

		// Responsive height

			var responsiveHeight = function(w){			
					s.css({"height":w+"px"});					
				}

		// Change Active Page			

			var  activeChange = function(w){
				if (w>aBotOffset) {
					if(!aLast){
						n.addClass("active");
						s.eq(aIndex).removeClass("active");
						refresh();
					}
				} else if (w<aOffset && !aFirst){
					p.addClass("active");
					s.eq(aIndex).removeClass("active");
					refresh();
				}		
			}

		// Controls visibility

			var controlsVisiblility = function(w){
				if(w<sFirst.offset().top+(parseInt(sFirst.css("height"))/2)){
					$(".controls .prev").fadeOut(300);
				} else {
					$(".controls .prev").fadeIn(300);
				}
				if (w>sLast.offset().top-(parseInt(s.eq(l-2).css("height"))/2)){
					$(".controls .next").fadeOut(300);
				} else {
					$(".controls .next").fadeIn(300);
				}
			}
		//
		
			var prevSlide = function(){
				if(aFirst){
					$("html, body").stop().animate({scrollTop:sFirstOffset+"px"},slider.settings.animationSpeed);
				} else {
					$("html, body").stop().animate({scrollTop:pOffset+"px"},slider.settings.animationSpeed);
				}
			}

			var nextSlide = function(){
				if($(window).scrollTop()<sFirstOffset){
					$("html, body").stop().animate({scrollTop:sFirstOffset+"px"},slider.settings.animationSpeed);
				} else {
					$("html, body").stop().animate({scrollTop:nOffset+"px"},slider.settings.animationSpeed);
				}
			}

		// Initializing slider

			var init = function(){
				slider.settings = $.extend({}, defaults, options);
				setup();
				controlsVisiblility($(window).scrollTop());
				refresh();				
				if(slider.settings.responsiveHeight){responsiveHeight(windowHeight);}
			}

			init();

		// Trigger
			if(slider.settings.controls){
				prev.on("click",function(){prevSlide()});
				next.on("click",function(){nextSlide()});
			}
			li.click(function(){
				var index = $(this).index();
				$("html, body").animate({scrollTop:s.eq(index).offset().top+slider.settings.activeOffset+"px"},slider.settings.animationSpeed);
			});

			w.on("scroll",function(){
				var w = $(window).scrollTop();
				activeChange(w);
				controlsVisiblility(w);
			});

			w.on("resize",function(){
				windowHeight = w.height();
				responsiveHeight(windowHeight);
			});	

	}

})(jQuery);