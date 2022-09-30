window.$ = window.jQuery = require("jquery");
import "fullPage.js/dist/jquery.fullpage.js";
import { Input } from "postcss";
import { config } from "../content/config.js";
import { checkGsapActive, sectAnim, scroll } from "../gsap/index.js";

// helper objecr for define animations
let leaveSection = [
  {
    index: 1,
    direction: "down",
    secIndex: 3,
    secDirection: "up",
    animation: "aboutUsAnim",
    method: "restart",
  },
  {
    index: 2,
    direction: "down",
    secIndex: 2,
    secDirection: "up",
    animation: "aboutUsAnim",
    method: "reverse",
  },
  {
    index: 2,
    direction: "down",
    secIndex: 4,
    secDirection: "up",
    animation: "servicesAnim",
    method: "restart",
  },
  {
    index: 3,
    direction: "down",
    secIndex: 3,
    secDirection: "up",
    animation: "servicesAnim",
    method: "reverse",
  },
  {
    index: 3,
    direction: "down",
    secIndex: 5,
    secDirection: "up",
    animation: "projectAnim",
    method: "restart",
  },
  {
    index: 4,
    direction: "down",
    secIndex: 4,
    secDirection: "up",
    animation: "projectAnim",
    method: "reverse",
  },
  {
    index: 4,
    direction: "down",
    secIndex: 6,
    secDirection: "up",
    animation: "customersAnim",
    method: "restart",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 5,
    secDirection: "up",
    animation: "customersAnim",
    method: "reverse",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "careersAnim",
    method: "restart",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 6,
    secDirection: "up",
    animation: "careersAnim",
    method: "reverse",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 8,
    secDirection: "up",
    animation: "blogsAnim",
    method: "restart",
  },
  {
    index: 7,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "blogsAnim",
    method: "reverse",
  },
  {
    index: 7,
    direction: "down",
    secIndex: 9,
    secDirection: "up",
    animation: "contactAnim",
    method: "restart",
  },
  {
    index: 8,
    direction: "down",
    secIndex: 8,
    secDirection: "up",
    animation: "contactAnim",
    method: "reverse",
  },
];

const animated = document.querySelector(".loading__logo-right");

animated.addEventListener("animationend", () => {
  $.fn.fullpage.setAllowScrolling(true);
  document.querySelector(".loading").style.display = "none";
  sectAnim.home.resume();
});

