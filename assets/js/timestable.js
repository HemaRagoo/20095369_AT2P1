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
// //   timesTableSelectContainer.appendChild(option);
// // }



// var timesTableSelectContainer = document.getElementById('timesTableSelectContainer');
//
// // Generate the times tables options dynamically
// var table = document.createElement('table');
// for (var i = 1; i <= 9; i++) {
//     var row = document.createElement('tr');
//
//     var cell = document.createElement('td');
//     var option = document.createElement('option');
//     option.value = i;
//     option.text = i;
//     cell.appendChild(option);
//     row.appendChild(cell);
//
//     table.appendChild(row);
// }
//
// timesTableSelectContainer.appendChild(table);
//
// document.getElementById('timesTableSelectContainer').addEventListener('change', function() {
//     var selectedValue = parseInt(this.value);
//     var timesTableOutput = document.getElementById('timesTableOutput').getElementsByTagName('tbody')[0];
//
//     timesTableOutput.innerHTML = '';
//
//     for (var i = 1; i <= 10; i++) {
//         var result = selectedValue * i;
//         var row = document.createElement('tr');
//         row.innerHTML = '<td>' + selectedValue + '</td><td>' + i + '</td><td>' + result + '</td>';
//         timesTableOutput.appendChild(row);
//     }
// });
//