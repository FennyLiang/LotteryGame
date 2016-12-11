var nums = [];

$('#start').on('click', function(){
	
		var random = Math.floor((Math.random()*16) + 1);
  		console.log(random);

		if(nums.indexOf(random) < 0 && nums.length < 4){

			nums.push(random);
		}

  		nums.forEach(changeColor);
 		
 		
})


function showHistory(nums){
	$('#history').append('<li>'+nums+'</li>');
	$('#start').hide();
	$('#reset').show();
	return nums;
}

$('#reset').on('click', function(){
	resetArray(nums);
	$('#start').show();
	$('#reset').hide();

})

function resetArray(nums){
	nums.forEach((element, index, array) =>{
		$('#'+element).css("color", "black")
	})
	nums.length = 0;
}


function changeColor(element, index, array){
	if( index != 3){
		$('#'+element).css("color", "orange")
	}

	else{
		$('#'+element).css("color", "red")
		showHistory(array);
}
	}


