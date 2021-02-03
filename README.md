# Plotly- Belly Button Biodiversity


![Bacteria by filterforge.com](Images/bacteria.jpg)

# Background

Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## Step 1: Plotly

1. Read in `samples.json` using the D3 library.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* `sample_values` =>  the values for the bar chart.

*  `otu_ids` => the labels for the bar chart.

*  `otu_labels` => the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Create a bubble chart that displays each sample.

* `otu_ids` => x values.

*  `sample_values` => y values.

*  `sample_values` => marker size.

* `otu_ids` => marker colors.

*  `otu_labels` => text values.

![Bubble Chart](Images/bubble_chart.png)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Update all of the plots any time that a new sample is selected.

An example dashboard is shown below:

![hw](Images/hw02.png)

## Deployment

* My app is deployed to GitHub Pages, Here is the link!
https://waterddong91.github.io/Plotly-challenge/

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -
