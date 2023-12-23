// Esto es para el scroll animado de la web :)

// ¡¡NO TOCAR PORQUE NO SE COMO FUNCIONA XD!!
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });


  // Redireciona el ID de una pagina Otra

  document.addEventListener("DOMContentLoaded", function() {
    // Verificar si hay un fragmento en la URL
    if (window.location.hash) {
      // Extraer el fragmento (sin el símbolo #)
      var fragmento = window.location.hash.substring(1);
      
      // Intentar encontrar el elemento con el ID correspondiente
      var elementoDestino = document.getElementById(fragmento);
      
      // Si se encuentra el elemento, desplazarse a él
      if (elementoDestino) {
        elementoDestino.scrollIntoView();
      }
    }
  });