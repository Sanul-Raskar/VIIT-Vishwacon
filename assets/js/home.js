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
  dots: false,
  loop: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
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

let fnameError = document.querySelector(".fnameError"),
  fnameMessage = document.querySelector("#fnameError"),
  lnameError = document.querySelector(".lnameError"),
  lnameMessage = document.querySelector("#lnameError"),
  emailError = document.querySelector(".emailError"),
  emailMessage = document.querySelector("#emailError"),
  mobileError = document.querySelector(".mobileError"),
  mobileMessage = document.querySelector("#mobileError"),
  collegeError = document.querySelector(".collegeError"),
  collegeMessage = document.querySelector("#collegeError"),
  yearError = document.querySelector(".yearError"),
  yearMessage = document.querySelector("#yearError"),
  domainError = document.querySelector(".domainError"),
  domainMessage = document.querySelector("#domainError"),
  paperError = document.querySelector(".paperError"),
  paperMessage = document.querySelector("#paperError"),
  fileError = document.querySelector(".fileError"),
  fileMessage = document.querySelector("#fileError");

function hideError() {
  fnameError.style.display = "none";
  lnameError.style.display = "none";
  emailError.style.display = "none";
  mobileError.style.display = "none";
  collegeError.style.display = "none";
  yearError.style.display = "none";
  domainError.style.display = "none";
  paperError.style.display = "none";
  fileError.style.display = "none";
}

function validate() {
  let fname = document.querySelector("#firstName").value,
    lname = document.querySelector("#lastName").value,
    email = document.querySelector("#email").value,
    mobile = document.querySelector("#mobile").value,
    college = document.querySelector("#college").value,
    year = document.querySelector("#year").value,
    branch = document.querySelector("#branch").value,
    domain = document.querySelector("#domain").value;

  let fnameFlag,
    lnameFlag,
    emailFlag,
    mobileFlag,
    collegeFlag,
    yearFlag,
    branchFlag,
    domainFlag;

  if (fname === "") {
    fnameError.style.display = "block";
    fnameMessage.innerHTML = "Required";
    fnameFlag = false;
  } else {
    fnameError.style.display = "none";
    fnameMessage.innerHTML = "";
    fnameFlag = true;
  }

  if (lname === "") {
    lnameError.style.display = "block";
    lnameMessage.innerHTML = "Required";
    lnameFlag = false;
  } else {
    lnameError.style.display = "none";
    lnameMessage.innerHTML = "";
    lnameFlag = true;
  }

  if (
    fnameFlag &&
    lnameFlag &&
    emailFlag &&
    mobileFlag &&
    collegeFlag &&
    yearFlag &&
    branchFlag &&
    domainFlag
  ) {
    return true;
  } else {
    return false;
  }
}

(function () {
  const second = 500,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


  // pricing

  var $carousel = $('.PriceBlocks-slider').flickity({
    cellSelector: '.PriceBlock-container',
    initialIndex: 2
  });
  
  var flkty = $carousel.data('flickity');
  
  $carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
    if (typeof cellIndex == 'number') {
      $carousel.flickity('selectCell', cellIndex);
    }
  });
  
  $carousel.on('select.flickity', function() {
    flkty.getCellElements().forEach(function(cellElem) {
      cellElem.classList['remove']('is-next');
      cellElem.classList['remove']('is-previous');
    });
  
    var previousSlide = flkty.slides[flkty.selectedIndex - 1];
    var nextSlide = flkty.slides[flkty.selectedIndex + 1];
  
    nextSlide.getCellElements().forEach(function(cellElem) {
      cellElem.classList['add']('is-next');
    });
    previousSlide.getCellElements().forEach(function(cellElem) {
      cellElem.classList['add']('is-previous');
    });
  })
  
  function changeSlideClasses(slide, method, className) {
    slide.flickity('getCellElements').forEach(function(cellElem) {
      cellElem.classList[method](className);
    });
  }


  /*==================== SHOW Events ====================*/
const showEvents = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-Events class to the div tag with the nav__Events class
          nav.classList.toggle('show-Events')
      })
  }
}
showEvents('nav-toggle','nav-Events')

/*==================== REMOVE Events MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navEvents = document.getElementById('nav-Events')
  // When we click on each nav__link, we remove the show-Events class
  navEvents.classList.remove('show-Events')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__Events a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
          document.querySelector('.nav__Events a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function Feedback() {
  parent.location = "https://forms.gle/mp8rS8h217wmxd8o7"
  console.log("location")
}


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(`.home__data, .home__img,
          .about__data, .about__img,
          .Team__content, .Events__content,
          .app__data, .app__img,
          .contact__data, .contact__button,
          .footer__content`, {
  interval: 200
})
