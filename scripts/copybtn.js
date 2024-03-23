function copyCode(button) {
    var codeElement = button.previousElementSibling;
    var tempInput = document.createElement("input");
    tempInput.value = codeElement.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    button.innerText = "¡Copiado!";
    setTimeout(function() {
        button.innerText = "Copiar";
    }, 5000);
}