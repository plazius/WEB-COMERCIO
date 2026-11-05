$(document).ready(function () {
  //MODO OSCURO
  $("#boton-modo").click(function () {
    $("html").toggleClass("dark");

    if ($("html").hasClass("dark")) {
      $(this).text("Claro");
    } else {
      $(this).text("Oscuro");
    }
  });
//APARECE MENU HAMBURGUESA
  $("#boton-menu").click(function () {
    $("#menu-movil").toggleClass("hidden flex");
  });

  $("#menu-movil a").click(function () {
    $("#menu-movil").addClass("hidden").removeClass("flex");
  });

  AOS.init();

});


