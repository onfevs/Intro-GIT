const url_api = "http://localhost:8080/mascotas"

const update_flag ={
  update: false,
  id:null
}

function get_data_form (evt) {
  // Indicar que no recarge página al enviar el formulario
  evt.preventDefault()
  const form = evt.target
  const mascota = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    raza: form.raza.value,
    foto: form.foto.value,
    observacion: form.observacion.value
  }
  clear(form)
  if(update_flag.update){
    mascota.id=update_flag.id
  }else{
    create(mascota)
  }
}

//Limpiar formulario 

function clear(form) {
  form.nombre.value = ''
  form.apellido.value = ''
  form.raza.value = ''
  form.foto.value = ''
  form.observacion.value = ''
}

async function create(mascota) {
// Enviar peticion
  const resp = await fetch(url_api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mascota)
  })
  const text = await resp.text()
  alert(text)
}

function get_params_url(){
  const params = window.location.search
  if(params){
    const url = new URLSearchParams(params)
    const mascota = JSON.parse(url.get("mascota"))
    set_value_form(mascota)
    document.getElementById("btn-registrar").innerText = "Actualizar"
  }else{

  }

}

function set_value_form(mascota){
  document.getElementById("nombre").setAttribute("value", mascota.nombre)
  document.getElementById("apellido").setAttribute("value", mascota.apellido)
  document.getElementById("raza").setAttribute("value", mascota.raza)
  document.getElementById("foto").setAttribute("value", mascota.foto)
  // document.getElementById("observacion").setAttribute("value", mascota.observacion)
  document.getElementById("observacion").innerText = mascota.observacion
}

get_params_url()