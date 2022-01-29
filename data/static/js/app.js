function getData(id){
  //read samples.json and print to console
  d3.json("data/samples.json").then(sampleData =>{
    console.log(sampleData)

  //create variables for sample_values, otu_ids, and otu_labels for bar chart
    let values = sampleData.samples.filter(sample=>sample.id==id)[0].sample_values;
      console.log(values)
    let ids = sampleData.samples.filter(sample=>sample.id==id)[0].otu_ids;
      console.log(ids)
    let labels = sampleData.samples.filter(sample=>sample.id==id)[0].otu_labels;
      console.log(labels)
  //slice to get top 10 OTUs to plot
    let  OTUten = ids.slice(0,10).reverse();
    let labels_2 = labels.slice(0,10).reverse();

    let trace ={
      x: values.slice(0,10).reverse(),
      y:OTUten,
      text: labels_2,
      type: 'bar',
      orientation:'h'
    };

    //create data variable
    let data = [trace];

    //create plot layout
  let layout = {
    title: "Top 10 OTU",
    
  };
   
  //create the bar plot
  Plotly.newPlot('bar', data, layout);

  //bubble chart coding
  let trace2 = {
    x: ids,
    y: values,
    text: labels,
    mode: 'markers',
    marker: {
        size: values,
        color: ids
    }
  };
    //bubble layout
    let layout_b = {
      xaxis:{title:"OTU ID"},
      height:600,
      width: 1000
    };

    //create data variable
    let data2 = [trace2];

    //create bubble chart plot
    
  Plotly.newPlot('bubble', data2, layout_b);

  })
}

///Display sample metadata
function getDemo(id) {
  //read samples.json file
  d3.json("data/samples.json").then(data => {
//create variable of metadata
    let metadata = data.metadata;
    //filter data
    let demograph=metadata.filter(samplequery =>samplequery.id==id);
    let final = demograph[0];

  //select with the id of '#sample-metadata'
    let result_pt = d3.select("#sample-metadata");

  //clear out existing data
  result_pt.html("");

  //add key and value to result
    Object.entries(final).forEach(([key,value])=> {
      result_pt.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  })
}

//Initilization function
function initialize(){
  let choice = d3.select("#selDataset");

  //populate dropdown with names
d3.json("data/samples.json").then((data)=> {
  let snames = data.names;
  
  snames.forEach((sample)=>{
    choice
      .append("option")
      .text(sample)
      .property("value", sample);
  });

//call functions to display the data on load
  let display_sample = snames[0];
  getData(display_sample);
  getDemo(display_sample);
});
}
//update plots any time new sample matches function in html file 
function optionchg(s_id) {
  getData(s_id);
  getDemo(s_id);
  }

//initialization
initialize();