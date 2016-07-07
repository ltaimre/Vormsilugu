
 
 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.0038222, lng: 23.1821927},
          zoom: 12
        });
		//laeb kaardi
		map.data.loadGeoJson('Vormsi1.json');  
		//lisab markerile klikkamise
		map.data.addListener('click', function(event) {
		//loob infoakna
		var infowindow = new google.maps.InfoWindow();
		var name = event.feature.getProperty("name");
		var IMG = event.feature.getProperty("images");
		console.log(name);
		var content = "<img src= ' " +IMG + " ' height='100' >";
		console.log(content);
		var htmlcontent="<div id=infow>Olen infowindow ja jagan infot"  + name + "kohta </p>";
		//$("#cont").load("infowindow.html" );
		infowindow.setContent(htmlcontent); 
		infowindow.setPosition(event.feature.getGeometry().get());
		infowindow.open(map);
	 } );
	  
	 
	 
	 }
	 

	
	  
	 
	
	  
	
