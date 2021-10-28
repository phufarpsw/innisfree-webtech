var UserAgent = navigator.userAgent;

/* Common */
$(document).ready(function() {
	/* Search */
	$(".btnSearchOpen").click(function(){
		$(".header .searchForm").toggle();
		$(".btnSelectOpen").removeClass("on");
		$(".userForm, .header .countryForm").hide();
		$("#wrap").toggleClass("layerBg");
		$(".btnMobileMenu").removeClass("active");
		$(".gnbMenuM").removeClass("active");
	});
	
	$(".searchForm .closeBtn").click(function(){
		$(".header .searchForm").hide();
		$("#wrap").removeClass("layerBg");
		playScroll();
	});
	
	/* User */
	$(".btnMemberOpen").click(function(){
		$(".userForm").toggle();
		$(".btnSelectOpen").removeClass("on");
		$(".header .searchForm, .header .countryForm").hide();
		$("#wrap").removeClass("layerBg");
	});
	
	$(".btnSelectOpen").click(function(){
		$(".header .countryForm").toggle();
		$(this).toggleClass("on");
		$(".header .searchForm, .header .userForm").hide();
		$("#wrap").removeClass("layerBg");
	});
	
	/* Mobile */
	$(".btnMobileMenu").click(function(){
		$(this).toggleClass("active");
		$(".gnbMenuM").toggleClass("active");
		$(".searchForm").hide();
		$("#wrap").removeClass("layerBg");
	});
	
	/* gnb */
	$(".gnbMain > li > a").on('mouseover focusin',function(){
		var thisMenu = $(this).parent("li").attr("class");
		
		$(".gnbMenu").children(".position").children("div").hide();
		
		$(".gnbMenu").find("div").each(function() {		
			if ( $(this).attr("class") == thisMenu ) {
				$(this).siblings().hide();
				$(this).show();
			}
		});
		
		$(this).addClass("on");
		$(this).parent("li").siblings().children("a").removeClass("on");
	});
	
	$(".gnbMenu").on('mouseleave',function(){
		$(".gnbMain > li > a").removeClass("on");
		$(".gnbMenu").children(".position").children("div").hide();
	});
	
	$(".header, #container").on("mouseover",function(e){
		 if(!$('.gnb, .gnbMenu').has(e.target).length) { 
			$(".gnbMain > li > a").removeClass("on");
			$(".gnbMenu").children(".position").children("div").hide();
		  } 			
	});
	
	/* gnb mobile */
	$(".menuM .menu > dt > a").click(function(){
		$(this).parents(".menu").toggleClass("active");
		$(this).parent("dt").next("dd").slideToggle();
	})
	
	/* Footer */
	$(".foot_list dl").click(function(){
		if ( $(window).width() < 768 ){
			$(this).toggleClass("active");
			$(this).siblings().removeClass("active");
		}
	});
	
	if ( $(".foot_list dl").length > 7 ) {
		$(".foot_list").addClass("fullList");
	}
});

/* Scroll Top */
function scrollSet(scrollPo){
	var headerH = $(".header").height();
	$('html, body').animate({'scrollTop' : $(scrollPo).offset().top - headerH},500);
}

/* PRD */
$(document).on("click", ".prdDropInfo .prdMenu h3" , function(e){
	$(this).parents(".prdMenu").toggleClass("open");
});

/* PDP */
function sortToggle(){
	$(".sortList").toggleClass("active");
	$(".sortClear a").toggleClass("open");
	
	if ( $(".sortClear a").hasClass("open") ){
		$(".sortClear a").text("CLOSE");	
	}else{
		$(".sortClear a").text("SEE MORE");
	}
	
	$(".reviewSortWrap .tit .sortBtn").toggleClass("off");
}

/* PDP IMG */
$(document).ready(function() {
	$('.pdpSlider').on('init', function(event, slick){
		setTimeout(function(){
			$(".pdpSlider").addClass("show");	
		},500);
	}).slick({
		speed:700,
		arrows: true,
		dots: true,
		fade:true,
		dotsClass:'indicator',
		infinite: true,
		autoplay:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe:true
	})
	
	$(document).on("mouseenter", ".pdpSlider" , function(e){
		$(".pdpSlider .slick-arrow").fadeIn();
	});
	
	$(document).on("mouseenter", ".content" , function(e){
		$(".pdpSlider .slick-arrow").fadeOut();
	});
	
});

