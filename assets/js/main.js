function figuraOnePerimetro() {
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const C = parseFloat(document.getElementById('C').value);
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert("Por favor, ingrese números válidos en todos los campos.");
    } else {
        const sum = A + B + C;
        const res = document.getElementById("PerimetroT");
        res.textContent = sum;
    }
}
figuraOnePerimetro()

function figuraOneArea(){
    const B = parseFloat(document.getElementById('B').value);
    const H = parseFloat(document.getElementById("H").value);
    const Mul = B * H;
    const result = Mul / 2
    const res = document.getElementById("AreaT")
    res.textContent = result
}
figuraOneArea()



function figuraTwoPerimetro(){
    const A = parseFloat(document.getElementById("ReactanguloA").value);
    const B = parseFloat(document.getElementById("ReactanguloB").value);
    const res = 2*(A + B)
    const result = document.getElementById("PerimetroR")
    result.textContent = res
}
figuraTwoPerimetro()

function figuraTwoArea(){
    const A = parseFloat(document.getElementById("ReactanguloA").value);
    const B = parseFloat(document.getElementById("ReactanguloB").value);
    const res = A * B;
    const result = document.getElementById("AreaR")
    result.textContent = res
}
figuraTwoArea()

function figuraThreePerimetro(){
    const A = parseFloat(document.getElementById("CuadradoA").value)
    const res = 4 * A;
    const result = document.getElementById("PerimetroC")
    result.textContent = res
}
figuraThreePerimetro()

function figuraThreeArea () {
    const A = parseFloat(document.getElementById("CuadradoA").value)
    const res = A * A;
    const result = document.getElementById("AreaC")
    result.textContent = res
}
figuraThreeArea()

function figuraFourPerimetro() {
    const R = parseFloat(document.getElementById("Radio").value)
    const res = 2 * Math.PI * R;
    const result = document.getElementById("PerimetroCirculo")
     result.textContent = res.toFixed(2)
}
figuraFourPerimetro()

function figuraFourArea() {
    const R = parseFloat(document.getElementById("Radio").value)
    const res =  Math.PI * R * R;
    const result = document.getElementById("AreaCirculo")
     result.textContent = res.toFixed(2)
}
figuraFourArea()