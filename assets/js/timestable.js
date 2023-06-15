let dom = document


const timesTableSelectContainer = dom.getElementById('timesTableSelect');

// Generate the times tables options dynamically
for (let i = 1; i <= 20; i++) {
    const option = document.createElement('option');
    option.value = i.toString();
    option.text = i.toString();
    timesTableSelectContainer.appendChild(option);
}


dom.getElementById('timesTableSelect').addEventListener('change', function() {
    const selectedValue = parseInt(this.value);
    const timesTableOutput = document.getElementById('timesTableOutput').getElementsByTagName('tbody')[0];

    timesTableOutput.innerHTML = '';

    for (let i = 1; i <= 20; i++) {
        const result = selectedValue * i;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${selectedValue}</td><td>x</td><td>${i}</td><td>=</td><td>${result}</td>`;
        timesTableOutput.appendChild(row);
    }
});