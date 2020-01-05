// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


data.forEach(function(UFOsighting) {
    console.log(UFOsighting);

    var row = tbody.append("tr");

    Object.entries(UFOsighting).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        // in the weather report object

        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue)

    console.log(filteredData);  
});