var nums = [];

$('#start').on('click', function(){

	var random = Math.floor((Math.random()*16) + 1);
  		console.log(random);
  		if(nums.indexOf(random) < 0){
  			nums.push(random);
  		}

  		if(nums.length > 4){
  			return nums;
  			// $('#values').append('<li>'+random+'</li>')
  		}

  		nums.forEach(changeColor);

  		function changeColor(element, index, array){
  			if( index != 3){
  				$('#'+element).css("color","orange")
  			}

  			else{
  				$('#'+element).css("color","red")
  			}
  		}


  		// if($('#values').children().length > 4){
  		// 	$('#values').children().remove();
  		// 	nums = [];
  		// }

})