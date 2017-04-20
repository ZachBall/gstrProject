$("#resultModal").on('shown.bs.modal', function(){
	var current = document.getElementById('currentSlider').noUiSlider;
	var cutBack = document.getElementById('CutBack').noUiSlider;
	
	var CO2Out = ((((Number(current.get())*3.5)*0.0283495)*52)*35.75)
	var CO2Cut = ((((Number(cutBack.get())*3.5)*0.0283495)*52)*35.75)
	//return(CO2Out, CO2Cut);
});