/* PDP ColorChip */
$(document).ready(function() {
	$('.choiceChip li a').bind({
		'click' : function(){
			$('.pdpColorChip .choiceChip ul li').removeClass('on');
			$(this).parent('li').addClass('on');
			
			var title = $(this).find('img').attr('alt');
			$('.chipTxt').text(title);

			var src = $(this).attr('href');
			$('.texture img').attr({'src' : src});
			return false;
		},
		'mouseover' : function(){
			$('.pdpColorChip .choiceChip ul li').removeClass('on');
			$(this).parent('li').addClass('on');

			var title = $(this).find('img').attr('alt');
			$('.chipTxt').text(title);
	
			var src = $(this).attr('href');
			$('.texture img').attr({'src' : src});
			return false;
		}
	});
	
	var ChipLength = $(".choiceChip ul li").length;
	
	if ( ChipLength > 6 ){
		$(".choiceChip").addClass("addOn");
	}
	
	$(".chipToggle").click(function(){
		$(this).parent(".choiceChip").removeClass("addOn");	
		$(".choiceChip ul").css("text-align","left");
	});
});

/* PDP Review */
$(document).ready(function() {
	var isSliding;
	
	$('.recomSlider').slick({
		speed:500,
		arrows: true,
		dots: false,
		infinite: false,
		autoplay:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
	}).on('beforeChange', function(){
		isSliding = true;
	}).on('afterChange', function(){
		isSliding = false;
	}).find(".recomReview > a").click(function(){
		if (isSliding){
			event.stopImmediatePropagation();
			event.stopPropagation();
			event.preventDefault();
			return;
		}
	});
});

/* PDP Mall */
function mallOpen(){
	$(".pdpLinkPop").show();
}

function mallClose(){
	$(".pdpLinkPop").hide();
}

$(function(){
	$(".pdpLinkPop").click(function(e) { 
		if($(".pdpLinkPop").css("display") == "block") {
			   if(!$('.pdpLinkBox').has(e.target).length) { 
					$(".pdpLinkPop").hide();
				} 
		}
	});
});

/* Layer Popup */
function showReview(e){
	thisPop = $("#"+e);
	$("html").addClass("hidden");
	thisPop.show();
	stopScroll();
	
	if ( thisPop.find('.layerPop').height() > $(window).height() ) {
		thisPop.find('.layerPop').addClass("fix");
		thisPop.css("overflow","auto");
	}else{
		thisPop.find('.layerPop').removeClass("fix");
		thisPop.css("overflow","hidden");
	}
	
	if ( thisPop.find('.reviewImg').length > 0 ){
		thisPop.removeClass("notImg");
	}else{
		thisPop.addClass("notImg");
	}
}

function hideReview(e){
	playScroll();
	$("html").removeClass("hidden");
	$("#"+e).hide();
	$("#"+e).find("iframe").remove();
	
	if ($(".reviewImgSlider.slick-slider").length){
		$('.reviewImgSlider').slick("unslick");	
	}
}

