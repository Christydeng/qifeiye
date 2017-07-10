$(function() {
	$(".title_img_box img").hover(function() {
		$(".title_img_box .view_box").eq($(this).index()).show();
	}, function() {
		$(".title_img_box .view_box").eq($(this).index()).hide();
	})
})