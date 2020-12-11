
let i = "a";
console.log(i);
let jobname = document.getElementById("jobname");
let salary = document.getElementById("salary");
let vacancey = document.getElementById("vacancey");
let skills = document.getElementById("skills");
let jobDesc = document.getElementById("jobDesc");
let jobImg = document.getElementById("jobImg");
const width_threshold = 480;
let mydata;
loadDoc1();



function fun1(){
  i="a";
  a=mydata.b;
  console.log(a);
  caller();
}
function fun2(){
  i="b";
  a=mydata.a;
  console.log(a);
  caller();
}

function caller(){
  drawLineChart();
  drawPieChart();
  drawBarChart();
  values();
}

function values(){
  jobname.innerText = a.name;
  salary.innerText = a.salary;
  vacancey.innerText = a.vacancey;
  skills.innerText = a.skills;
  jobDesc.innerHTML = a.Desc;
  jobImg.src= a.jobImg;
}





function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
      mydata = JSON.parse(this.responseText);
      console.log(mydata);
     

      }
  };
  xhttp.open("GET", "js/data.json", false);
  xhttp.send();
}
console.log(mydata);
let a = mydata.a;

function drawLineChart() {

 // console.log(mydata);
  
 /* console.log(mydata.a.named);
  console.log(mydata.b.named);
  console.log(mydata.c.named);*/
  console.log(a);
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
   /* console.log(ctxLine);
    console.log(ctxLine.canvas);
    console.log(lineChart);*/
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "salary in 1k Rs. per anum"
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
          "<1yr",
          "1-4yr",
          "5-9yr",
          "10-19yr",
        ],
        datasets: [
          {
            label: "India",
            data: a.value1,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            label: "UK",
            data: a.value2,
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            label: "Australia",
            data: a.value3,
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

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Hits"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: ["","india","australia","UK",""],
        datasets: [
          {
            label: "compititer",
            data: a.value4,
            backgroundColor: [
              "#D7D768",
              "#9D66CC",
              "#F7604D",
              "#4ED6B8",
              "#A8D582", 
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: a.value5,
            backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
            label: "salary"
          }
        ],
        labels: [
          "United Kindom $ per year",
          "Australia $ per year",
          "India $ per year"
        ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

//jobname.innerText=mydata.i.named;


function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}
function updatePieChart() {
  if (pieChart) {
    pieChart.options = optionsPie;
    pieChart.update();
  }
}
function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
  
}
