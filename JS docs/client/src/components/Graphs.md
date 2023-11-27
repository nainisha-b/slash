# Graphs Component Documentation

## Overview
The `Graphs` component is a React component designed to generate graphical representations (pie chart and line chart) for displaying product variety and pricing results. It interacts with a server to fetch data and utilizes the Chart.js library for chart visualization.

## Location of Code
The code implementing this feature can be found [here](https://github.com/nainisha-b/slash/blob/main/client/src/components/Graphs.js).

## Code Description

### Chart.js and React-chartjs-2 Integration

1. **Chart Components Integration**
   - The component seamlessly integrates with the Chart.js library and the `react-chartjs-2` wrapper to create interactive and visually appealing charts.

### State Management

1. **State Variables**
   - `pieData`: State variable responsible for storing data related to the variety of collections available.

2. **LineData**: State variable responsible for storing data related to the highest and lowest prices on each website.

### User Interface

1. **Button Handling**
   - The component provides a button for users to submit a search query for chart results.
   - The button state dynamically changes between "Default," "Fetching," and "Fetched" to indicate the current state of data retrieval.

2. **Search Input**
   - Utilizes a text field for users to input the search item.

### Chart Rendering

1. **Pie Chart**
   - Renders a pie chart displaying the variety of the search item available across different websites.
   - Uses data fetched from the server to dynamically generate the chart.

2. **Line Chart**
   - Renders a line chart displaying the highest and lowest prices of the search item on each website.
   - Uses data fetched from the server to dynamically generate the chart.

### Functionality

1. **Data Fetching**
   - Implements a data fetching mechanism to retrieve variety and pricing data from the server.
   - Dynamically updates the state variables `pieData` and `lineData` with the fetched data.

2. **Button Handling**
   - Adjusts the button text and behavior based on the state of data fetching, providing user feedback.

## Usage
1. **Integration with Components:**
   - Integrate the `Graphs` component within your React application to visualize variety and pricing data.

2. **Search Item Input:**
   - Users can input a search item using the provided text field.

3. **Chart Results:**
   - Clicking the "Chart Results" button triggers the fetching and rendering of variety and pricing charts.

## Note
- Ensure the server URLs for data fetching match your server setup.
- Customize chart options, styles, and labels as needed within the Chart.js configuration.
