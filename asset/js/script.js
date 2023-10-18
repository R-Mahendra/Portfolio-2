// ========================================================= NAVBAR START ==================================================================================== //
var navbarToggler = document.querySelector(".navbar-toggler");
var navbar = document.getElementById("zxNavlist");
var navbarLinks = navbar.querySelectorAll(".nav-link:not(.tmbol-list-menu)");
var dropdownItems = navbar.querySelectorAll(".dropdown-item");

navbarToggler.addEventListener("click", function () {
  // Jika kelas 'show' sudah ada pada elemen navbar, maka hilangkan kelas tersebut
  // Jika tidak, tambahkan kelas 'show' pada elemen navbar
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
  }
});

navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Jika link yang diklik bukan merupakan tmbol-list-menu, hilangkan kelas 'show' dari elemen navbar
    if (!this.classList.contains("tmbol-list-menu")) {
      navbar.classList.remove("show");
    }
  });
});

dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Hilangkan kelas 'show' dari elemen navbar ketika item dropdown di dalamnya diklik
    navbar.classList.remove("show");
  });
});

document.addEventListener("click", function (event) {
  var target = event.target;
  // Jika target klik berada di luar navbar-nav dan bukan navbar-toggler, hilangkan kelas 'show' dari elemen navbar
  if (!target.closest(".navbar-nav") && target !== navbarToggler) {
    navbar.classList.remove("show");
  }
});

// ========================================================= NAVBAR END ==================================================================================== //

//=================================================FUNGSI UNTUK Tampilkan tombol "Back to Top" dengan penundaan=================================================
// Event listener untuk mendeteksi saat terjadi scroll
window.addEventListener("scroll", function () {
  scrollFunction();
});

// Function untuk mengatur tampilan tombol back-to-top
function scrollFunction() {
  // Mengambil referensi elemen tombol back-to-top
  var backToTopButton = document.getElementById("Back-to-top");

  // Mengambil tinggi jendela viewport
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Mengambil posisi scroll saat ini
  var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

  // Pengecekan untuk menampilkan atau menyembunyikan tombol back-to-top
  if (scrollPosition > windowHeight / 1.5) {
    // Jika posisi scroll melebihi setengah tinggi jendela viewport, tampilkan tombol
    backToTopButton.classList.remove("d-none");
  } else {
    // Jika posisi scroll kurang dari setengah tinggi jendela viewport, sembunyikan tombol
    backToTopButton.classList.add("d-none");
  }
}

// Function untuk melakukan scroll ke atas saat tombol back-to-top diklik
function ScrollKeatas() {
  // Scroll ke atas pada elemen body (untuk Safari)
  document.body.scrollTop = 0;

  // Scroll ke atas pada elemen html (untuk Chrome, Firefox, IE, dan Opera)
  document.documentElement.scrollTop = 0;
}

// Panggil fungsi scrollFunction saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  scrollFunction();
});

// Panggil fungsi scrollFunction saat terjadi acara scroll
window.addEventListener("scroll", function () {
  scrollFunction();
});

//===================================================================================================================================================//


//===================================== ANIMASI NGETIK NAMA ============================//

