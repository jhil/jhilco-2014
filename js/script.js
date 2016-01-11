$(function() {

    $(document).mousemove(function(event) {

        var width = ( event.pageX / document.body.clientWidth ) * 360;
        var hue = (180 + width);
        var imageno = 10 * ((18 + Math.floor(width/10)) % 36);

        document.body.style.backgroundColor = "hsl(" + hue.toString() + ",85%,70%)"; // change background color based on mouse position

        document.getElementById('favicon-image').href = 'img/favicon/favicon-' + imageno.toString() + '.png'; // change favicon to match color of background

    });

    $(window).bind("beforeunload", function() {

        document.getElementById('favicon-image').href = 'img/favicon/favicon-0.png'; // change favicon to red upon window close

    });

});