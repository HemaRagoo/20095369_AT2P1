let dom = document;

// Get the element with the ID timesTableSelect from the DOM

const timesTableSelectContainer = dom.getElementById('timesTableSelect');

// Generate the times tables options dynamically
for (let i = 1; i <= 20; i++) {
    const option = dom.createElement('option');
    option.value = i.toString();
    option.text = i.toString();
    timesTableSelectContainer.appendChild(option);
}

// Add an event listener to the times table select element

dom.getElementById('timesTableSelect').addEventListener('change', function() {
    // Get the selected value from the select element and convert it to an integer
    const selectedValue = parseInt(this.value);
    // Get the times table output element and its table body
    const timesTableOutput = dom.getElementById('timesTableOutput').getElementsByTagName('tbody')[0];

    // Clear the previous content of the times table output
    timesTableOutput.innerHTML = '';

    // Generate the times table rows and populate the times table output up[ to 20
    for (let i = 1; i <= 20; i++) {
        const result = selectedValue * i;
        const row = dom.createElement('tr');
        // Set the inner HTML of the row with the times table values
        row.innerHTML = `<td>${selectedValue}</td><td>x</td><td>${i}</td><td>=</td><td>${result}</td>`;
        // Append the row to the times table output
        timesTableOutput.appendChild(row);
    }
});