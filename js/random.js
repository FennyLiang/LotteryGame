var nums = [];

$('#start').on('click', function(){

	var random = Math.floor(Math.random()*16);
  		console.log(random);
  		if(nums.indexOf(random) < 0){
  			nums.push(random);
  			$('#values').append('<li>'+random+'</li>')
  		}

  		if($('#values').children().length > 4){
  			$('#values').children().remove();
  			nums = [];
  		}

})