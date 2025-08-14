// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add event listeners for scrolling and mouseenter/mouseleave
window.addEventListener('scroll', hideNavbar);
navbar.addEventListener('mouseenter', showNavbar);
navbar.addEventListener('mouseleave', hideNavbar);

// Function to hide the navbar
function hideNavbar() {
    if (window.scrollY > 0) {
        navbar.classList.add('mask-custom');
    }
}

// Function to show the navbar
function showNavbar() {
    navbar.classList.remove('mask-custom');
}

// Layout will not be affected after remove below javascript code

// Handle Image Gallery
const galleryMask = document.querySelector(".gallery-mask");
const maskImage = document.querySelector(".mask-image");
const galleryImgs = document.querySelectorAll(".image-item");

galleryMask.addEventListener("click", () => {
	galleryMask.classList.add("mask-off");
});

galleryImgs.forEach((item) => {
	item.addEventListener("click", () => {
		let styleValue = item.getAttribute("style");
		maskImage.setAttribute(
			"src",
			styleValue.slice(styleValue.indexOf(": url(") + 7, -3)
		);
		galleryMask.classList.remove("mask-off");
	});
});

// Handle Publish Date
const dateData = document.getElementById("dateData");
const sinceData = document.getElementById("sinceData");
let publishDate = "2022-04-26";

dateData.innerHTML = moment(publishDate).format("LL");
sinceData.innerHTML = moment(publishDate).fromNow();

// Handle Back to Top
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		backToTop.classList.add("show");
	} else {
		backToTop.classList.remove("show");
	}
})

backToTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
})

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

