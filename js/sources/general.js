(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
// out: styles.css, sourcemap: true, compress: true

$(document).ready(function() {
    $('.scroll-bottom').click(function() {
        $("html, body").animate({ scrollTop: $(document).height()/3 }, "slow");
        return false;
    });
    $('.modal-birthday').modal();
});