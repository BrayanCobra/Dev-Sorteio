function generatenumber() {
    const min = Math.ceil(document.querySelector(".inputmin").value)
    const max = Math.floor(document.querySelector(".inputmax").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultarea = document.querySelector(".resultarea")
    const resultareaJS = document.querySelector(".resultadoJS")

    let contador = 0;
    let intervalo = setInterval(() => {
        resultarea.textContent = Math.floor(Math.random() * 100) + 1;
        contador++;
        if (contador > 20) {
            clearInterval(intervalo);
            resultarea.textContent = result
        }
    }, 100);

    resultareaJS.textContent = "RESULTADO"
    resultarea.textContent = "Sorteando..."
    resultarea.style.fontSize = "24px"

    setTimeout(() => {
        resultarea.textContent = result;
        resultarea.style.color = "#ffffff"
    }, 2000);
}