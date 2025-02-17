/*  

Add an event listener that runs 

  when a user clicks on the map element. 

*/ 

map.on('click', (event) => { 

  // If the user clicked on one of your markers, get its information. 

  const features = map.queryRenderedFeatures(event.point, { 

    layers: ['Gaza_West-Bank_Populated-Cities'] // replace with your layer name 

  }); 

  if (!features.length) { 

    return; 

  } 

  const feature = features[0]; 

 

  /*  

    Create a popup, specify its options  

    and properties, and add it to the map. 

  */ 

const popup = new mapboxgl.Popup({ offset: [0, -15], className:"my-popup"}) 
.setLngLat(feature.geometry.coordinates) 
.setHTML(`<h3>${feature.properties.name}</h3><p>City Name in English: ${feature.properties.name_en}
<p> Type of Populated City: ${feature.properties.place}</p>`)
  .addTo(map); 

});


map.addControl(new mapboxgl.NavigationControl(), "top-left"); 

map.addControl( new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true, showUserHeading: true }), "top-left" ); 

map.addControl( new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true, showUserHeading: true }), "top-right" ); 

map.on("mousemove", (event) => { const dzone = map.queryRenderedFeatures(event.point, { layers: ["Gaza_West-Bank_Populated-Cities"] }); document.getElementById("pd").innerHTML = dzone.length ? `<h3>${dzone[0].properties.name_en}</h3><p>Rank: <strong>${dzone[0].properties.place}</strong> %</p>` : `<p>Hover over a data point!</p>`; });