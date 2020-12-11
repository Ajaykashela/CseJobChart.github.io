const width_threshold = 480;

function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
      let mydata = JSON.parse(this.responseText);
      if ($("#lineChart").length) {
        ctxLine = document.getElementById("lineChart").getContext("2d");
        optionsLine = {
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Hits"
                }
              }
            ]
          }
        };
    
        // Set aspect ratio based on window width
        optionsLine.maintainAspectRatio =
          $(window).width() < width_threshold ? false : true;
    
        configLine = {
          type: "line",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "Latest Hits",
                data: mydata.value1,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                cubicInterpolationMode: "monotone",
                pointRadius: 0
              },
              {
                label: "Popular Hits",
                data: [33, 45, 37, 21, 55, 74, 69],
                fill: false,
                borderColor: "rgba(255,99,132,1)",
                cubicInterpolationMode: "monotone",
                pointRadius: 0
              },
              {
                label: "Featured",
                data: [44, 19, 38, 46, 85, 66, 79],
                fill: false,
                borderColor: "rgba(153, 102, 255, 1)",
                cubicInterpolationMode: "monotone",
                pointRadius: 0
              }
            ]
          },
          options: optionsLine
        };
    
        lineChart = new Chart(ctxLine, configLine);
      }

      }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}



function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}


function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
      let mydata = JSON.parse(this.responseText);
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              
              labels: mydata.label1,
              datasets: [{
                  label: '# of Votes',
                  data: mydata.value1,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                                 'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });

      }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}
