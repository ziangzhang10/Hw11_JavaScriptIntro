// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select table
var tbody = d3.select("tbody");

// Loop over the array
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Get a reference to the filter button
var button = d3.select("#filter-btn");


button.on("click", function() {

    // Prevent the page from refreshing
    // when using a button with type=submit, it will try to submit the form and automatically reset it
    // in this scenario, we could prevent this by setting type=button, or by using the line below.
    d3.event.preventDefault();
  
    // Select the input element and get the input date
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // clear original table
    d3.selectAll("tbody tr").remove()

    // loop through array to find matching data
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        console.log(sighting.datetime);
        // if date match
        if (sighting.datetime === inputValue)
        {
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
            cell.text(value);
        });
    }
    });

});
  