const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");
const hamburgerSidebar = document.getElementById("hamburger-sidebar");
const mainDiv = document.querySelector("main section div");

hamburgerOpen.addEventListener("click", () => {
  hamburgerSidebar.classList.toggle("hidden");
  hamburgerOpen.classList.toggle("hidden");
  hamburgerClose.classList.toggle("hidden");
  document.body.classList.toggle("bg-neutral-700");
  mainDiv.classList.add("brightness-50");
  mainDiv.classList.remove("brightness-100");
});

hamburgerClose.addEventListener("click", () => {
  hamburgerSidebar.classList.toggle("hidden");
  hamburgerOpen.classList.toggle("hidden");
  hamburgerClose.classList.toggle("hidden");
  document.body.classList.toggle("bg-neutral-700");
  mainDiv.classList.add("brightness-100");
  mainDiv.classList.remove("brightness-50");
});

const featureDesktopDiv = document.getElementById("features-desktop");
const featuresDesktopImages = document.querySelectorAll(
  "#features-desktop img"
);
const featureDropDownList = document.getElementById("feature-dropdown");

function toggleChevronAndDropdownList(div, images, list) {
  div.addEventListener("click", () => {
    list.classList.toggle("hidden");
    images.forEach((img) => {
      img.classList.toggle("hidden");
    });
  });
}

// featureDesktopDiv.addEventListener("click", () => {
//   featureDropDownList.classList.toggle("hidden");
//   featuresDesktopImages.forEach((img) => {
//     img.classList.toggle("hidden");
//   });
// });
toggleChevronAndDropdownList(
  featureDesktopDiv,
  featuresDesktopImages,
  featureDropDownList
);

const featureMobileDiv = document.getElementById("features-mobile");
const featuresMobileImages = document.querySelectorAll("#features-mobile img");
const featureDropDownListMobile = document.getElementById(
  "feature-dropdown-mobile"
);

toggleChevronAndDropdownList(
  featureMobileDiv,
  featuresMobileImages,
  featureDropDownListMobile
);

// featureDesktopDiv.addEventListener("click", () => {
//   featureDropDownList.classList.toggle("hidden");
//   featuresDesktopImages.forEach((img) => {
//     img.classList.toggle("hidden");
//   });
// });

const companyDesktopDiv = document.getElementById("company-desktop");
const companyDesktopImages = document.querySelectorAll("#company-desktop img");
const companyDropDownList = document.getElementById("company-dropdown");

// companyDesktopDiv.addEventListener("click", () => {
//   companyDropDownList.classList.toggle("hidden");
//   companyDesktopImages.forEach((img) => {
//     img.classList.toggle("hidden");
//   });
// });

toggleChevronAndDropdownList(
  companyDesktopDiv,
  companyDesktopImages,
  companyDropDownList
);

const companyMobileDiv = document.getElementById("company-mobile");
const companyMobileImages = document.querySelectorAll("#company-mobile img");
const companyDropDownListMobile = document.getElementById(
  "company-dropdown-mobile"
);

toggleChevronAndDropdownList(
  companyMobileDiv,
  companyMobileImages,
  companyDropDownListMobile
);
