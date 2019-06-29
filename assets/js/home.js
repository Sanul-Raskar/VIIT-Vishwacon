console.log("JS Connected");
sal();
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".topButton").addClass("buttonDisplay");
    } else {
      $(".topButton").removeClass("buttonDisplay");
    }

    if ($(this).scrollTop() > 250) {
      $(".navbar").addClass("solid");
      $(".navbar").css("background-color: #000;");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Chart */
var options = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: "straight"
  },
  series: [
    {
      name: "Algorithms",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150]
    }
  ],
  title: {
    text: "Some Information Graph on AI",
    align: "left"
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
/* chart  */
