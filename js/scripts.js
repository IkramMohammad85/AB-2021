$(document).ready(function() {
	
	$('.scroll-top-wrapper').click(function(){ pageScroll('top'); });
	$('.scroll-down-indicator').click(function(){ pageScroll('bottom'); });
		/*For Tooltip*/
	 $('[data-toggle="tooltip"]').tooltip()
	 /*For popup*/
	 $('[data-toggle="popover"]').popover({html:true})
	 
	 $('.carousel').carousel({
        interval: 12000
    })
	
	/*For Cycle*/
		$('.cycle').each(function(i, obj) {
			selector=$(this).children('div.cycle_controller');
			$(this).children('ul').cycle({pager:selector,timeout: 50000});
		});
		
	/* For Tab*/	
	  $("ul#myTabDrop1-contents  li").click(function(){
		document.getElementById("regiona-name").innerHTML=$(this).text();
	  });
	/*for right side home  contact button slide*/
 $(".slide-toggle").click(function(){
            $(".contactBox").animate({
                width: "toggle"
            });
        });
	/*For Navigation Active Status*/	
	$("div#sidebarnav ul.collapsible li a[href$='/<?php print $site->query_string;?>']").parent().addClass("active");
	
	$('div#sidebarnav ul ul li,div#sidebarnav ul.news li,div#sidebarnav ul.collapsible li').has('ul').children('ul').css('display','none');
	$('div#sidebarnav ul li.level3.active,div#sidebarnav ul.news li.current-cat').parents('ul').css('display','block');
	$('div#sidebarnav ul.collapsible li.active').parent('ul').css('display','block');
	$('div#sidebarnav ul.collapsible li.active').parents('ul').css('display','block');
	$('div#sidebarnav ul li').has('ul').children('a').append('<span class="sprit dropdown"></span>');
	
	$('div#sidebarnav ul ul li,div#sidebarnav ul.news li,div#sidebarnav ul:not(.with_landing) li').has('ul:not(.with_landing)').children('a').click(function (e){
		if($( "div#sidebarnav ul" ).hasClass( "with_landing" )===false){
			e.preventDefault();
			$(this).parent('li').toggleClass('current-cat-parent');
			$(this).parent('li').children('ul').slideToggle();
			$(this).children('span.dropdown').toggleClass('open');
		}
		
	});
	/*
	$('div#sidebarnav ul ul li,div#sidebarnav ul.news li,div#sidebarnav ul:not(.with_landing) li').has('ul:not(.with_landing)').children('a').click(function (e){
		e.preventDefault();
		$(this).parent('li').toggleClass('current-cat-parent');
		$(this).parent('li').children('ul').slideToggle();
		$(this).children('span.dropdown').toggleClass('open');
	});
	*/
	
	if(typeof getCookie('never_show_ksp_popup') == 'undefined')
		$('#ksp_promotion_popup').modal('show');
	
	$('button#never_show_ksp_popup').click(function(){
		 setCookie("never_show_ksp_popup", true, 365);
	});

	shareLink(document.URL,'email');
}); /* end of document load code*/

/* Homepage: popup boxes code below... */
$('input[type="radio"]').click(function(){
            if($(this).attr("value")=="yes"){
                $(".subscriber-content").hide();
                $(".yes").show();
            }
            if($(this).attr("value")=="no"){
                $(".subscriber-content").hide();
                $(".no").show();
            }
           
        });

/* Homepage: scroll arrow opacity effect */
$(window).scroll( function(){
  var topWindow = $(window).scrollTop();
  var topWindow = topWindow * 1.5;
  var windowHeight = $(window).height();
  var position = topWindow / windowHeight;
  position = 1 - position;
  $('.arrow-wrap').css('opacity', position);
  
	if ($(window).scrollTop() > 100) {
        $('.scroll-top-wrapper').addClass('show');
    } else {
        $('.scroll-top-wrapper').removeClass('show');
    }
});

/*Subpage left Sidebar*/

    $('#menu').click(function () {
        $(".side-bar-home").slideToggle("slide");
    });	
	$('#menu').click(function () {
        $(".side-bar-inner").slideToggle("slide");
    });	
	
	 $('#menu').click(function(){
        $("#leftBar-icon").toggleClass('open');
    });	
	
	$("#menu").on("click", function() {
  var el = $("#menu-text");
  el.text() == el.data("text-swap") 
    ? el.text(el.data("text-original")) 
    : el.text(el.data("text-swap"));
});

