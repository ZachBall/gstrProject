$("#resultModal").on('shown.bs.modal', function(){
	var current = document.getElementById('currentSlider').noUiSlider;
	var cutBack = document.getElementById('CutBack').noUiSlider;
	
	var CO2Out = ((((Number(current.get())*3.5)*0.0283495)*52)*35.75).toFixed(2)
	var CO2Cut = ((((Number(cutBack.get())*3.5)*0.0283495)*52)*35.75).toFixed(2)
	console.log(CO2Out, CO2Cut);
	document.getElementById('currentOutput').innerHTML = CO2Out.toString() + ' KG Per Year';
	document.getElementById('outputCut').innerHTML = CO2Cut.toString() + ' KG Per Year';
	document.getElementById('newOutput').innerHTML = (CO2Out - CO2Cut).toFixed(2).toString() + ' KG Per Year';
});