$(document).ready(function() {
	if(UserAgent.match(/iPhone|iPod|iPad|iPad2|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
	$(".layerWrap").addClass("mobile");
}
});

/* Mobile Scroll Control */	
function stopScroll(){
	wrapPostion = $(window).scrollTop();
	
	if (wrapPostion != 0){
		$('#wrap').css({ 'position':'fixed', 'left':0, 'top':-wrapPostion, 'width':'100%', 'height':'100%', 'overflow':'visible' });
		winTop = $("#wrap").css("top");
	};
}

function playScroll(){
	var winScroll = +-parseInt(winTop);
	
	$('#wrap').removeAttr('style');
	$(window).scrollTop(winScroll)
}

//Scroll Fade
var agent = navigator.userAgent.toLowerCase();

function fnScrollfade(){
	$('.scrollfade').each( function(i){
		var bottomObject = $(this).offset().top;
		var bottomWindow = $(window).scrollTop() + $(window).height() / 1.5;
		
		if( bottomWindow >= bottomObject ){
			$(this).addClass('fadeInUp');
		};
	});
};

$(document).ready(function() {
	fnScrollfade();
	
	$(window).scroll(function(){
		fnScrollfade();
	});
});

/* 익스 scrollfade 보류 
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	$(document).ready(function(e) {
		$(".scrollfade").addClass("fadeInUp");
	});
}else{
	$(document).ready(function() {
		fnScrollfade();
		
		$(window).scroll(function(){
			fnScrollfade();
		});
	});
} */

//Page Tab
$(window).on('load', function(){
	$(document).find(".brandSubList").each(function () {
		var idx = $('.brandSubTab ul li.on').length;
		if (idx>0){
			var _pLeft = parseInt($(".brandSubTab li.on").offset().left);
			var _pWidth = parseInt($(".brandSubTab li.on").width() / 2)
			var _wWidth = $(window).width() / 2
			/*
			$(this).children("ul").css({
				'transform': 'translate('+-_pLeft+'px,0)'
			});
			*/
			$(this).scrollLeft(_pLeft - _wWidth + _pWidth);
		}
	});
});

$(document).ready(function() {
	$(".storeTab li a").click(function(){
		$(this).parent("li").addClass("on").siblings().removeClass("on");;
		
		return false;
	});
});

/**
VOD
**/
var video, video_par;
function fnVideoPlay(e,st){
	video = document.getElementById(e);
	video.play();

	video_par = $('#' + e).closest('.vod_area');
	video_par.find('.play').stop().fadeOut();
	if (st) {		
		video_par.find('.stop').hide();
		video_par.find('.golink').stop().fadeIn();
	} else {
		video_par.find('.stop').stop().fadeIn();
		video_par.find('.golink').hide();
	}
};
function fnVideoStop(e,st){
	video = document.getElementById(e);
	video.pause();
	//video.currentTime = 1;

	video_par = $('#' + e).closest('.vod_area');
	video_par.find('.play').stop().fadeIn();
	if (st) {		
		video_par.find('.stop').show();
		video_par.find('.golink').stop().fadeOut();
	} else {
		video_par.find('.stop').stop().fadeOut();
		video_par.find('.golink').show();
	}
};
function videoPopOn(e, videoCode){
	$('#' + e).find('.vodIframe').html(
		'<iframe src="https://player.vimeo.com/video/' + videoCode + '?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
	)
	showLayer(e);
	return false;
}
function videoPopOff(e){
	$('#' + e).find('.vodIframe').html('');
}


/**
ABOUT
**/
/* 로고변천사 탭 */
$(document).on('click', '.brand .logo_tab_btn a', function(){
	if ( $(window).width() > 1200 ) {
		$('.web .brand .logo_tab_btn a').removeClass('on');
		$(this).addClass('on');
		$('.web .brand .logo_tab_con').removeClass('active');
		$($(this).attr('href')).addClass('active');
		return false;
	}
	
	if ( $(window).width() < 1200 ) {
		$('.mobile .brand .logo_tab_btn a').removeClass('on');
		$(this).addClass('on');
		$('.mobile .brand .logo_tab_con').removeClass('active');
		$($(this).attr('href')).addClass('active');
		return false;
	}
});

/* 원료이미지 탭 */
$(document).on('click', '.history_type li a', function(){
	if ( $(window).width() > 1200 ) {
		var idx = $(this).parent().index();
		$('.web .history_type li a').removeClass('on');
		$(this).addClass('on');
		$('.web .history_type .img_wrap .tab_con').hide().eq(idx).show();
		return false;
	}
	
	if ( $(window).width() < 1200 ) {
		var idx = $(this).parent().index();
		$('.mobile .history_type li a').removeClass('on');
		$(this).addClass('on');
		$('.mobile .history_type .img_wrap .tab_con').hide().eq(idx).show();
		return false;
	}
});

$(document).on('click', '.brand .brand_type3 a', function(){
	if ( $(window).width() < 1200 ) {
		$('.brand .brand_type3 a').removeClass('active');
		$(this).addClass('active');
		$('.brand .brand_type3 dd').hide();
		$($(this).attr('href')).show();
		return false;
	}
});


/* 원료 배경색 변경 */
$(window).on('scroll', function(){
	if ( $(window).width() > 1200 ){
		if ($('.web .ingredients_con').length > 0)
		{
			var ingredients_con_T = $('.web .ingredients_con').offset().top;//원료컨텐츠 시작위치
			var ingredients_con_H = $('.web .ingredients_con').height();//원료컨텐츠 높이
			var ingredients_con_Leng = $('.web .ingredients_con .conmid').length;//원료컨텐츠 갯수
			if ($(window).scrollTop() > ingredients_con_T && $(window).scrollTop() < ingredients_con_T + ingredients_con_H)
			{
				for (var i = 1 ; i <= ingredients_con_Leng ; i++ )
				{
					if ($(window).scrollTop() > $('.web .ingredients_con .conmid').eq(i-1).offset().top - 300)
					{
						$('.web .ingredients_con').removeClass().addClass('ingredients_con');
						$('.web .ingredients_con').addClass('bg_type'+(i));
					}
				}
			}
		}
	}
	
	if ( $(window).width() < 1200 ){
		if ($('.mobile .ingredients_con').length > 0)
		{
			var ingredients_con_T = $('.mobile .ingredients_con').offset().top;//원료컨텐츠 시작위치
			var ingredients_con_H = $('.mobile .ingredients_con').height();//원료컨텐츠 높이
			var ingredients_con_Leng = $('.mobile .ingredients_con .con_type').length;//원료컨텐츠 갯수
			if ($(window).scrollTop() > ingredients_con_T && $(window).scrollTop() < ingredients_con_T + ingredients_con_H)
			{
				for (var i = 1 ; i <= ingredients_con_Leng ; i++ )
				{
					if ($(window).scrollTop() > $('.mobile .ingredients_con .con_type').eq(i-1).offset().top - 300)
					{
						$('.mobile .ingredients_con').removeClass().addClass('ingredients_con');
						$('.mobile .ingredients_con').addClass('bg_type'+(i));
					}
				}
			}
		}
	}
});