/*Stcik bar for on click open dropdwon*/
$(document).on('click', '.stickyBar .dropdown-menu', function(e) {
  e.stopPropagation()
})
/*Tell a friend iframe popup*/
 function iframeResize(obj) {
 setTimeout(function (){
  $('#'+obj).height( 
   $('#'+obj).contents().find("html").height() 
  );
 }, 300);    
  }
  
/*more option for search on book store page*/
$('#Moreoptions').click(function () {
if($('button i').hasClass('fa-angle-double-down'))
{
    $('#Moreoptions').html('Less Options <i class="fa fa-angle-double-up"></i>'); 
}
else
{      
    $('#Moreoptions').html('More Options <i class="fa fa-angle-double-down"></i>'); 
}
}); 
/* Helper Functions*/
function shareLink(url,media){
	
	//console.log(media);
	
	media_url='https://www.facebook.com/sharer/sharer.php?u=';
	if(media=='twitter')
		media_url='https://www.twitter.com/share?url=';
	else if(media=='linkedin')
		media_url='https://www.linkedin.com/shareArticle?url=';
	else if(media=='email')
		media_url='mailto:?';
	
	if(media=='twitter')
		window.open(media_url+encodeURIComponent(url)+"&text="+encodeURIComponent(document.title),"_blank");
	else if(media=='email'){
		url=media_url+'body=I&#39;d%20like%20to%20share%20an%20interesting%20article%20with%20you:%20'+encodeURIComponent(url)+"&subject="+encodeURIComponent(document.title);
		$('li#rhs_share_email').append('<a href="'+url+'"><i class="fa fa-envelope-o"></i></a>');
	} else
		window.open(media_url+encodeURIComponent(url),"_blank");
}
function pageScroll(pos) {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
	
	if(pos=='top')
		offsetTop = offset.top;
	else
		offsetTop = 500;
	
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

 function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

/*Mobile Device Detection, source: http://www.abeautifulsite.net/blog/2011/11/detecting-mobile-devices-with-javascript/*/
var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

if (isMobile.any()){ $('body').addClass('mobile');$('.side-bar-bg ul:not(.with_landing)>li').has( "ul" ).children('a').attr('href','#');} else { $('body').addClass('non_mobile');}
//if (isMobile.any()){ $('body').append('mobile');} else { $('body').append('non_mobile');}


//for spamspan
function spamSpan(){for(var a=getElementsByClass(spamSpanMainClass,document,"span"),b=0;b<a.length;b++){for(var c=getSpanValue(spamSpanUserClass,a[b]),d=getSpanValue(spamSpanDomainClass,a[b]),e=getSpanValue(spamSpanAnchorTextClass,a[b]),f=new Array,g=0;g<spamSpanParams.length;g++){var h=getSpanValue(spamSpanParams[g],a[b]);h&&f.push(spamSpanParams[g]+"="+encodeURIComponent(h))}var i=String.fromCharCode(64),j=cleanSpan(c)+i+cleanSpan(d),k=document.createTextNode(e?e:j),l=String.fromCharCode(109,97,105,108,116,111,58),m=l+j;m+=f.length?"?"+f.join("&"):"";var n=document.createElement("a");n.className=spamSpanMainClass,n.setAttribute("href",m),n.appendChild(k),a[b].parentNode.replaceChild(n,a[b])}}function getElementsByClass(a,b,c){var d=new Array;null==b&&(node=document),null==c&&(c="*");for(var e=b.getElementsByTagName(c),f=e.length,g=new RegExp("(^|s)"+a+"(s|$)"),h=0,i=0;h<f;h++)g.test(e[h].className)&&(d[i]=e[h],i++);return d}function getSpanValue(a,b){var c=getElementsByClass(a,b,"span");return!!c[0]&&c[0].firstChild.nodeValue}function cleanSpan(a){return a=a.replace(/[\[\(\{]?[dD][oO0][tT][\}\)\]]?/g,"."),a=a.replace(/\s+/g,"")}function addEvent(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c](window.event)},a.attachEvent("on"+b,a[b+c]))}var spamSpanMainClass="spamspan",spamSpanUserClass="u",spamSpanDomainClass="d",spamSpanAnchorTextClass="t",spamSpanParams=new Array("subject","body");addEvent(window,"load",spamSpan);