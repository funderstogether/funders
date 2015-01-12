$(document).ready(function(){
	//Width and height
	var w = 500;
	var h = 300;
	//Define map projection
	var projection = d3.geo.albersUsa()
					.translate([w/2, h/2])
					.scale([500]);
	//Define path generator
	var path = d3.geo.path()
			.projection(projection);
	//Create SVG element
	var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);
	//Load in GeoJSON data
	d3.json("/files/us-states.json", function(json) {
		//Bind data and create one path per GeoJSON feature
		svg.selectAll("path")
			.data(json.features)
			.enter()
			.append("path")
			.attr("d", path);	
	});
});