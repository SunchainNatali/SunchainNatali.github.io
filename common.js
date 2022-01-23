<script type="text/jаvascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/jаvascript" src="slideto-1.0.js"></script>
<script language="jаvascript">
$(document).ready(function() {
    $('#sliderBox').slideTo({
        transition:300,
        top:'center',
        left:'center',
        inside:window
    });
    $('#background').height($(document).height());
    jQuery(window).resize(function() {
        $('#sliderBox').stop().slideTo({
            transition:300,
            top:'center',
            left:'center',
            inside:window
        });
    });
  var closeWelcomeBox;
    $(window).scroll(function(){ 
        if(!closeWelcomeBox){
            $('#sliderBox').stop().slideTo({
                transition:300,
                top:'center',
                left:'center',
                inside:window
            });
        }
    });
    
    $("#closeWelcomeBox").click(function(){
        $('#sliderBox').stop().slideTo({ 
            transition:500,
            top:-400
            });
            $('#background').fadeOut(500);
        closeWelcomeBox = true;
    });
});
</script>
