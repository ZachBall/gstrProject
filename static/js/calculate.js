$("#resultModal").on('shown.bs.modal', function(){
	var current = document.getElementById('currentSlider').noUiSlider;
	var cutBack = document.getElementById('CutBack').noUiSlider;

	var CO2Out = ((((Number(current.get())*52)*3.5)*0.0283495)*35.75);
	var CO2Cut = ((((Number(cutBack.get())*52)*3.5)*0.0283495)*35.75);

	document.getElementById('currentOutput').innerHTML = CO2Out.toLocaleString('en', {maximumFractionDigits:0}) + ' KG Per Year';
	document.getElementById('currentEquivalence').innerHTML = "That's the same as driving about " + Number((CO2Out / 0.347).toFixed(0)).toLocaleString('en') + " miles.";
	document.getElementById('outputCut').innerHTML = CO2Cut.toLocaleString('en', {maximumFractionDigits:0}) + ' KG Per Year';
	document.getElementById('newOutput').innerHTML = (CO2Out - CO2Cut).toLocaleString('en', {maximumFractionDigits:0}) + ' KG Per Year';
	document.getElementById('equivalence').innerHTML = "That's the same as driving about " + Number((CO2Cut / 0.347)).toLocaleString('en', {maximumFractionDigits:0}) + " miles fewer."

});
