// function openDesignType(designType) {
//     var i;
//     var x = document.getElementsByClassName("design-type");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     document.getElementById(designType).style.display = "block";
//   }


  function openDesignType(evt, designType) {
    var i, x, tablinks;
    x = document.getElementsByClassName("design-type");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(designType).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }