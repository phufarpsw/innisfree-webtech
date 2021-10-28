//<![CDATA[
window.browser = {
	isMobile : function(){ return navigator.platform && "win16|win32|win64|mac".indexOf(navigator.platform.toLowerCase())<0 ? true : false; }
}
//]]>

/* ========== [레이아웃] ========== */
// 언어선택
jQuery(function(){
	$('#header .headerMenu .languageMenu').hover(function(){
		$(this).find('.currentLanguage').addClass('on').find('+ .languageList').show();
	}, function(){
		$(this).find('.currentLanguage').removeClass('on').find('+ .languageList').hide();
	});
	
	$('#footer .share .footerLanguage a').bind('click', function(){
		$('#footer .footerLanguageSel').show();
		return false;
	});
	$('#footer .footerLanguageSel .footerLanguageClose a').bind('click', function(){
		$('#footer .footerLanguageSel').hide();
		return false;
	});
});

// 검색열기
jQuery(function(){
	$('#header .headerMenu .searchMenu a.btnSearchOpen').bind('click', function(){
		if($('#header .headerMenu .searchArea').is(':visible')){
			$(this).removeClass('open');
			$('#header .headerMenu .searchArea').hide();
		}
		else{
			$(this).addClass('open');
			$('#header .headerMenu .searchArea').show();
		}
		return false;
	});
});

// GNB메뉴
jQuery(function(){
	// [웹] GNB
	$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li a').bind('mouseover', function(){
		if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			var idx = $('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').index($(this).parent('li')) + 1;
			$('#header .gnbSubWrap .gnbSubMenu').hide();
			$('#header .gnbSubWrap .gnbSubMenu'+idx).show();
			$('#header .gnbSubWrap .gnbSubMenu .gnbSub .subCate').show();
			$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
			$(this).parent('li').addClass('on');
		}
	});
	$('#header .headerLeft .gnbMenuWrap .gnbMenu').bind('mouseleave', function(){
		if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
			$('#header .gnbSubWrap .gnbSubMenu').hide();
		}
	});
	$('#header .gnbSubWrap .gnbSubMenu').bind({
		'mouseover' : function(){
			if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
				var idx = $(this).attr('class').split('gnbSubMenu gnbSubMenu')[1] - 1;
				$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on').eq(idx).addClass('on');
				$(this).show();
			}
		},
		'mouseleave' : function(){
			if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
				$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
				$(this).hide();
			}
		}
	});
	
	// [모바일] GNB
	/*$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li a').bind('click', function(){
		if(!$('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			var idx = $('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').index($(this).parent('li')) + 1;
			if($('#header .gnbSubWrap .gnbSubMenu'+idx).length > 0){
				$('#header .gnbSubWrap .gnbSubMenu .gnbSub .subCate').hide();
				$('#header .gnbSubWrap .gnbSubMenu .gnbSub .cateTitle a').removeClass('on');
				if(!$(this).parent('li').hasClass('on')){
					$('#header').addClass('gnbOpen');
					$('#header .gnbSubWrap .gnbSubMenu').hide();
					$('#header .gnbSubWrap .gnbSubMenu'+idx).show();
		
					$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
					$(this).parent().addClass('on');
					$('#header .gnbSubWrap .gnbSubClose').show();
				}
				else{
					$('#header').removeClass('gnbOpen');
					$('#header .gnbSubWrap .gnbSubMenu').hide();
					$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
					$('#header .gnbSubWrap .gnbSubClose').hide();
				}
				return false;
			}
		}
	});*/
	// [모바일] GNB 2depth
	/*$('#header .gnbSubWrap .gnbSubMenu .gnbSub .cateTitle a').bind('click', function(){
		if(!$('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			if($(this).parent('.cateTitle').next('.subCate').length > 0){
				if(!$(this).hasClass('on')){
					$('#header .gnbSubWrap .gnbSubMenu .gnbSub .subCate').hide();
					$(this).parent('.cateTitle').next('.subCate').show();
		
					$('#header .gnbSubWrap .gnbSubMenu .gnbSub .cateTitle a').removeClass('on');
					$(this).addClass('on');
				}
				else{
					$('#header .gnbSubWrap .gnbSubMenu .gnbSub .subCate').hide();
					$('#header .gnbSubWrap .gnbSubMenu .gnbSub .cateTitle a').removeClass('on');
				}
				return false;
			}
		}
	});*/
	// [모바일] GNB 닫기
	/*$('#header .gnbSubWrap .gnbSubClose a').bind('click', function(){
		$('#header').removeClass('gnbOpen');
		$('#header .gnbSubWrap .gnbSubMenu').hide();
		$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
		$('#header .gnbSubWrap .gnbSubClose').hide();
		return false;
	})*/
	
	// [모바일] GNB 숨기기
	/*$(window).bind('scroll', function(){
		if(!$('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			if($(window).scrollTop()  > 0 && !$('#header .gnbSubWrap .gnbSubMenu').is(':visible')){
				$('#header .headerLeft .gnbMenuWrap').css({'margin-top' : -40});
			}
			else{
				$('#header .headerLeft .gnbMenuWrap').css({'margin-top' : 0});
			}
		}
		else{
//			$('#header .gnbSubWrap .gnbSubMenu .gnbSub ul').hide();
		}
	});*/

	// 브라우저 사이즈조절로 웹, 모바일 변환시 GNB초기화, 풋터초기화, filterBy초기화
	$(window).bind('resize', function(){
		if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			$('#header').removeClass('gnbOpen');
			$('#header .gnbSubWrap .gnbSubMenu .gnbSub .subCate').show();
			$('#header .gnbSubWrap .gnbSubMenu .gnbSub .cateTitle a').removeClass('on');
			$('#header .gnbSubWrap .gnbSubMenu').hide();
			$('#header .headerLeft .gnbMenuWrap .gnbMenu .gnbMenuList ul li').removeClass('on');
			$('#header .gnbSubWrap .gnbSubClose').hide();
			$('#header .headerLeft .gnbMenuWrap').css({'height' : 'auto' , 'margin-top' : 0});
			
			$('#footer .footerLanguageSel').hide();
			
			$('.productListWrap .productLNB .filterBy').removeClass('filterByOpen');

			closeSidemenu();
		}
		else{
//			$('#header .gnbSubWrap .gnbSubMenu .gnbSub ul').hide();
		}
	});
});

