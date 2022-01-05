//capturamos los datos
const formulario = document.getElementById("formulario")

const listar = document.getElementById("listar")

let datos = [];

//declaramos las variables y tomamos el valor de los datos (al darle submit)

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("nameuser").value

    let correo = document.getElementById("emailuser").value

    let telefono = document.getElementById("phonenumber").value

    let edad = document.getElementById("edad").value

    console.log(nombre, correo, telefono, edad)

    agregarUsuario(nombre, correo, telefono, edad)

    guardarDatos();
})


const agregarUsuario = (nombre, correo, telefono, edad) => {
    let registro = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        edad: edad
    }
    datos.push(registro)
    console.log(datos)
}

//almacenamos y enviamos los datos al localstorage 
const guardarDatos = () => {
    localStorage.setItem('usuario', JSON.stringify(datos))
    listarDatos();
}

// //convertimos de nuevo los datos para nosotros usarlos 
const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const { nombre, correo, telefono, edad } = element
        listar.innerHTML += ` <div class="card" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">usuario: ${nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">correo: ${correo}</h6>
          <h6 class="card-subtitle mb-2 text-muted">telefono: ${telefono}</h6>
          <h6 class="card-subtitle mb-2 text-muted">edad: ${edad} años</h6>
        </div>
      </div>
         `
    })
}

// ctr k c
// ctr k u

