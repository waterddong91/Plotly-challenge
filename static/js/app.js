// Variables 
var data;
var dataNames;
var sampledata;
var datametadata;
var firstID;
var firstIDlabels;
var selectedID;


// ID Values from DataSamples
d3.json("static/js/samples.json").then(function(data){
    var data = data;
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;
    //var firstID = sampledata[0].otu_ids
    //var firstIDlabels = sampledata[0].otu_labels;
    names.forEach(function(sample) {
    var dropdownMenu = d3.select("#selDataset");
    var newoption = dropdownMenu.append("option");
    newoption.attr('value', sample);
    newoption.text(sample);   
    var selectedID = dropdownMenu.node().value;
    //console.log(samples)

    // Set the first(default) variable 
    
    });
});

d3.json("static/js/samples.json").then(function(data){
    var data = data;
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;
    var firstID = samples[0];
    barchart(firstID);
    //bubblechart(firstID);
   // metadata(firstID);    
});

// Set the function for changed options
function optionChanged(sample) {
    barchart(sample);
    //bubblechart(sample);
    //metadata(sample);
};

// Bar Chart from SelectedID
function barchart(sample){
    d3.json("static/js/samples.json").then((data) => {
    var dropdownMenu = d3.select("#selDataset");
    var newID = dropdownMenu.node().value;
    var samples = data.samples;
    var newID = samples.filter(sample=>sample.id == newID);
    var array = newID[0];
    var value = array.sample_values.slice(0,10).sort((a, b) => b -a);
    var otu = array.otu_ids.map(sample => "OTU" + sample);
    //otu.sort((a, b) => b-a);
    var otuLabels = array.otu_labels.slice(0,10);
        
    //console.log(array);

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