// #wrap클래스변경
jQuery(function(){
	function isPc(){
		if($('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
			$('#wrap').addClass('pcWrap');
		}
		else{
			$('#wrap').removeClass('pcWrap');
		}
	};
	isPc();
	$(window).bind('resize', function(){
		isPc();
	});	
});

/* ========== [공통] ========== */
// 팝업열기 showLayer(팝업아이디(또는클래스) , 검정배경아닐땐 'N')
function showLayer(ele , modalScreen, callback){
	var tempT = $(window).scrollTop() + 100;

	$(ele).css({'top' : tempT}).show();
	$('html').addClass('popOpen');
	if(modalScreen != 'N'){
		$('.modalScreen').show();
	};
	
	// [181126] 모달을 열 때 특정한 액션을 취할 수 있도록, 콜백 함수 옵션을 추가 (3번째 매개변수로 고정)
	// @example
	// showLayer('#layerPhone', undefined, function() {
	//    // do something here...
	// });
	if (typeof callback === 'function') {
		callback( $(ele) );
	}
};
// 팝업닫기 hideLayer(팝업아이디(또는클래스) , 검정배경유지할땐'N')
function hideLayer(ele , modalScreen){
	$(ele).hide();
	$('html').removeClass('popOpen');
	if(modalScreen != 'N'){
		$('.modalScreen').hide();
	};
};

/* ========== [사이드메뉴] ========== */


$(function () {
	/*$(window).resize(function(){
		if ($('.mainWrap').hasClass('pcWrap') && $('.sidemenu .layer').hasClass('open')) {
			closeSidemenu();
		}
	})*/

	var $sidemenu = $('#sidemenu');

	// 사이드메뉴 depth 조정
	$(document).on('click', '.cNavMenu a', function(e) {
		var $this = $(this);
		var targetSelector = $this.attr('href');

		// depth3이 아니면 href 값으로 이동하지 않음
		if ($this.attr('href').charAt(0) === '#') {
			e.preventDefault();
		}

		if ( $this.hasClass('hasSubmenu') ) {
			var depth = $this.closest('.cNavMenu').data('depth');
			var depthName = $this.text();
			var targetName = $this.attr('data-value');

			$('.cNavMenu').hide();

			$(targetSelector).show()
				.find('li').hide()
					.filter('.' + targetName).show();

			$('.cNavMenu .depth' + (depth + 1))
				.text(depthName);

			$('#cNavDepth' + (depth + 1))
				.find('.current.depth')
					.text(depthName);
		}
		else if ( $this.hasClass('depth') ) {
			$('.cNavMenu').hide();
			$(targetSelector).show();
		}
	});

	$sidemenu
		.find('.langSelectOpen')
			.click(function openSidemenuLangSelect(e) {
				e.preventDefault();
				$sidemenu.find('.langSelectForm').slideDown(200);
			})
		.end()
		.find('.langSelectClose')
			.click(function closeSidemenuLangSelect(e) {
				e.preventDefault();
				$sidemenu.find('.langSelectForm').slideUp(200);
			});
});

// 사이드메뉴 열기
function openSidemenu() {
	var $window = $(window);
	var $body = $('body');
	var $menu = $('#sidemenu');
	var $menuLayer = $('.layer', $menu);
	var scrollX = $window.scrollLeft();
	var scrollY = $window.scrollTop();

	// 메뉴 토글
	$menu.fadeIn(100, function () {
		$menuLayer.addClass('open');
	});

	// 현재 스크롤 위치를 잃지 않으면서 scroll 액션 차단
	$body
		.css({
			position: 'fixed',
			top: -scrollY +'px',
			left: -scrollX +'px'
		}).data({
			scrollX: scrollX,
			scrollY: scrollY
		});
}

// 사이드메뉴 닫기
function closeSidemenu() {
	var $body = $('body');
	var $menu = $('#sidemenu');
	var $menuLayer = $('.layer', $menu);
	var scrollX = $body.data('scrollX');
	var scrollY = $body.data('scrollY');

	// 메뉴 토글
	$menuLayer
		.removeClass('open')
		.one('transitionend', function () {
			if ( !$menuLayer.hasClass('open') ) {
				$menu.fadeOut(100);
			}
		});

	// 스크롤 차단 해제
	$body.css({
		position: '',
		top: '',
		left: ''
	});

	// 저장된 스크롤 포지션으로 수동 이동
	//window.scrollTop(scrollX, scrollY);
}

// 메인이벤트배너
// ===== 형식
// =====	$(document).ready(function(){
// =====		$("#main_videoBanner").eventBanner({
// =====			$list : $('ul'),
// =====			$navi : $('.navi')
// =====		});
// =====	});
jQuery.fn.eventBanner = function( _o ){
	return this.each(function(){
		var  o = jQuery.extend({}, _o);

		var $wrap = jQuery(this);
		var $list = $wrap.find(o.$list);
		var $navi = $wrap.find(o.$navi);

		var $li = $list.find('li');
		var timer;
		var num = $li.length;
		var i = 0;

		$li.eq(0).css({'opacity' : 1}).addClass('on');

		$navi.eq(0).addClass('on');
		if(num == 1){
			$navi.hide()
		}
	
		function Action(){
			if(num == 1) return false;
			timer = setInterval(function(){
				i++;
				i = (i < num) ? i : 0;
				$li.removeClass('on').stop().animate({'opacity' : 0}, 500);
				$li.eq(i).addClass('on').stop().animate({'opacity' : 1}, 500);
	
				$navi.removeClass('on');
				$navi.eq(i).addClass('on');
			},4000);
		};
	
		function pause(){
			clearInterval(timer);
		}
		function paly(){
			Action();
		}
	
		$navi.bind('click', function(){
			i = $navi.index($(this));
			$li.removeClass('on').stop().animate({'opacity' : 0}, 500);
			$li.eq(i).addClass('on').stop().animate({'opacity' : 1}, 500);
	
			$navi.removeClass('on');
			$navi.eq(i).addClass('on');
			pause();
			paly();
			return false;
		});
		Action();
	});
};

/* ========== [서브] ========== */
// 제품리스트 - filterBy
jQuery(function(){
	$('.productListWrap .productLNB .filterBy .title h3 a').bind('click', function(){
		$('.productListWrap .productLNB .filterBy').toggleClass('filterByOpen');
		return false;
	});
	$('.productListWrap .productLNB .filterBy .filterByBtn a.btnClose').bind('click', function(){
		$('.productListWrap .productLNB .filterBy').removeClass('filterByOpen');
		return false;
	});
});

// 제품상세 - 비주얼스토리 보기
function visualStoryDetail(ele){
	var src = $(ele).attr('href');
	$('#visualStoryDetail .visualStoryDetailView img').attr({'src' : src});
	showLayer('#visualStoryDetail');
}

// 제품상세 - 상단 BEST, NEW 아이콘 컬러
jQuery(function(){
	$('.productDetailVisual .pdtSummary .icon span').each(function(){
		var color = $('.productDetailVisual .pdtSummary .pdtName em').css('color');
		$(this).css({'color' : color , 'border-color' : color});
	});
});

// 제품상세  - 컬러칩
jQuery(function(){
	$('.pdtReviewinfo .inner .aboutColor .colorchip ul li a').bind({
		'click' : function(){
			$('.pdtReviewinfo .inner .aboutColor .colorchip ul li').removeClass('on');
			$(this).parent('li').addClass('on');
			
			var title = $(this).find('img').attr('alt');
			$('#colorchipName').text(title);

			var src = $(this).attr('href');
			$('#texture_img').attr({'src' : src});
			return false;
		},
		'mouseover' : function(){
			$('.pdtReviewinfo .inner .aboutColor .colorchip ul li').removeClass('on');
			$(this).parent('li').addClass('on');

			var title = $(this).find('img').attr('alt');
			$('#colorchipName').text(title);

				
			var chkAtt = $(this).attr('att');
			if(chkAtt == "Y") {
				var src = $(this).attr('href');
				$('#texture_img').attr({'src' : src});
			}
		}
	});
});

// 제품상세 - 탭이동
function pdtDetailGoto(ele){
	var target = ele
	var tmpT = $(target).find('.pageTitle').position().top - 100;
	$('html, body').animate({scrollTop : tmpT});
}

// 제품상세 - 리뷰키워드 열기,닫기
function openKeyword(){
	$('.reviewBox .reviewKeyword').addClass('open');
}
function closeKeyword(){
	$('.reviewBox .reviewKeyword').removeClass('open');
}

// 이벤트 상세 댓글더보기
function moreReply(ele){
	if($(ele).parent('.moreReply').hasClass('on')){
		$(ele).parent('.moreReply').removeClass('on');
		$(ele).parents('.unit').next('.replyUnit').hide();
	}
	else{
		$(ele).parent('.moreReply').addClass('on');
		$(ele).parents('.unit').next('.replyUnit').show();
	}
};

// 로그인탭
function loginTab(ele){

	var target = $(ele).attr('href');
	$('.loginTabCont').hide();
	$(target).show();

	$('.memberWrap .loginBox .loginTab ul li').removeClass('on');
	$(ele).parent('li').addClass('on');
}

// 마이페이지메인 - 멤버십카드보기
function cardBackView(){
	$('.mypageSummary .aboutCard').addClass('back');
};
function cardFrontView(){
	$('.mypageSummary .aboutCard').removeClass('back');
};

// 마이페이지 - 영수증등록도움말
jQuery(function(){
	$('.receiptHelpWrap').hover(function(){
		$('#receiptHelp').show();
	}, function(){
		$('#receiptHelp').hide();
	});
});

//제품상세 - BuyNow
jQuery(function(){

		//buy now hover toggle
		$('.mallOpen').bind('mouseenter', function(){		
//			if($('.mallList ul li').length > 1){ // 링크 하나 이상인 경우만 보임
				if($('#header .headerMenu .languageMenu').is(':visible')){
					$('.mallList').stop().slideDown('fast');
//				}
			}
		});
		$('.buynow').bind('mouseleave', function(){
//			if($('.mallList ul li').length > 1){ // 링크 하나 이상인 경우만 보임
				if($('#header .headerMenu .languageMenu').is(':visible')){
					$('.mallList').stop().slideUp('fast');
				}
//			}
		});
		//웹


		//buy now click toggle
		$('.mallOpen').bind('click', function(){
//			if($('.mallList ul li').length > 1){ // 링크 하나 이상인 경우만 보임				
				if(!$('#header .headerMenu .languageMenu').is(':visible')){
					$('.mallList').stop().slideToggle('fast');
				}
//			} else {
//				$('.mallList ul li a').eq(0).click();
//			}
		});

		// 모바일

		
		$(window).bind('scroll', function(){
			if(!$('#header .headerMenu .languageMenu').is(':visible')){ // 모바일체크
				if($(window).scrollTop()  > 800 && !$('#header .gnbSubWrap .gnbSubMenu').is(':visible')){
					$('.pdtReviewinfoWrap .pdtReviewinfo .inner .buynow').addClass('fixed');

					$('.buynow.fixed .btn_buynow a.m_btn').bind('click', function(){		
						$('.mallList').toggleClass('btC');
						//$('.buynow.fixed .btn_buynow a.m_btn').toggleClass('pdC');
						
					});

				}
				else{
					$('.pdtReviewinfoWrap .pdtReviewinfo .inner .buynow').removeClass('fixed');
				}
			}
		});

});

// 제품뷰 - 팝업
jQuery(function(){
	$('.see_ingredient a').bind('click', function(){
		$('body').css("overflow-y","hidden");
	});
	$('#ingredientDetail .popClose a').bind('click', function(){
		$('body').css("overflow-y","inherit");
	});
});

// RGB/HEX 색상 헬퍼
var hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; 

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

/*dropdown 메뉴*/
$(function(){
	$(".dropMenu .cateTitle>a").click(function(){
		if ($('.dropMenu').hasClass('on')) {
			$('.dropMenu').removeClass('on');
		}else{
			$('.dropMenu').addClass('on');
		}
		
	});

	/*product 페이지 메뉴*/
	$('.prdDropMenu .dropMenuTitle a').click(function(){
		if ($(this).hasClass('on')) {
			$(this).parent().next('.subCateWrap').removeClass('on');
			$(this).removeClass('on');
		}else{
			$(this).parent().next('.subCateWrap').addClass('on');
			$(this).addClass('on');								
		}
	});
})

$(function(){
	//모바일 검색창 닫기
	$('.searchArea .searchClose').click(function(){
		$('#header .headerMenu .searchMenu a.btnSearchOpen').removeClass('open');
			$('#header .headerMenu .searchArea').hide();
	});
});