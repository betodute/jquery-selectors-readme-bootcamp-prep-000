$(document).ready(
  function() {

    function paragraphSelector(){
    var pselect = $('p');
    return pselect;
    }

    function lastImageSelector(){
    $('img:last');
    }

    function ninjaBabySelector(){
    $('#baby-ninja');
    }

    function divSelector(){
    $('.pics');
    }

    function firstLineItem(){
    $('ul pic-list:first-child');
    }
});