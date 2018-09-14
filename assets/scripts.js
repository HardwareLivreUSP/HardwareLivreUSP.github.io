/******************************************************************************
 *                             Hardware Livre USP                             *
 *                                                                            *
 *                             Raphael R. Gusmão                              *
 ******************************************************************************/

/******************************************************************************
 * Modal                                                                *
 ******************************************************************************/
$(function() {
  $('.img-container figure').on('click', function() {
    $('#modal img').attr('src', $(this).find('img').attr('src'));
    $('#modal').modal('show');
  });
});

/******************************************************************************
 * Google Analytics                                                           *
 ******************************************************************************/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-82131828-1', 'auto');ga('send', 'pageview');
