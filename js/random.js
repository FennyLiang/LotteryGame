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
	$('#history').prepend('<li>'+nums+'</li>')

	$('#start').hide()
	$('#reset').show()

	count ++;
	console.log(count)

	if( count > 5 ) {

		removeData()
	}
}

function removeData () {

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
	})
	
	nums.length = 0
}


function changeColor (element, index, array) {

	if( index != 3){

		$('#'+element).css("color", "orange")

	}
	else{

		$('#'+element).css("color", "red")

		showHistory(array)
}
	}


