/* global Module */

/* Magic Mirror
 * Module: MMM-GoogleMapsTraffic
 *
 * By Victor Mora
 * added the zoom function by Paultie
 * MIT Licensed.
 */

Module.register("MMM-GoogleMapsTraffic", {

	getDom: function() {
        var lat = this.config.lat;
        var lng = this.config.lng;
	var zoom = this.config.zoom;	//added zoom function

		var wrapper = document.createElement("div");
        wrapper.setAttribute("id", "map");

        wrapper.style.height = this.config.height;
        wrapper.style.width = this.config.width;

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.config.key;
        document.body.appendChild(script);

        script.onload = function () {
            var map = new google.maps.Map(document.getElementById("map"), {
            	zoom: zoom, //added zoom function
            	center: {
            		lat: lat,
            		lng: lng
            	}
            });

            var trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        };

		return wrapper;
	}

});
