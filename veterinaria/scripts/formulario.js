
function get_data_form (evt) {
  // Indicar que no recarge página al enviar el formulario
  evt.preventDefault()
  let nombre = evt.target.nombre.value;
  let apellido = evt.target.apellido.value;
  let raza = evt.target.raza.value;
  let foto = evt.target.foto.value;
  console.table({ nombre })
  console.table({ apellido })
  console.table({ raza })
  console.table({ foto })
}