const typed = new Typed(".text", {
  strings: ["Reza Mahendra"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
  startDelay: 100,
  loop: true,
});
// =======================================================================================//

// ============================================================================================================================================//
// Fungsi Ketika tulisan panjang akan di sembunyikan setengah tulisan dan ketika di klik readmore akan tampil semua tulisan
// Ambil elemen tombol dan teks
const readMoreBtn = document.getElementById("readMoreBtn");
const readLessBtn = document.getElementById("readLessBtn");
const shortText = document.getElementById("shortText");
const fullText = document.getElementById("fullText");

// Tambahkan event listener untuk tombol "Baca Selengkapnya"
readMoreBtn.addEventListener("click", function () {
  // Sembunyikan tombol "Baca Selengkapnya"
  readMoreBtn.style.display = "none";
  // Tampilkan teks lengkap
  fullText.classList.remove("d-none");
  // Tampilkan tombol "Baca Lebih Sedikit"
  readLessBtn.style.display = "flex";

  // Scroll ke bawah sejauh 500 piksel
  window.scrollBy(0, 550);
});
// Tambahkan event listener untuk tombol "Baca Lebih Sedikit"
readLessBtn.addEventListener("click", function () {
  // Sembunyikan tombol "Baca Lebih Sedikit"
  readLessBtn.style.display = "none";
  // Sembunyikan teks lengkap
  fullText.classList.add("d-none");

  // Tampilkan tombol "Baca Selengkapnya"
  readMoreBtn.style.display = "flex";

  // Gerakkan scroll ke atas ke elemen dengan ID "Aboutme"
  const aboutMeSection = document.getElementById("Aboutme");
  aboutMeSection.scrollIntoView({
    behavior: "smooth", // Efek animasi scroll
  });
});

// ============================================================================================================================================= //


//================================= SCROLL REVEAL START =================================== //
ScrollReveal({
  reset: true,
  delay: 200,
  duration: 2000,
  distance: "80px",
});
ScrollReveal().reveal(".navbar-brand", { origin: "left", reset: false });

ScrollReveal().reveal(".nav1-home", { origin: "bottom", reset: false, mobile: false });
ScrollReveal().reveal(".nav2-aboutme", { origin: "bottom", reset: false, delay: 300, mobile: false });
ScrollReveal().reveal(".nav3-experience", { origin: "bottom", reset: false, delay: 400, mobile: false });
ScrollReveal().reveal(".nav4-galery", { origin: "bottom", reset: false, delay: 500, mobile: false });
ScrollReveal().reveal(".nav5-other", { origin: "bottom", reset: false, delay: 600, mobile: false });

ScrollReveal().reveal("#Home .conten", { origin: "top", reset: false });
ScrollReveal().reveal("#Home .profile1", { origin: "bottom", reset: false });
ScrollReveal().reveal("#Home .parag", { origin: "right", delay: 600, reset: false });
ScrollReveal().reveal("#Home h2", { origin: "left", delay: 500, reset: false });

ScrollReveal().reveal("#Aboutme h1", { origin: "top" });
ScrollReveal().reveal("#Aboutme .about-text", { origin: "bottom" });
ScrollReveal().reveal("#Aboutme .profile2", { origin: "left" });

ScrollReveal().reveal("#Skill h1", { origin: "top" });
ScrollReveal().reveal("#Skill .pgrs", { origin: "left" });
ScrollReveal().reveal("#Skill .Educationss h1,#Skill .Educationss", { origin: "bottom" });
ScrollReveal().reveal("#Skill .Experiancess", { origin: "top" });

ScrollReveal().reveal("#Contact h1", { origin: "top" });
ScrollReveal().reveal("#Contact form", { origin: "bottom" });

ScrollReveal().reveal(".text-paralax", { origin: "bottom" });

//================================= SCROLL REVEALEND =================================== //

//================================= AOS START =================================== //
AOS.init({
  duration: 700,
  anchorPlacement: "bottom-bottom",
});

//================================= AOS END =================================== //

//================================= START CAROUSEL SKILL =================================== //
let elements = document.getElementsByClassName("inner");
let animatedElements = [];

function startCountAnimation(element) {
  let numberElement = element.querySelector("#number");
  let dataNum = parseInt(numberElement.getAttribute("data-num"));
  let hitung = 0;
  let intervalId;

  function count() {
    if (hitung === dataNum) {
      clearInterval(intervalId);
    } else {
      hitung += 1;
      numberElement.innerHTML = hitung + "%";
    }
  }

  intervalId = setInterval(count, 35);
}

function resetCount(element) {
  let numberElement = element.querySelector("#number");
  numberElement.innerHTML = "0%";
}

function handleSlideReset() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (animatedElements.includes(element)) {
      clearInterval(element.intervalId); // Hentikan animasi yang sedang berjalan
      resetCount(element);
      startCountAnimation(element); // Mulai animasi dari awal
    }
  }
}

// Reset perhitungan saat terjadi slide pada carousel
let carousel = document.getElementById("carouselExampleInterval");
carousel.addEventListener("slide.bs.carousel", handleSlideReset);

// Memeriksa animasi saat halaman pertama kali dimuat
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  startCountAnimation(element);
  animatedElements.push(element);
}

//================================= END CAROUSEL SKILL =================================== //
