$("#resultModal").on('shown.bs.modal', function(){
	var current = document.getElementById('currentSlider').noUiSlider;
	var cutBack = document.getElementById('CutBack').noUiSlider;

	var CO2Out = ((((Number(current.get())*52)*3.5)*0.0283495)*35.75).toFixed(2);
	var CO2Cut = ((((Number(cutBack.get())*52)*3.5)*0.0283495)*35.75).toFixed(2)

	document.getElementById('currentOutput').innerHTML = CO2Out.toString() + ' KG Per Year';
	document.getElementById('currentEquivalence').innerHTML = "That's the same as driving about " + Number((CO2Out / 0.347).toFixed(0)).toLocaleString('en') + " miles.";
	document.getElementById('outputCut').innerHTML = CO2Cut.toString() + ' KG Per Year';
	document.getElementById('newOutput').innerHTML = (CO2Out - CO2Cut).toFixed(2).toString() + ' KG Per Year';
	document.getElementById('equivalence').innerHTML = "That's the same as driving about " + Number((CO2Cut / 0.347).toFixed(0)).toLocaleString('en') + " miles fewer."

});
