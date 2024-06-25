document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-media').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let num3 = parseFloat(document.getElementById('num3').value);

        let media = (num1 + num2 + num3) / 3;
        document.getElementById('media-valor').textContent = media.toFixed(2);
    });
});
