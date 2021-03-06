﻿function hash() {
	$(window).hashchange(function(){
		var x = location.hash.substring(1);
		$('.wrapper').moveTo(x);
	});
	$(window).hashchange();
}
$(window).load(function() {
	$('.loading').fadeOut(250);
});
$(document).ready(function() {
	$('body').append('<span class="linet"></span><span class="liner"></span><span class="linebl"></span><span class="linebr"></span><span class="linel"></span>');
	$('.scroller').append('<span class="shadowl"></span><span class="shadowr"></span>');
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.wrapper').onepage_scroll({
		   sectionContainer: 'section',
		   easing: 'ease',
		   animationTime: 0,
		   updateURL: true, 
		   pagination: false,
		   beforeMove: function(index) {},
		   afterMove: function(index) {},
		   loop: false,
		   responsiveFallback: false
		});
		/*document.ontouchmove = function(e) {
			e.preventDefault();
		};
		$('.wrapper').hammer().on('swipeleft', function() {
			$('.wrapper').moveUp();
		});
		$('.wrapper').hammer().on('swiperight', function() {
			$('.wrapper').moveDown();
		});*/
	}
	else {
		$('.wrapper').onepage_scroll({
		   sectionContainer: 'section',
		   easing: 'ease',
		   animationTime: 1000,
		   pagination: false,
		   updateURL: true, 
		   beforeMove: function(index) {},
		   afterMove: function(index) {},
		   loop: false,
		   responsiveFallback: false
		});
	}
	hash();
	$('.scroller').thumbnailScroller({
		scrollerType:'hoverAccelerate', 
		scrollerOrientation:'horizontal', 
		scrollSpeed:1,
		scrollEasing:'easeOutCirc', 
		scrollEasingAmount:100, 
		acceleration:1, 
		scrollSpeed:1000, 
		noScrollCenterSpace:10, 
		autoScrolling:0, 
		autoScrollingSpeed:2000, 
		autoScrollingEasing:'easeInOutQuad', 
		autoScrollingDelay:500 
    });
	$('.header .logo').click(function() {
		$('.wrapper').moveTo(1);
		window.location.hash = '#1';
		return false;
	});
	$('.index .navigator ul li.service, .header ul li.service').click(function() {
		$('.wrapper').moveTo(2);
		window.location.hash = '#2';
		return false;
	});
	$('.index .navigator ul li.oil, .header ul li.oil').click(function() {
		$('.wrapper').moveTo(3);
		window.location.hash = '#3';
		return false;
	});
	$('.index .navigator ul li.help, .header ul li.help').click(function() {
		$('.wrapper').moveTo(4);
		window.location.hash = '#4';
		return false;
	});
	$('.index .navigator h5, .header ul li.contacts').click(function() {
		$('.wrapper').moveTo(5);
		window.location.hash = '#5';
		return false;
	});
	$('.index .about p a.page5').click(function() {
		$('.wrapper').moveTo(5);
		window.location.hash = '#5';
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.section.help > ul li, .section.oil > ul li').each(function() {
		var a = $(this).children('h6').width()/2+18;
		$(this).children('h6').css({'margin-left': -a+'px'});
	});
	$('.section.oil > ul li').each(function() {
		var a = $(this).children('h6').width()/2+12;
		$(this).children('h6').css({'margin-left': -a+'px'});
	});	
	$('.section.oil > ul li').append('<span class="close"></span>');
	$('.section.oil > ul.passive li').live('click', function() {
		$(this).parent('ul').removeClass('passive');
		$(this).parent('ul').find('h3').fadeOut(250);
		$(this).parent('ul').children('li').delay(250).animate({'width': '70px'}, 500, 'easeOutExpo');
		$(this).parent('ul').delay(750).animate({'height': '95px'}, 500, 'easeOutBounce');
		$(this).delay(750).animate({'margin-top': '-95px'}, 500, 'easeOutBack', function() {
			var x = $(this).position();
			var timer = 0;
			if (x.left > 0) {
				timer = 500;
			}
			$(this).animate({'margin-left': -x.left+'px'}, timer, 'easeOutBack', function() {
				$(this).css({'position': 'absolute', 'left': '0', 'bottom': '95px', 'margin-left': '0'});
				$(this).animate({'width': '950px'}, 500, 'easeOutBounce');
				$(this).children('div').delay(500).slideDown(500, 'easeOutBack');
				$(this).children('.close').delay(500).fadeIn(500);
				$(this).addClass('active');
				$(this).siblings().addClass('other');
			});
		});
	});
	$('.section.oil > ul li.active .close').live('click', function() {
		var x = $(this).parent().index() * 80;
		$('.section.oil > ul li').removeClass('other');
		$(this).parent().children('div').slideUp(500, 'easeInBack');
		$(this).fadeOut(500);
		$(this).parent().delay(500).animate({'width': '70px'}, 500, 'easeOutBounce', function() {
			$(this).css({'position': 'relative', 'left': 'auto', 'bottom': 'auto', 'margin-left': -x+'px'});
			var timer2 = 0;
			if (x > 0) {
				timer2 = 500;
			}
			$(this).animate({'margin-left': '0'}, timer2, 'easeInBack');
			$(this).delay(250).animate({'margin-top': '0'}, 500, 'easeOutBack', function() {
				$(this).parent('ul').animate({'height': '380px'}, 500, 'easeOutBounce', function() {
					$(this).children('li').animate({'width': '310px'}, 500, 'easeOutExpo');
					$(this).find('h3').delay(750).fadeIn(250);
					$('.section.oil > ul').addClass('passive');
					$('.section.oil > ul li').removeClass('active');
				});
			});
		});
	});
	$('.section.oil > ul li.other').live('click', function() {
		var other = $(this);
		$('.section.oil > ul li').removeClass('other');
		var x = $('.section.oil > ul li.active').index() * 80;
		$('.section.oil > ul li.active').children('div').slideUp(500, 'easeInBack');
		$('.section.oil > ul li.active .close').fadeOut(500);
		$('.section.oil > ul li.active').delay(500).animate({'width': '70px'}, 500, 'easeOutBounce', function() {
			$('.section.oil > ul li.active').css({'position': 'relative', 'left': 'auto', 'bottom': 'auto', 'margin-left': -x+'px'});
			var timer2 = 0;
			if (x > 0) {
				timer2 = 500;
			}
			$('.section.oil > ul li.active').animate({'margin-left': '0'}, timer2, 'easeInBack');
			$('.section.oil > ul li.active').animate({'margin-top': '0'}, 500, 'easeOutBack', function() {
				$('.section.oil > ul li.active').removeClass('active');
				other.animate({'margin-top': '-95px'}, 500, 'easeOutBack', function() {
					var x = other.position();
					var timer = 0;
					if (x.left > 0) {
						timer = 500;
					}
					$(this).animate({'margin-left': -x.left+'px'}, timer, 'easeOutBack', function() {
						other.css({'position': 'absolute', 'left': '0', 'bottom': '95px', 'margin-left': '0'});
						other.animate({'width': '950px'}, 500, 'easeOutBounce');
						other.children('div').delay(500).slideDown(500, 'easeOutBack');
						other.children('.close').delay(500).fadeIn(500);
						other.removeClass('other').addClass('active');
						other.siblings().addClass('other');
					});
				});
			});
		});
	});
	$('.section.help > ul li div').append('<span class="close"></span>');
	$('.section.help > ul.passive li').live('click', function() {
		$(this).parent('ul').removeClass('passive');
		$(this).parent('ul').find('h3').fadeOut(250);
		$(this).parent('ul').children('li').delay(250).animate({'width': '132px', 'padding': '0'}, 500, 'easeOutExpo');
		$(this).parent('ul').delay(750).animate({'height': '142px'}, 500, 'easeOutBounce');
		$(this).delay(750).animate({'margin-top': '-142px'}, 500, 'easeOutBack', function() {
			var x = $(this).position();
			var timer = 0;
			if (x.left > 0) {
				timer = 500;
			}
			$(this).animate({'margin-left': -x.left+'px'}, timer, 'easeOutBack', function() {
				$(this).css({'position': 'absolute', 'left': '0', 'bottom': '142px', 'margin-left': '0'});
				$(this).animate({'width': '950px'}, 500, 'easeOutBounce');
				$(this).children('div').delay(500).slideDown(500, 'easeOutBack');
				$(this).find('.close').delay(500).fadeIn(500);
				$(this).addClass('active');
				$(this).siblings().addClass('other');
			});
		});
	});
	$('.section.help > ul li.active .close').live('click', function() {
		var x = $(this).parents('li').index() * 142;
		$('.section.help > ul li').removeClass('other');
		$(this).parents('li').children('div').slideUp(500, 'easeInBack');
		$(this).fadeOut(500);
		$(this).parents('li').delay(500).animate({'width': '132px'}, 500, 'easeOutBounce', function() {
			$(this).css({'position': 'relative', 'left': 'auto', 'bottom': 'auto', 'margin-left': -x+'px'});
			var timer2 = 0;
			if (x > 0) {
				timer2 = 500;
			}
			$(this).animate({'margin-left': '0'}, timer2, 'easeInBack');
			$(this).delay(250).animate({'margin-top': '0'}, 500, 'easeOutBack', function() {
				$(this).parent('ul').animate({'height': '426px'}, 500, 'easeOutBounce', function() {
					$(this).children('li').animate({'width': '470px'}, 500, 'easeOutExpo');
					$(this).children('li').filter(':last').animate({'padding': '0 240px'}, 250, 'easeOutSine');
					$(this).find('h3').delay(750).fadeIn(250);
					$('.section.help > ul').addClass('passive');
					$('.section.help > ul li').removeClass('active');
				});
			});
		});
	});
	$('.section.help > ul li.other').live('click', function() {
		var other = $(this);
		$('.section.help > ul li').removeClass('other');
		var x = $('.section.help > ul li.active').index() * 142;
		$('.section.help > ul li.active').children('div').slideUp(500, 'easeInBack');
		$('.section.help > ul li.active').find('.close').fadeOut(500);
		$('.section.help > ul li.active').delay(500).animate({'width': '132px'}, 500, 'easeOutBounce', function() {
			$('.section.help > ul li.active').css({'position': 'relative', 'left': 'auto', 'bottom': 'auto', 'margin-left': -x+'px'});
			var timer2 = 0;
			if (x > 0) {
				timer2 = 500;
			}
			$('.section.help > ul li.active').animate({'margin-left': '0'}, timer2, 'easeInBack');
			$('.section.help > ul li.active').animate({'margin-top': '0'}, 500, 'easeOutBack', function() {
				$('.section.help > ul li.active').removeClass('active');
				other.animate({'margin-top': '-142px'}, 500, 'easeOutBack', function() {
					var x = other.position();
					var timer = 0;
					if (x.left > 0) {
						timer = 500;
					}
					$(this).animate({'margin-left': -x.left+'px'}, timer, 'easeOutBack', function() {
						other.css({'position': 'absolute', 'left': '0', 'bottom': '142px', 'margin-left': '0'});
						other.animate({'width': '950px'}, 500, 'easeOutBounce');
						other.children('div').delay(500).slideDown(500, 'easeOutBack');
						other.find('.close').delay(500).fadeIn(500);
						other.removeClass('other').addClass('active');
						other.siblings().addClass('other');
					});
				});
			});
		});
	});
	var tabs = $('.section.service .tab');
	$('.scroller a').click(function () {
		tabs.slideUp(500, 'easeOutBack');
		tabs.filter(this.hash).delay(500).slideDown(500, 'easeOutBack');	
		$('.scroller a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	$('.section.service .tab').append('<span class="close"></span>');
	$('.section.service .tab .close').click(function() {
		tabs.slideUp(500, 'easeOutBack');
		$('.scroller a').removeClass('active');
		return false;
	});
	var step = 40;
	var height = $(window).height();
	var verticalsize = Math.floor((height/step));
	var h = (verticalsize-1)*step;
	var y = Math.floor(height-h)/2;
	var z = y+h-10;
	var width = $(window).width();
	var horizontalsize = Math.floor((width/step));
	var w = (horizontalsize-1)*step;
	var x = Math.floor(width-w)/2;
	var bw = (Math.floor(w/80)*40)-80;
	$('.linet').css({'left': x+'px', 'top': y+'px', 'width': w+'px'});
	$('.liner').css({'right': x+'px', 'top': y+'px', 'height': h+'px'});
	$('.linebl').css({'left': x+'px', 'top': z+'px', 'width': bw+'px'});
	$('.linebr').css({'right': x+'px', 'top': z+'px', 'width': bw+'px'});
	$('.linel').css({'left': x+'px', 'top': y+'px', 'height': h+'px'});
	$('.copy').css({'top': z+'px'});
	$('.scroller').css({'left': x+'px', 'width': w+'px'});
});
$(window).resize(function() {
	var step = 40;
	var height = $(window).height();
	var verticalsize = Math.floor((height/step));
	var h = (verticalsize-1)*step;
	var y = Math.floor(height-h)/2;
	var z = y+h-10;
	var width = $(window).width();
	var horizontalsize = Math.floor((width/step));
	var w = (horizontalsize-1)*step;
	var x = Math.floor(width-w)/2;
	var bw = (Math.floor(w/80)*40)-80;
	$('.linet').css({'left': x+'px', 'top': y+'px', 'width': w+'px'});
	$('.liner').css({'right': x+'px', 'top': y+'px', 'height': h+'px'});
	$('.linebl').css({'left': x+'px', 'top': z+'px', 'width': bw+'px'});
	$('.linebr').css({'right': x+'px', 'top': z+'px', 'width': bw+'px'});
	$('.linel').css({'left': x+'px', 'top': y+'px', 'height': h+'px'});
	$('.copy').css({'top': z+'px'});
	$('.scroller').css({'left': x+'px', 'width': w+'px'});
});