// init Swiper for project section (PC version)
new Swiper(".swiper__lg", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// init Swiper for project section (Mobile version)
new Swiper(".swiper-mobile__container", {
  // Optional parameters
  loop: true,

  direction: "vertical",
  pagination: {
    clickable: true,
    el: ".mobile__pagination",
    dynamicBullets: true,
  },
});

// init full page js, and resume animations
$("#fullPage").fullpage({
  scrollingSpeed: config.scrollSpeed,
  normalScrollElements:
    ".aboutUs-body-text, .services-body__right, .swiper-mobile__container, .section__navigation, .blogsArea, .careersArea, .customers__names",

  afterLoad: function (anchorLink, index) {
    let loadedSection = $(this);
    // index are page numbers, 1 = home, 3 = services and etc...
    if (checkGsapActive)
      switch (index) {
        case 1:
          break;
        case 2:
          sectAnim.aboutUs.resume();
          break;
        case 3:
          sectAnim.services.resume();
          break;
        case 4:
          sectAnim.project.resume();
          break;
        case 5:
          scroll.customersAnim.resume();
          break;
        case 6:
          sectAnim.careers.resume();
          break;
        case 7:
          sectAnim.blogs.resume();
          break;
        case 8:
          sectAnim.contact.resume();
          break;
      }
  },

  onLeave: function (index, nextIndex, direction) {
    let leavingSection = $(this);

    if (checkGsapActive) {
      leaveSection.map((anim) => {
        if (
          (index === anim.index && direction === anim.direction) ||
          (index === anim.secIndex && direction === anim.secDirection)
        ) {
          scroll[anim.animation][anim.method]();
        }
      });
    }
  },
});

$.fn.fullpage.setAllowScrolling(false);

let servicesDiv = document.querySelector(".services-body__right");
let aboutUsDiv = document.querySelector(".aboutUs-body-text");
let blogsArea = document.querySelector(".blogsArea");
let careersArea = document.querySelector(".careersArea");
let customers = document.querySelector(".customers__names");

function scrollThing(container) {
  let touchStart;
  container.addEventListener(
    "touchstart",
    (e) => {
      touchStart = e.touches[0].pageY;
    },
    false
  );

  container.addEventListener(
    "touchmove",
    (e) => {
      let scrollingUp =
        e.changedTouches[0].pageY > touchStart
          ? e.changedTouches[0].pageY >= touchStart + 100
          : e.changedTouches[0].pageY < touchStart - 100;
      console.log("touch move");

      let aboutUsScroll =
        container.clientHeight + 1 + $(container).scrollTop() >=
        container.scrollHeight;

      if (aboutUsScroll && scrollingUp) {
        $.fn.fullpage.setAllowScrolling(true);
        console.log("scrolling up");
      }

      if ($(container).scrollTop() < 1 && scrollingUp) {
        $.fn.fullpage.setAllowScrolling(true);
      }
    },
    false
  );

  container.addEventListener(
    "wheel",
    (e) => {
      let aboutUsScroll =
        container.clientHeight + $(container).scrollTop() >=
        container.scrollHeight;
      console.log("wheel eventlistener");

      if (aboutUsScroll && e.deltaY > 0) {
        $.fn.fullpage.setAllowScrolling(true);
      } else {
        $.fn.fullpage.setAllowScrolling(false);
      }

      if ($(container).scrollTop() < 1 && e.deltaY < 0) {
        $.fn.fullpage.setAllowScrolling(true);
      }
    },
    false
  );

  container.addEventListener("mouseleave", () => {
    $.fn.fullpage.setAllowScrolling(true);
  });
}
scrollThing(aboutUsDiv);
scrollThing(servicesDiv);
scrollThing(blogsArea);
scrollThing(careersArea);
scrollThing(customers);

/* --------
 clear website url before refresh
---------- */

window.location.replace("#");

if (typeof window.history.replaceState === "function") {
  history.replaceState({}, "", window.location.href.slice(0, -1));
}

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};

/* --------
 for "read more" blogs
---------- */
let blogDiv = document.querySelectorAll(".blogDiv");

let positionY;
let positionX;

blogsArea.addEventListener("scroll", () => {
  let oneBlogArea = document.querySelector(".oneBlogArea");
  !oneBlogArea && (positionY = $(".blogsArea").scrollTop());
  !oneBlogArea && (positionX = $(".blogsArea").scrollLeft());
});

blogDiv.forEach((element) => {
  let blogBtn = element.querySelector(".blogBtn");
  let dots = element.querySelector(".dots");

  blogBtn.addEventListener("click", (e) => {
    element.classList.toggle("readMore");
    dots.classList.toggle("nonDisplay");
    blogsArea.classList.toggle("oneBlogArea");

    blogDiv.forEach((blog) => {
      blog !== element && blog.classList.toggle("nonDisplay");
      let oneBlogArea = document.querySelector(".oneBlogArea");

      screen.width > 1000
        ? oneBlogArea
          ? blogsArea.scrollTo({ top: 0 })
          : blogsArea.scrollTo({ top: positionY || 0 })
        : oneBlogArea
        ? blogsArea.scrollTo({ top: 0 })
        : blogsArea.scrollTo({ left: positionX || 0 });
    });

    blogBtn.innerText === "Read more"
      ? (blogBtn.innerText = "Read less")
      : (blogBtn.innerText = "Read more");
  });
});

/* --------
Careers
---------- */

let careerDiv = document.querySelectorAll(".careerDiv");

