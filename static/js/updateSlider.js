function updateSlider(slider, max){
	max = Number(max);
	start = max;
	var slideStart = Number(slider.noUiSlider.get());
	if(slideStart <= max){
		start = slideStart;
	};
	if(max > 0){
		slider.removeAttribute('disabled');
		slider.noUiSlider.destroy();
		noUiSlider.create(slider, {
			start: start,
			tooltips: true,
			step: 1,
			connect: [true, false],
			format: wNumb({
					decimals: 0,
				}),
			range: {
				'min': 0,
				'max': max
				}
		});
	}else{
		slider.noUiSlider.set(0)
		slider.setAttribute('disabled', true);
	}
};
