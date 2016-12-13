var nums = []
var count = 0

$('#start').on ('click', function() {
	
	var random = Math.floor((Math.random()*16) + 1)
	console.log(random)

	if(nums.indexOf(random) < 0 && nums.length < 4) {

		nums.push(random)
	}

	nums.forEach(changeColor)
 		
 		
})



function showHistory (nums) {
	nums.map((num) => {

		$('#history').prepend('<li>'+num+'</li>')

	})

	$('#start').hide()
	$('#reset').show()

	count ++;
	console.log(count)

	if( count > 5 ) {

		removeData()
	}
}

function removeData () {

	$('#history li:nth-last-child(4)').remove()
	$('#history li:nth-last-child(3)').remove()
	$('#history li:nth-last-child(2)').remove()
	$('#history li:last-child').remove()

}

	$('#reset').on('click', function() {

		resetArray(nums)

		$('#start').show()
		$('#reset').hide()

	})

function resetArray (nums) {

	nums.forEach ((element, index, array) => {

		$('#'+element).css("color", "white")
		$('#'+element).css("background", "black")
	})
	
	nums.length = 0
}


function changeColor (element, index, array) {

	if( index != 3){

		$('#'+element).css("background", "orange")
		$('#'+element).css("color", "black")

	}
	else{

		$('#'+element).css("background", "red")
		$('#'+element).css("color", "black")

		showHistory(array)
		}
}





