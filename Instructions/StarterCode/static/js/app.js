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

  
// Shapes to select from (dropdown menu)
var data = ["", "triangle", "rectangle", "cigar", "circle", "disk", "sphere", "cylinder", "chevron", "teardrop", "light", "fireball", "formation", "other", "unknown"];

// get content from dropdown menu
var select = d3.select('#shape')
    .append('select')
        .attr('class','select')
      .on('change',onchange);

// This creates the dropdown menu
var options = select
      .selectAll('option')
        .data(data).enter()
        .append('option')
            .text(function (d) { return d; });



button.on("click", function() {

    // Prevent the page from refreshing
    // when using a button with type=submit, it will try to submit the form and automatically reset it
    // in this scenario, we could prevent this by setting type=button, or by using the line below.
    d3.event.preventDefault();
  
    // Select the input element and get the input date
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var datetimeValue = inputElement.property("value");
    //console.log(datetimeValue);

    // Select the input element and get the input date
    var inputElement = d3.select("#city");
  
    // Get the value property of the input element
    var cityValue = inputElement.property("value");

    // clear original table
    d3.selectAll("tbody tr").remove()

    // shape of the UFO from the dropdown menu
	shapeValue = d3.select('select').property('value')
    console.log(shapeValue);

    // loop through array to find matching data
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");

        // if date & city & shape match; empty is OK
        if ((sighting.datetime === datetimeValue || datetimeValue == "")
            && (sighting.city === cityValue || cityValue == "")
            && (sighting.shape === shapeValue || shapeValue == ""))
        {
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
            cell.text(value);
        });
    }
    });

});


function onchange() {
	selectValue = d3.select('select').property('value')
};
