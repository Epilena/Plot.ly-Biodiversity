### Plot.ly-Biodiversity
##Interactive Dashboard creation of belly button biodiversity

#Introduction

The goal of this project is to build an interactive dashboard to explore the Belly Button Biodiversity dataset.  The dataset catalogs the microbes that colonize human navels.  The dashboard will concentrate on Operational taxonomix units, or OTUs.  OTUs are a small number of microbial species that were present in 70% of the study population.  The other microbial species found were relatively rare.  

#Resources

Belly Button Biodiversity dataset -- http://robdunnlab.com/projects/belly-button-biodiversity/

#Methodology

The D3 library was utilized to read in the dataset, samples.json within the app.js file.  Ploty.ly was utilized to create a interactive horizontal bar and a bubble chart displaying the parsed data of the OTUs of the navel.  JavaScript, HTML, and CSS were used for page creation and optimization of interaction.  The dashboard contains a drop down menu of particpants IDs for selection and participant demographics are displayed.  Data is updated on each option change.  

#Results/Conclusion

https://epilena.github.io/Plot.ly-Biodiversity/

The final data visulization is visually appealing, with the EARTH color scheme applied to the bubble chart.  The bar chart is interactive and bacteria names are displayed when 'hover to discover'.  I had difficluty with the deisplay of the bar chart until the map method was applied in the coding, then y labels displayed appropriately.   

![Screenshot home page](https://user-images.githubusercontent.com/88807979/151687869-8d8c6879-2fb6-4519-8c97-8c1811801e90.png)

