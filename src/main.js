
const origen = document.querySelector('.getOrigen');
const destino = document.querySelector('.getDestino');
const fechaO = document.querySelector('#dateO');
const fechaD = document.querySelector('#dateD');
const itinerario = document.getElementById('informacionViaje');
const fechaOrigen = document.getElementById('fechaOrigen')
const fechaDestino = document.getElementById('fechaDestino')


origen.addEventListener('change', actualizarItinerario);
destino.addEventListener('change', actualizarItinerario);
fechaO.addEventListener('change', actualizarItinerario);
fechaD.addEventListener('change', actualizarItinerario);


function actualizarItinerario() {
  
  const origenSeleccionado = origen.options[origen.selectedIndex].value;
  const destinoSeleccionado = destino.options[destino.selectedIndex].value;
  
  

    let tieneEscala = false;
  if (origenSeleccionado === "Chicago" && destinoSeleccionado === "Venecia") {
    tieneEscala = true;
  } else if (origenSeleccionado === "Boston" && destinoSeleccionado === "Paris") {
    tieneEscala = true;
  }

 
  fechaOrigen.innerHTML = `
    <h5>${fechaO.value}</h5>
    <h4>${origenSeleccionado}</h4>
   
  `;

  fechaDestino.innerHTML = `
  <h5>${fechaD.value}</h5>
  <h4>${destinoSeleccionado}</h4>
 
`;

 itinerario.innerHTML =`
 <p>${tieneEscala ? '¡Ojo! Tu vuelo tiene una escala' : 'Tu vuelo no tiene una escala'}</p>`
}
