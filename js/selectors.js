$(document).ready(
  function() {
    paragraphSelector()
  });

    function paragraphSelector(){
    return $('p');
    }

    function lastImageSelector(){
    return $('img:last');
    }

    function ninjaBabySelector(){
    return $('#baby-ninja');
    }

    function divSelector(){
    return $('.pics');
    }

    function firstLineItem(){
    return $('ul pic-list:first-child');
    }