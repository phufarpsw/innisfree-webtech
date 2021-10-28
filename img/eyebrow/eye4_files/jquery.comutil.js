/**********************************************************************************
 *    Program ID   : jquery.comutil.js
 *    Description  : Utility Method정의
 **********************************************************************************
 * @작성일 : 2014/02/22		@작성자 : IBANK
 * @작업내역 : 초기작성
 **********************************************************************************/

(function($) {
	
//DOM객체를 조작하는 함수 선언 시
$.fn.test = function(obj) {
	alert('a');
};
	
$.extend({
	
	//폼 객체 관련 스크립트 정의
	comutil : {
		isMobile : function() {
			var filter = "win16|win32|win64|mac|macintel|linux i686";
			if( navigator.platform ){
				if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
					return true;
				}else{
					return false;
				}
			}
			return false;
		},
		//체크박스나 라디오버튼의 체크 여부 확인
		hasCheckedObject : function(obj) {
			return ($(obj).is(":checked"));
		},
		//체크 박스 전체 선택 및 해제
		checkAll : function(src, targetId) {			
			var checked = ($(src).is(":checked")) ? true : false;						
			$("input[id='"+targetId+"']").each(function() {				
				$(this).attr("checked", checked);
			});			
		},
		/************************************************************************
		*  Function Name : NewWindow() +
		*  Description   :
		*  Input Data    : String	mypage => page url
		*				   String	myname => popup browser 이름
		*				   int		w	   => popup 넓이
		*				   int		h	   => popup 높이
		*				   int		t	   => x좌표
		*				   int		l	   => y좌표
		*				   String	scroll => 스크롤 유무. (no / yes)
		*				   String	resize => Resize 가능 유무 (no / yes)
		*				   String   menu   => 메뉴 유무 (no / yes)
		*  Output Data   : Input Parameter로 Popup을 띄운다.
		*************************************************************************/
		win : null,
		newWindow : function(mypage,myname,w,h,t,l,scroll,resize,menu) {
			var wint, winl;
			//top 위치 설정
			if (!t || t == 0) {				
				wint = ($(window).height() - h) / 2;
			}
			else {
				wint = t;
			}
			
			if (!l || l == 0) {
				winl = ($(window).width() - w) / 2;
			}
			else {
				winl = l;
			}
			
			var settings  ='height='+h+',';
			settings +='width='+w+',';
		    settings +='top='+wint+',';
		    settings +='left='+winl+',';
		    settings +='scrollbars='+scroll+',';
		    settings +='resizable='+resize+',';
		      
		    if (menu != null) settings +='menubar='+menu+',';
		    
		    win = window.open(mypage,myname,settings);
		    if(win != null && parseInt(navigator.appVersion) >= 4) { 
		    	win.focus();
		    }
		},
		newWindow : function(mypage,myname,settings) {
			win = window.open(mypage,myname,settings);
			if(win != null && parseInt(navigator.appVersion) >= 4) { 
				win.focus();
			}
		},
		//대문자로 변환 후 호출 오브젝트에 값을 설정
		toUpperCase : function(input) {			
			//var value = $(input).val().toUpperCase();
			var value = $.stringutil.toUpperCase(input);
			$(input).val(value);
		},
		//영문만 입력
		onlyAlphabet : function(input) {
			var szBuff = "";
			var chBuff = '';
			var szTemp = "";
			var i = 0;
			
			szBuff = input.value;
			for(i=0; i<szBuff.length; i++) {
				chBuff = szBuff.charAt(i);
				if( (chBuff < "A" || chBuff > "Z") && (chBuff < "a" || chBuff > "z")) {
					for(var j=0; j<szBuff.length; j++) {
						chBuff = szBuff.charAt(j);
						if( (chBuff < "A" || chBuff > "Z") && (chBuff < "a" || chBuff > "z")) {
				  			continue;
						} else {
				  			szTemp = szTemp + chBuff;
						}
					}
					input.value = szTemp;
					return;
				}
			}
		},
		//숫자만 입력
		onlyNumber : function(input) {
			var inText = input.value;
			var ret;

			for (var i = 0; i < inText.length; i++) {
				ret = inText.charCodeAt(i);
				if (!((ret > 47) && (ret < 58))) {
					//alert("숫자만을 입력하세요");
					input.value = "";
					input.focus();
					return;
				}
			}
			/*var szBuff = "";
			var chBuff = '';
			var szTemp = "";
			var i = 0;

			szBuff = input.value;
			for(i=0; i<szBuff.length; i++) {
				chBuff = szBuff.charAt(i);
				if( (chBuff < '0' || chBuff > '9') ) {
					for(var j=0; j<szBuff.length; j++) {
						chBuff = szBuff.charAt(j);
						if( (chBuff < '0' || chBuff > '9') ) {
							continue;
						} else {
							szTemp = szTemp + chBuff;
						}
					}
					input.value = szTemp;

					return;
				}
			}*/
		},
		//바이트 길이 체크
		/*checklen : function(obj,maxlength) {
			var msgtext;
			msgtext = obj.value;
			var i=0;
			var l=0;
			var temp;
			var lastl;

			//길이를 구한다.
			while(i < msgtext.length)
			{
				temp = msgtext.charAt(i);
				if (escape(temp).length > 4){
					l+=3;
				}
				else if (temp!='\r'){
					l++;
				}
				// OverFlow
				if(l>maxlength) {
					//alert("허용 길이 이상의 글을 쓰셨습니다.\n한글 "+ parseInt(maxlength/3) +"자, 영문"+ maxlength +"자까지만 쓰실 수 있습니다.");
					temp = obj.value.substr(0,i);
					obj.value = temp;
					l = lastl;
					return false;
				}
				lastl = l;
				i++;
			}
			return true;
		},*/
		checklen : function(obj, maxlength) {
			var s = "";			
			var k = 0;
			var value = $(obj).val();
			for(var i = 0; i < value.length; i++) {
				if(escape(value.charAt(i)).length > 4) {
					k += 3; 
				}
				else 
					k++;
				
				if (k <= maxlength) {
					s += escape(value.charAt(i));
				}
				else 
					$(obj).val(unescape(s));
			}
		},
		//바이트 길이 리턴
		getByteLength : function(obj) {
		    var byteLength = 0;
		    for (var inx = 0; inx < obj.value.length; inx++) {
		        var oneChar = escape(obj.value.charAt(inx));
		        if ( oneChar.length == 1 ) {
		            byteLength ++;
		        } else if (oneChar.indexOf("%u") != -1) {
		            byteLength += 3;
		        } else if (oneChar.indexOf("%") != -1) {
		            byteLength += oneChar.length/3;
		        }
		    }
		    return byteLength;
		},
		//숫자, 점만 가능
		onlyNumberDot : function(obj) {
			 if (obj.value == "") return;
			 var a = obj.value.split("");
			 var b = "";
			 for (var i in a) {
				 if (a[i].match(/\d/) || a[i].match(/[.]/))
					 b += a[i];
			 }
			 /*while (b.length > 1 && b.charAt(0) == "0")
				 b = b.substr(1, b.length);			 */
			 obj.value = b;
		},		
		//3자리마다 콤마처리
		getCommaValue : function(val) {
			var strVal = val + "";
			var strNumber = strVal.split('.');     //문자열 상태일때 소수점 추출     
			val = strNumber[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
			if (strNumber.length > 1) {
				if(strNumber[1].length == 1) strNumber[1] = strNumber[1] + "0";
				return val + "." + strNumber[1];
			} else {
				return val + ".00";
			}
		},
		//파운드 계산
		getPound : function(val) {
			val = (val * 2.2046 * 100 ) / 100.0 +"";
			val = val.substr(0, 4);
			return val;
		},
		setPound : function(val, id) {
			val = this.getPound(val);
			$("#" + id).html(val);
		},
		isFloat : function(obj) {
			var tmpVal = obj.value;
			tmpVal = tmpVal.substring(0, tmpVal.indexOf(".")+3);
			if(obj.value != "") {
				var reg = /^[-+]?\d+.?\d?\d?$/;
				var result = reg.test(obj.value);
				
				if(!result) {
					obj.value = tmpVal;
					return false;
				}
			}
		},
		GetCookie : function(name) {
			var arg = name + "=";
			var alen = arg.length;
			var clen = document.cookie.length;
			var i = 0;
			while (i < clen) {
				var j = i + alen;
				if (document.cookie.substring(i, j) == arg) return getCookieVal (j);
				i = document.cookie.indexOf(" ", i) + 1;
				if (i == 0) break;
			}
			return null;
		},
		SetCookie : function(name, value, expires) {
			var todayDate = new Date();
			todayDate.setDate( todayDate.getDate() + expires );
			document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
		}
	},
	//문자 관련 스크립트 정의
	stringutil : {		
		containsCharsOnly : function(input, chars) {
			for (var i = 0; i < $(input).val().length; i++) {
				if (chars.indexOf($(input).val().charAt(i)) == -1)
					return false;				
			}
			return true;
		},
		isNumber : function(input) {
			var chars = "0123456789";
		    return (this).containsCharsOnly(input, chars);
		},
		toUpperCase : function(input) {			
			return $(input).val().toUpperCase();
		},
		xReplace : function(input,e,k) {	//e : 찾으려는 문자, k : 바꾸려는 문자
			var tmp = String(input);
			return tmp.replace(new RegExp(e,"ig"), k);
		},
		xRemoveSChars : function(input) {	//특수문자 전체제거 후 공백처리
			var re = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
			return input.replace(re, " ");
		},
		//업로드파일명
		makeFileName : function(seq, fileNm, append) {	
			if(seq != '' && seq != null && seq != undefined 
					&& fileNm!= '' && fileNm != null && fileNm != undefined ) {
					var s = fileNm.split(".");
					var ext = s[s.length - 1];			
					return seq + append + "." + ext.toLowerCase();
				} else {
					return "";
				}
		},
		//3자리 콤마 입력
		setComma : function(str) {
			var result = "";
		    var tail = "";
		    var sign = "";
		    
		    if(str == "") return result;

		    // 0이하 '-'정수인 경우를 위해.
		    if (str.substring(0, 1) == '-') {
		        sign = str.substring(0, 1);
		        str = str.substring(1);
		    }

		    var pts = str.lastIndexOf(".");

		    if(pts > 0) { // 부동소수점인 경우
		        tail = str.substring(pts);
		        str = str.substring(0, pts);
		    }

		    var len = str.length;
		    var quota = parseInt(len / 3); // 몫
		    var remainder = len % 3; // 나머지

		    var buffer = str.substr(0, remainder); // 첫번째 값

		    for(var i = 0; i < quota; i++) {
		        if(buffer != "")
		            buffer = buffer + ',';

		        buffer = buffer + str.substr(remainder + i * 3, 3);
		    }

		    if(pts > 0)
		        result = sign + buffer + tail; // 소수점이 있으면
		    else
		        result = sign + buffer;

		    return result; // 결과 값 출력
		}
	},
	
	//날짜 관련 스크립트 정의
	dateutil : {
		
	},
	
	//validation 룰 추가/삭제 스크립트 정의
	rules : {
		addRules : function(rulesObj) {	//룰추가
			for (var item in rulesObj){	
				$('#'+item).rules('add',rulesObj[item]); 	
			} 
		},
		removeRules : function(rulesObj) {//룰삭제 - 여러개
			for (var item in rulesObj){	
				$('#'+item).rules('remove'); 	
			} 
		},
		removeRule1 : function(item) {//룰삭제 - 한개
			$('#'+item).rules('remove'); 	
		}
	},
	
	poputil : {	
		width : 930,
		height : 680,
		id : "",
		url : "",
		setID : function(id) {
			this.id = id;
		},
		setUrl : function(url) {
			this.url = url;
		},
		getLoading : function() {
			var loading_html = "<TABLE width='100%' height='100%' align='center'>";
			loading_html = loading_html + "<TR><TD align='center'><img src ='/resources/images/common/ajax-loader.gif'></TD></TR></TABLE>";
			return loading_html;
		},
		search : function(param) {		
			var id = this.id;
			var url = this.url;
			//alert(id + " / " + url + " / " + param);
			$.ajax({
				type : "post",
				data : param,
				url : url,
				error : function(e) {
					alert('error : ' + e.description);
				},
				success : function(data) {	
					//alert(id);
					$("#" +id).html(data);
				}
			});
		},
		open : function(id, url, width, height, param) {
			
			//현재 id값 저장
			this.setID(id);
			this.setUrl(url);
			
			$("#" + id).dialog("close");
			$("#" + id).html(this.getLoading());			
			$("#" + id).dialog({
				autoOpen : open,
				width : width,
				height : height,
				open : function() {
					$.ajax({
						type : "post",
						data : param,
						url : url,
						error : function(e) {
							alert('error : ' + e.description);
						},
						success : function(data) {
							$("#" +id).html(data);
						}
					});
				}
			});
		},
		close : function() {
			$("#" + this.id).dialog("close");
		}
	}
});
	
})(jQuery);