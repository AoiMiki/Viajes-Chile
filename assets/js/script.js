//Smooth Scroll
$(document).ready(function(){
    $("a").click(function(){
        var gato =this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            2500
        )
    })
})

//Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Levantar un alert al hacer click en el botón
$("#enviar").click(function(){
    alert("El mensaje fue enviado correctamente...");
});