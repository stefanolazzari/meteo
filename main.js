const lat = 41.9028;
const lon = 12.4964;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//prendi i dati dall'url fornito e stampa l'oggetto
fetch(url).then(function(response) {
    if (!response.ok) {
      throw new Error("Errore nella risposta HTTP: " + response.status);
    }
    return response.json();
  }).then(function(data) {
    console.log("Dati ricevuti dal server:");
    console.log(data);
  })
