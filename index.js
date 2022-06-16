
$( document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
        
    });

    function open() {
    document.getElementById("videoIframe").src += "&autoplay=1";
        envelope.addClass("open")
           .removeClass("close");

    }
    function close() {

        envelope.addClass("close")
           .removeClass("open");
           var ysrc = document.getElementById("videoIframe").src;
                 var newsrc = ysrc.replace("&autoplay=1", "");
                 document.getElementById("videoIframe").src = newsrc;
    }
   
});