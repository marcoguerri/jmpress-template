/*
Copyright 2017, CERN

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of 
the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN 
AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function draw_line_chart(source, graph,scale) {

  var jsonData = $.ajax({
    url: "http://localhost:8080/sources/" + source,
    dataType: 'json',
  }).done(function (results) {

    chartjs_data = {
        datasets : []
    };
    
    xlabel = results["xlabel"];
    ylabel = results["ylabel"];
    title = results["title"];
    results["datasets"].forEach(function(dataset) {
      color = dataset["color"]
      chartjs_data["datasets"].push(
      {
            label: dataset["label"],
            fill: false,
            lineTension: 0.1,
            backgroundColor: color,
            fillColor: color,
            borderColor : color,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: color,
            pointBackgroundColor: color,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderColor: color,
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            spanGaps: "True",
            pointHitRadius: 10,              
            data : dataset["data"],
            label: dataset["label"],
        });
    });

    graph_labels = results["labels"];

    var ctx = document.getElementById(graph).getContext("2d");   
    var myNewChart = new Chart(ctx , {
        type: "line",
        data: chartjs_data,
        options: {
            legend : {
                position: "right",
                labels : {
                    boxWidth: 15,
                    padding: 15,
                    fontSize : 16,
                    stroke : false
                }   
            },
             scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: ylabel,
                  }
                }],
                xAxes: [{
                  type : scale,
                  position: "bottom",
                  ticks : {
                      autoSkip: false,
                      userCallback: function(tick) { 
                            if(results["labels"].includes(tick) && tick != 2)
                                return tick.toString();
                      },
                       fixedStepSize: 1,
                      maxRotation: 0
                    
                  },
                  scaleLabel: {
                    display: true,
                    labelString: xlabel,
                  }
                }]
            },
            tooltips : {
                mode: "x-axis",
                bodyFontSize: 14,
                backgroundColor: "black",
                titleFontColor: "white",
                bodyFontColor : "white",
                multiKeyBackground: "white"
                
            },
            title : {
                fontSize: 32,
                display : "True",
                text : title
            }
        }
    });
  });
}



function draw_bar_chart(source, graph) {

  var jsonData = $.ajax({
    url: "http://localhost:8080/sources/" + source,
    dataType: 'json',
  }).done(function (results) {

    graphjs_data = {
        labels : results["labels"],
        datasets : []
    };

    xlabel = results["xlabel"];
    ylabel = results["ylabel"];
    title = results["title"];
    results["datasets"].forEach(function(dataset) {
      color = dataset["color"]
      
      graphjs_data["datasets"].push(
        {

            fill: false,
            lineTension: 0.1,
            backgroundColor: color,
            fillColor: color,
            borderColor : color,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 1,
            pointBorderColor: color,
            pointBackgroundColor: color,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderColor: color,
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            spanGaps: "True",
            pointHitRadius: 10,
            data : dataset["data"],
            label : dataset["label"]
        });
    });

    var ctx = document.getElementById(graph).getContext("2d");
    var myNewChart = new Chart(ctx , {
        type: "bar",
        data: graphjs_data,
        options: {
            legend : {
                position: "right",
                labels : {
                    boxWidth: 15,
                    padding: 15,
                    fontSize : 16,
                    stroke : false
                }
            },
             scales: {
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: ylabel,
                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: xlabel,
                  }
                }]
            },
            tooltips : {
                mode: "x-axis",
                bodyFontSize: 14,
                backgroundColor: "black",
                titleFontColor: "white",
                bodyFontColor : "white",
                multiKeyBackground: "white"

            },
            title : {
                fontSize: 32,
                display : "True",
                text : title
            }
        }
    });
  });
}

