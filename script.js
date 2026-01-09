

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  document.body.style.overflow = menu.classList.contains("open")
    ? "hidden"
    : "auto";
}

function slideServices(direction) {
  const container = document.querySelector('.services-container');
  const cardWidth = document.querySelector('.service-card').offsetWidth + 24; // card + gap
  container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}


const skillCircles = document.querySelectorAll('.skill-circle');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const circle = entry.target.querySelector('.progress');
      const percent = entry.target.dataset.percent;
      circle.style.strokeDasharray = `${percent * 1.57} 157`;
    }
  });
}, {
  threshold: 0.5,
});

skillCircles.forEach((circle) => {
  observer.observe(circle);
});


document.getElementById('view-more-experience').addEventListener('click', function() {
  var moreExperience = document.querySelector('.more-experience');
  if (moreExperience.style.display === 'none') {
    moreExperience.style.display = 'grid';
    this.textContent = 'View Less';
  } else {
    moreExperience.style.display = 'none';
    this.textContent = 'View More';
  }
});

// const btn = document.querySelector('.view-more-btn');
// const container = document.querySelector('.certification-container');

// btn.addEventListener('click', () => {
//   container.classList.toggle('show-more');
//   btn.textContent = container.classList.contains('show-more') ? 'View Less': 'View More';
// });

document.getElementById('view-more-certification').addEventListener('click', function() {
  var moreCertification = document.querySelector('.more-certification');
  if (moreCertification.style.display === 'none') {
    moreCertification.style.display = 'grid';
    this.textContent = 'View Less';
  } else {
    moreCertification.style.display = 'none';
    this.textContent = 'View More';
  }
});