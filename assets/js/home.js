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

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

function dynamicDropdown(selected) {
  let domainSel = document.getElementById("domain");
  let domains = {
    comp: [
      "Data Science",
      "Internet Of Things",
      "Software Engineering",
      "Networking & Cloud Computing",
      "Artificial Intelligence & Machine Learning"
    ],
    it: [
      "Cloud Computing",
      "Data Mining & Information Retrieval",
      "Mobile Computing & Wireless Communication",
      "Network & Cyber Security"
    ],
    mech: [
      "Automation & Robotics",
      "Design Engineering",
      "Thermal & Fluid Science",
      "Manufacturing & Material Science",
      "Mechatronics"
    ],
    civil: [
      "Green Construction Materials & Advances in Construction Techniques",
      "Recent Developments in Town Planning with respect to Smart City",
      "Recent Trends in Structural Engineering and Concrete Technology",
      "Application of Remote Sensing and GIS in Civil Engineering",
      "New Technologies, Methods & Techniques in Civil Engineering"
    ],
    entc: [
      "Embedded & VLSI Design",
      "Communication & Networking",
      "Machine Learning",
      "Instrumentation Systems",
      "Power & Renewable Energy Systems"
    ]
  };

  switch (selected) {
    case "comp":
      domainSel.options.length = 0;
      for (index in domains.comp) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.comp[index],
          domains.comp[index]
        );
      }
      break;

    case "it":
      domainSel.options.length = 0;
      for (index in domains.it) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.it[index],
          domains.it[index]
        );
      }
      break;

    case "mech":
      domainSel.options.length = 0;
      for (index in domains.mech) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.mech[index],
          domains.mech[index]
        );
      }
      break;

    case "civil":
      domainSel.options.length = 0;
      for (index in domains.civil) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.civil[index],
          domains.civil[index]
        );
      }
      break;

    case "entc":
      domainSel.options.length = 0;
      for (index in domains.entc) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.entc[index],
          domains.entc[index]
        );
      }
      break;
  }
}
