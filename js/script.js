$(function() {
    $(document).mousemove(function(event) {
        var width = event.pageX / document.body.clientWidth;
        var hue = (125 + width*120);

        document.body.style.backgroundColor = "hsl(" + hue.toString() + ",93%,74%)";
    });
});

