$(function() {
	$("#doc").hover(function() {
		$("#doc-slide").show();
	}, function() {
		$("#doc-slide").hide();
	})
})
$(function() {
	$("#about").hover(function() {
		$("#about-slide").show();
	}, function() {
		$("#about-slide").hide();
	})
})

$(function() {
	$("#doc-slide").hover(function() {
		$("#doc-slide").show();
	}, function() {
		$("#doc-slide").hide();
	})
})
$(function() {
	$("#about-slide").hover(function() {
		$("#about-slide").show();
	}, function() {
		$("#about-slide").hide();
	})
})

$(function() {
	$(".header_nav>.header_left>ul>li>a").click(function() {
		$(this).addClass("active");
	})
})

$(function() {
	$(".header_nav>.header_right>ul>li>a").click(function() {
		$(this).addClass("active");
	})
})



/*
 * //	做一个响应式网站,让世界更好的了解您	做一个响应式网站,让世界更好的了解您
	var i = 0;
	setTimeout(function () {
		setInterval(function () {
//			var texts = ["做","一","个","响","应","式","网","站"];		
			var texts = "做一个响应式网站";
			if(i<texts.length) {
				$(".coverSpan2").before(texts[i++]);			
			}
		},250)},800);
	
	var j = 0;	
	setTimeout(function () {
		setInterval(function () {
		var texts = ["<br/>","让","世","界","更","好","的","了","解","您"];
		if(j<texts.length) {
			$(".coverSpan2").before(texts[j++]);
		}
	},250)},4800);

 */