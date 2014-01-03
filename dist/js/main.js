$(document).ready(function() {
  var header = $(".js--site-header");
  var customColor = header.data("color-scheme");

  if (customColor) {
    function hexToRgba(hex,opacity){
      hex = hex.replace('#','');
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);

      result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
      return result;
    }

    var siteIcon = $(".js--site-header--icon");
    var navButtons = $(".js--site-header--button");

    siteIcon.css('color', customColor);
    navButtons.css({'background-color': hexToRgba(customColor, 15), 'color': '#3B413F'});
    navButtons.hover(function(){
      $(this).css('background-color', hexToRgba(customColor, 28));
    },
    function(){
      $(this).css('background-color', hexToRgba(customColor, 15));
    })
  }
});