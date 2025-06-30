// Configuration - Easy to edit
const config = {
  profile: {
    name: "I'm Clara",
    bio: "jangan lupa makan biar ada eeknya:v"
  },
  
  slides: [
    "https://i.top4top.io/p_34681xvzu2.jpg",
    "https://h.top4top.io/p_34687ah5d1.jpg"
  ],
  /*
        ••JANGAN HAPUS INI••
SCRIPT BY © VYNAA VALERIE 
•• recode kasih credits 
•• contacts: (6282389924037)
•• instagram: @vynaa_valerie 
•• (github.com/VynaaValerie) 

• Menerima pembuatan script bot
• Menerima perbaikan script atau fitur bot
• Menerima pembuatan fitur bot
• Menerima semua kebutuhan bot
• Menerima pembuatan biolink premium 

ℹ️ Information

• Pembayaran bisa dicicil
• Bisa bayar di awal atau akhir
• Pembayaran melalu QRIS Only
• Testimoni Banyak

Aturan:
1. Dilarang memperjualbelikan script ini.
2. Hak cipta milik Vynaa Valerie.

“Dan janganlah kamu makan harta di antara kamu dengan jalan yang batil, dan janganlah kamu membunuh dirimu sendiri. Sesungguhnya Allah adalah Maha Penyayang kepadamu.” (QS. Al-Baqarah: 188)
*/
  buttons: [
    {
      icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png",
      text: "WhatsApp",
      actionText: "Order",
      link: "https://wa.me"
    },
    {
      icon: "https://img.icons8.com/color/48/000000/youtube-play.png",
      text: "YouTube",
      actionText: "PLAY",
      link: "https://youtube.com"
    },
    {
      icon: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
      text: "Instagram",
      actionText: "PLAY",
      link: "https://instagram.com"
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/000000/tiktok.png",
      text: "TikTok",
      actionText: "PLAY",
      link: "https://tiktok.com"
    }
  ],
  
  socialLinks: [
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-instagram", link: "#" },
    { icon: "fab fa-youtube", link: "#" }
  ]
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Set profile info
  document.getElementById('profile-name').textContent = config.profile.name;
  document.getElementById('profile-bio').textContent = config.profile.bio;
  
  // Create slides
  const slideBox = document.getElementById('slideBox');
  const indicators = document.getElementById('indicators');
  
  config.slides.forEach((slide, index) => {
    // Add slide image
    const img = document.createElement('img');
    img.src = slide;
    img.alt = `Slide ${index + 1}`;
    slideBox.appendChild(img);
    
    // Add indicator
    const indicator = document.createElement('div');
    indicator.className = 'indicator' + (index === 0 ? ' active' : '');
    indicator.onclick = () => goToSlide(index);
    indicators.appendChild(indicator);
  });
  
  // Create buttons
  const buttonGroup = document.getElementById('button-group');
  
  config.buttons.forEach(button => {
    const btn = document.createElement('a');
    btn.className = 'btn';
    btn.href = button.link;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.innerHTML = `
      <span><img src="${button.icon}" alt="${button.text}"/> ${button.text}</span>
      <span>${button.actionText}</span>
    `;
    buttonGroup.appendChild(btn);
  });
  
  // Create social links
  const socialLinks = document.getElementById('social-links');
  
  config.socialLinks.forEach(social => {
    const link = document.createElement('a');
    link.href = social.link;
    link.innerHTML = `<i class="${social.icon}"></i>`;
    link.setAttribute('aria-label', social.icon.split('fa-')[1]);
    socialLinks.appendChild(link);
  });
  
  // Initialize slider functionality
  initSlider();
});

// Slider functionality
let index = 0;
let slideInterval;

function initSlider() {
  const slideBox = document.getElementById('slideBox');
  const slides = slideBox.children;
  const totalSlides = slides.length;
  const indicators = document.getElementById('indicators').children;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const sliderContainer = document.getElementById('sliderContainer');
  
  function showSlide(idx) {
    index = (idx + totalSlides) % totalSlides;
    slideBox.style.transform = `translateX(-${index * 100}%)`;
    
    // Update indicators
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.toggle('active', i === index);
    }
  }
  
  function nextSlide() {
    showSlide(index + 1);
  }
  
  function prevSlide() {
    showSlide(index - 1);
  }
  
  function goToSlide(idx) {
    showSlide(idx);
  }
  
  // Button events
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Auto slide
  function startSlideInterval() {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }
  
  startSlideInterval();
  
  // Pause on hover
  sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  sliderContainer.addEventListener('mouseleave', startSlideInterval);
  
  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});
  
  sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide();
    }
  }
  
  // Set initial slider height
  function setSliderHeight() {
    const firstImage = slides[0];
    if (firstImage.complete) {
      sliderContainer.style.height = firstImage.offsetHeight + 'px';
    } else {
      firstImage.onload = function() {
        sliderContainer.style.height = this.offsetHeight + 'px';
      };
    }
  }
  
  setSliderHeight();
  
  // Responsive height adjustment
  window.addEventListener('resize', setSliderHeight);
}
