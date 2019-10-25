jQuery(document).ready(function () {
    var k = 0;
    var l = 0;
    jQuery(".magnify").mousemove(function (e) {
        if (!k && !l) {
            var a = new Image();
            a.src = jQuery(".small").attr("src");
            k = a.width;
            l = a.height
        } else {
            var b = jQuery(this).offset();
            var c = e.pageX - b.left;
            var d = e.pageY - b.top;
            if (c < jQuery(this).width() && d < jQuery(this).height() && c > 0 && d > 0) {
                jQuery(".large").fadeIn(100)
            } else {
                jQuery(".large").fadeOut(100)
            }
            if (jQuery(".large").is(":visible")) {
                var f = Math.round(c / jQuery(".small").width() * k - jQuery(".large").width() / 2) * -1;
                var g = Math.round(d / jQuery(".small").height() * l - jQuery(".large").height() / 2) * -1;
                var h = f + "px " + g + "px";
                var i = c - jQuery(".large").width() / 2;
                var j = d - jQuery(".large").height() / 2;
                jQuery(".large").css({left: i, top: j, backgroundPosition: h})
            }
        }
    })
});