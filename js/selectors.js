$(document).ready(
  function() {
    paragraphSelector()
  });

    function paragraphSelector(){
    return $('p');
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