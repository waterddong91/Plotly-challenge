// Set Values from DataSamples
d3.json("static/js/samples.json").then(function(data){
    var data = data;
    var metadata = data.metadata;
    var samples = data.samples;
    var names = data.names;
    names.forEach(function(sample) {
    var dropdownMenu = d3.select("#selDataset");
    var newoption = dropdownMenu.append("option");
    newoption.attr('value', sample);
    newoption.text(sample);   
    var selectedID = dropdownMenu.node().value;
        });
});

d3.json("static/js/samples.json").then(function(data){
    var data = data;
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;
    var firstID = samples[0];
    optionChanged(firstID);
});

// Set the function for changed options
function optionChanged(sample) {
    barchart(sample);
    bubblechart(sample);
    metadataTable(sample);
};


// MetaData Table from SelectedID
function metadataTable(sample) {
        
    d3.json("static/js/samples.json").then(function(data){
        var data = data;
        var metadata = data.metadata;
        var names = data.names;
        names.forEach(function(sample) {
            var dropdownMenu = d3.select("#selDataset");
            var newoption = dropdownMenu.append("option");
            newoption.attr('value', sample);
            newoption.text(sample);   
            var selectedID = dropdownMenu.node().value;

        var information = metadata.filter(samples => samples.id == selectedID)[0];
        var panel = d3.select("#sample-metadata");
        panel.html("");
        var sampleData= Object.entries(information).forEach((item) => {
        panel.append("h6").text(item[0]+': '+item[1]);
        });
        });
    });

};


// Bar Chart from SelectedID
function barchart(sample){
    d3.json("static/js/samples.json").then((data) => {
    var dropdownMenu = d3.select("#selDataset");
    var newID = dropdownMenu.node().value;
    var samples = data.samples;
    var newID = samples.filter(sample=>sample.id == newID);
    var array = newID[0];
    var value = array.sample_values.slice(0,10).sort((a, b) => b-a);
    var otu = array.otu_ids.map(sample => "OTU" + sample);
    
   
    //plotting
    var trace = {
        x: value,
        y: otu,
        //text: otuLabels,
        type: 'bar',
        orientation: 'h'

    };

    var data = [trace];

    Plotly.newPlot('bar', data);

    });
};

// Bubble Chart from SelectedID

function bubblechart(sample){
    d3.json("static/js/samples.json").then((data) => {
    var dropdownMenu = d3.select("#selDataset");
    var newID = dropdownMenu.node().value;
    var samples = data.samples;
    var newID = samples.filter(sample=>sample.id == newID);
    var array = newID[0];
    var value = array.sample_values;
    var otu = array.otu_ids;
    var otuLabels = array.otu_labels
        
    //console.log(array);

    //plotting
    var trace = {
        x: otu,
        y: value,
        text: otuLabels,
        mode: 'markers',
        marker: {
            size: value,
            color: otu,
            colorscale:"Earth"
        }
    };

    var data = [trace];

    var layout = {
        xaxis: {title : "OTU ID"}
    };
    

    Plotly.newPlot('bubble', data, layout);

    });
};

