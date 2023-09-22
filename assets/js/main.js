const array = [];
const array1 = [];
const array2 = [];
const arrayPersonas = [];
const Personas = {
    Nombre: "",
    Apellidos: "",
    Cedula: "",
    Email: "",
    CiudadDeRecidencia: "",
    CiudadDeOrigen: "",
    Canciones: [
      Cancion1 = {
        nombre: "",
        Artista: ""
      },
      Cancion2 = {
        nombre: "",
        Artista: ""
      },
       Cancion3 = {
        nombre: "",
        Artista: ""
      }
    ]
};

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

//ejercicio 2

function Edades(){
const edades = parseFloat(document.getElementById('Ages').value);
if (edades >= 1 && edades <= 120) {
    if (array.length < 10) {
        array.push(edades);
    } else {
        alert("Las 10 edades ya están ingresadas");
    }
} else {
    alert("Por favor, ingrese una edad válida entre 1 y 120.");
}


let sumaEdades = 0;
const menores = [];
const mayores = []; 
const Abuelos = [];
const edadMinima = Math.min(...array)
const edadMax = Math.max(...array)
for(let i = 0; i < array.length; i++){
const ar = array[i]
        sumaEdades += ar
if(ar < 18){
    menores.push(ar)
}else if(ar >= 18){
    mayores.push(ar)
    }
    if(ar >= 60){
    Abuelos.push(ar)
    }
}




document.getElementById("formTwo").reset()
const cantidad = array.length;
const promedio = sumaEdades / cantidad
const menoresDeEdad = document.getElementById("menores")
menoresDeEdad.textContent = menores.length
const mayoresDeEdad = document.getElementById("mayores")
mayoresDeEdad.textContent = mayores.length
const abuelos = document.getElementById('adultos')
    abuelos.textContent = Abuelos.length
const edadMin = document.getElementById('min')
    edadMin.textContent = edadMinima
const edadmax = document.getElementById('max')
    edadmax.textContent = edadMax
const edadPromedio = document.getElementById('promedio')
    edadPromedio.textContent = promedio.toFixed(2)
}
Edades()


//Ejercicio 3
function vector() {
  const inputArr1 = parseFloat(document.getElementById("Arr1").value);
  if (array1.length < 5) {
    array1.push(inputArr1);
  } else if (array1.length >= 5 && array2.length < 5) {
    array2.push(inputArr1);
  } else if (array1.length >= 5 && array2.length >= 5) {
    alert("Ambos vectores han sido llenados");
  }
  document.getElementById("EjercicioThree_foor").reset()

vectorFinal()
}
function vectorFinal(){
    if(array1.length >= 5 && array2.length >= 5){
            const res = document.getElementById("result")
    let ar = array1.concat(array2);
    ar.sort((a, b) => a - b);
    res.textContent = ar
    }

}

//Ejercicio 4


function Emisora(){
    const nombre = document.getElementById("nombre").value
    Personas.Nombre = nombre
    const apellidos = document.getElementById("apellidos").value
    Personas.Apellidos = apellidos
    const cedula = document.getElementById("cedula").value;
    Personas.Cedula = cedula;
    const email = document.getElementById("email").value;
    Personas.Email = email;
    const ciudadRecidencia = document.getElementById("ciudadRecidencia").value;
    Personas.CiudadDeRecidencia = ciudadRecidencia;
    const ciudadOrigen = document.getElementById("ciudadOrigen").value;
    Personas.CiudadDeOrigen = ciudadOrigen;
    const cancionOne = document.getElementById("cancionOne").value;
    Personas.Canciones[0].nombre = cancionOne;
    const artistaOne = document.getElementById("artistaOne").value;
    Personas.Canciones[0].Artista = artistaOne
    const cancionTwo = document.getElementById("cancionTwo").value;
    Personas.Canciones[1].nombre = cancionTwo
    const artistaTwo = document.getElementById("artistaTwo").value;
    Personas.Canciones[1].Artista = artistaTwo
    const cancionThree = document.getElementById("cancionThree").value;
    Personas.Canciones[2].nombre = cancionThree
    const artistaThree = document.getElementById("artistaThree").value;
    Personas.Canciones[2].Artista = artistaThree

    arrayPersonas.push(Personas)
    const formulario = document.getElementById("forme");
    formulario.reset();
  
    const Carta = document.getElementById("person")
    Carta.innerHTML += ""

  
  
      const row = `
       <div class="carta">
          <h1> <span>Nombre:</span> ${arrayPersonas[0].Nombre}</h1>
          <h2> <span>Apellidos:</span> ${arrayPersonas[0].Apellidos}</h2>
          <h2> <span>No.CC: </span>${arrayPersonas[0].Cedula}</h2>
          <h2> <span>Correo:</span> ${arrayPersonas[0].Email}</h2>
          <h2> <span>Ciudad de residencia:</span> ${arrayPersonas[0].CiudadDeRecidencia}</h2>
          <h2> <span>Ciudad de origen:</span> ${arrayPersonas[0].CiudadDeOrigen}</h2>
          <h2> <span>Primera cancion:</span> ${arrayPersonas[0].Canciones[0].nombre}</h2>
          <h2> <span>Artista</span>: ${arrayPersonas[0].Canciones[0].Artista}</h2>
          <h2> <span>Segunda Cancion:</span> ${arrayPersonas[0].Canciones[1].nombre}</h2>
          <h2> <span>Artista</span>: ${arrayPersonas[0].Canciones[1].Artista}</h2>
          <h2> <span>Tercra cancion</span> ${arrayPersonas[0].Canciones[2].nombre}</h2>
          <h2> <span>Artista</span>: ${arrayPersonas[0].Canciones[2].Artista}</h2>
       </div>
       `;
  
      Carta.innerHTML += row;
}
Emisora()

function Menu(){
    const formulario = document.getElementById("forme");
    formulario.classList.remove("oculto")
}
Menu();
function clos(){
  const formulario = document.getElementById("forme");
  formulario.classList.add("oculto")
}
clos()
function oyente(){
  const formulario = document.getElementById("perso");
  formulario.classList.remove("oculto")
}
function oyenteclose(){
  const formulario = document.getElementById("perso");
  formulario.classList.add("oculto")
}