function mostrarPopUp() {
    var popup = document.getElementById('popup');
    popup.classList.add('show');
    
    setTimeout(function() {
        popup.classList.remove('show');
    }, 3000); // Fecha o popup após 3 segundos
}


function agendarConsulta() {
    // Código para agendar a consulta

    // Resetar todos os checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    
}