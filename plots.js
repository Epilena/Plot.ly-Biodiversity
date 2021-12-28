//create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
//slice the first 10 objects for plotting
slicedData=samples.slice(0,10)
let bar_chart ={
    x: slicedData.map(object =>object.otu_ids),
    y: slicedData.map(object =>object.sample_values),
    text: slicedData.map(object =>object.otu_labels),
    type: "bar",
    orientation: "h"
}

let bar_chart = [bar];

let layout = {
    title: "Top 10 OTUS",
    margin:{
        1:100,
        r:100,
        t:100,
        b:100
    }
};

//Render the plot to the div tag
Plotly.newPlot("bar", bar_chart, layout);