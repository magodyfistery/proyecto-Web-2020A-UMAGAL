'use strict'

//Verifica que la página esté cargada
$(document).ready(function(){
  var li_logged_in = $(".li_logged_in");
  var li_not_logged_in = $(".li_not_logged_in");

  $('#buttonLogOut').click(function(){
    localStorage.removeItem("user_data");
    localStorage.setItem("is_logged_in", "false");
    location.reload()
  })

  if(typeof(Storage) != 'undefined'){

    var is_logged_in = localStorage.getItem("is_logged_in");
    console.log(is_logged_in)
    if(is_logged_in != undefined){
      if(is_logged_in == "true"){

        li_logged_in.each(function( index ) {
          $(this).show()
        });

        li_not_logged_in.each(function( index ) {
          $(this).hide()
        });

        var user_data = localStorage.getItem("user_data");
        if(user_data != undefined){
          console.log(user_data);
        }else{
          alert("Los datos del usuario no existen");
        }

      }else{

        li_logged_in.each(function( index ) {
          $(this).hide()
        });

        li_not_logged_in.each(function( index ) {
          $(this).show()
        });

      }
    }else{

      li_logged_in.each(function( index ) {
        $(this).hide()
      });

      li_not_logged_in.each(function( index ) {
        $(this).show()
      });

    }

  }else{
    alert("El navegador no soporta localStorage");
  }


})