careerDiv.forEach((element) => {
  let careerBtn = element.querySelector(".careerBtn");
  let listDiv = element.querySelector(".listDiv");
  let resumeDiv = element.querySelector(".resumeDiv");
  let backBtn = element.querySelector(".backButton");
  let sendBtn = element.querySelector(".sendResumeBtn");
  let dragInput = element.querySelector(".dragInput");
  let dragFileHere = element.querySelector(".dragFileHere");
  let fileDiv = element.querySelector(".fileDiv");
  let forOpacity = element.querySelector(".forOpacity");
  let mail = element.querySelector(".mailInput");

  careerBtn.addEventListener("click", () => {
    listDiv.classList.toggle("nonDisplay");
    resumeDiv.classList.remove("nonDisplay");

    forOpacity.style.display = "none";
  });

  mail.addEventListener("change", (e) => {
    mail.classList.remove("errorMail");
  });

  backBtn.addEventListener("click", () => {
    listDiv.classList.remove("nonDisplay");
    resumeDiv.classList.toggle("nonDisplay");

    dragFileHere.innerHTML = "Drag file here";
    dragFileHere.style.color = "white";
    dragInput.value = null;
    fileDiv.style.border = "2px dashed #ffffff";
    fileDiv.style.backgroundColor = "#131c1b";
    forOpacity.style.display = "block";
    forOpacity.style.opacity = "0";
  });

  let data;

  dragInput.addEventListener("change", (e) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(dragInput.files[0]);
    fileReader.addEventListener("load", (file) => {
      data = fileReader.result;

      sendBtn.addEventListener("click", () => {
        let file = element.querySelector(".dragInput");
        let title = element.querySelector(".title").innerHTML;
        let message = element.querySelector(".message");
        if (mail.value && file.files.length && file.files[0].size <= 15000000) {
          //here is user info with file to send request for mail

          console.log({ file: data, email: mail.value, title });

          listDiv.classList.remove("nonDisplay");
          resumeDiv.classList.toggle("nonDisplay");
          dragFileHere.innerHTML = "Drag file here";
          dragFileHere.style.color = "white";
          dragInput.value = null;
          fileDiv.style.border = "2px dashed #ffffff";
          forOpacity.style.opacity = "0";
          fileDiv.style.backgroundColor = "#131c1b";
          message.classList.remove("nonDisplay");
          setTimeout(() => {
            message.classList.add("nonDisplay");
          }, 3000);
          element.querySelector(".mailInput").value = "";
        }
      });
    });
  });
  let mailErrorMesage = element.querySelector(".mailErrorMesage");
  sendBtn.addEventListener("click", () => {
    !mail.value
      ? mailErrorMesage.classList.remove("nonDisplay")
      : mailErrorMesage.classList.add("nonDisplay");
    setTimeout(() => {
      mailErrorMesage.classList.add("nonDisplay");
    }, 2000);
  });
});

careerDiv.forEach((element) => {
  let dragInput = element.querySelector(".dragInput");
  let listDiv = element.querySelector(".listDiv");
  let resumeDiv = element.querySelector(".resumeDiv");
  let dragFileHere = element.querySelector(".dragFileHere");
  let fileDiv = element.querySelector(".fileDiv");
  let forOpacity = element.querySelector(".forOpacity");

  dragInput.addEventListener("change", (e) => {
    e.preventDefault();
    listDiv.classList.add("nonDisplay");
    resumeDiv.classList.remove("nonDisplay");

    let fileName = dragInput.files[0].name;
    dragFileHere.innerHTML = fileName;

    fileDiv.style.border = "1px solid";
    forOpacity.style.opacity = "0";
    fileDiv.style.backgroundColor = "#48bfae";
    dragFileHere.style.color = "black";
  });

  let dragInputDiv = element.querySelector(".dragInputDiv");
  dragInputDiv.addEventListener("dragover", () => {
    forOpacity.style.opacity = "0.7";
    fileDiv.style.backgroundColor = "#48bfae";
    dragFileHere.style.color = "black";
  });
  dragInputDiv.addEventListener("dragleave", () => {
    forOpacity.style.opacity = "0";

    fileDiv.style.backgroundColor = "#131c1b";
    dragFileHere.style.color = "white";
  });

  dragInputDiv.addEventListener("drop", () => {
    forOpacity.style.opacity = "0";
    forOpacity.style.display = "none";
  });
});
