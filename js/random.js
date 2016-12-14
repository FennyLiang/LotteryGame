var nums = [];
var analytics = [];

for (var i = 0; i < 16; i++) {
	analytics[i] = 0;
}

var ctx = document.getElementById('myChart').getContext("2d");

var data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  datasets: [
    {
      label: "Selected number",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: analytics
    }
  ]
};

var myLineChart = new Chart(ctx).Line(data, {});

$('#start').on ('click', function() {
	var template = $('#template').html();

	if (nums.length == 4) {
		$('#selected').html(''); //reset selected first row

		var histories = $('#history');
		var historyRow = '';

		nums.forEach(function(num) {
			historyRow += template.replace(/\{\{num\}\}/g, num);
		});
    histories.prepend(historyRow);

    //Remove last Row
		// 4 * 4 , Remove more than 17th element

    $('#history li:nth-child(n+17)').remove();

    //Reset nums and UI

		nums = [];
		$('#values li').removeClass('active').removeClass('last');

	}
	
	if (nums.length <4) {
		var num = getRandomNumber(nums, 1, 16);
		nums.push(num);
		analytics[num - 1] += 1;

		var selectedNum = $('#' + num);

		$('#selected').append(template.replace(/\{\{num\}\}/g, num));

		selectedNum.addClass('active');

		if(nums.length == 4){
			selectedNum.addClass('last')
		}

		myLineChart.destroy();
		myLineChart = new Chart(ctx).Line(data, {});
	}
 		
})

function getRandomNumber(nums, rangeStart, rangeEnd) {

	var random = Math.floor((Math.random()*rangeEnd)+rangeStart);

	while(nums.indexOf(random) > -1) {
    random = Math.floor((Math.random()*rangeEnd)+rangeStart);
	}

	return random;
}

