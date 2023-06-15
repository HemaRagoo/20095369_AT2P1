document.getElementById('timesTableSelect').addEventListener('change', function() {
    var selectedValue = parseInt(this.value);
    var timesTableOutput = document.getElementById('timesTableOutput');

    timesTableOutput.innerHTML = '';

    for (var i = 1; i <= 10; i++) {
        var result = selectedValue * i;
        timesTableOutput.innerHTML += selectedValue + ' x ' + i + ' = ' + result + '<br>';
    }
});
//var timesTableSelectContainer = document.getElementById('timesTableSelectContainer');
//
// // Generate the times tables options dynamically
// for (var i = 1; i <= 9; i++) {
//   var option = document.createElement('option');
//   option.value = i;
//   option.text = i;
//   timesTableSelectContainer.appendChild(option);
// }