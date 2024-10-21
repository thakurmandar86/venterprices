function sendEnquiry(productName) {
    const msg = `Hello, I am interested in ${productName}. Could you provide more details?`;
    window.location.href = `mailto:example@company.com?subject=Enquiry for ${productName}&body=${encodeURIComponent(msg)}`;
}

// Navbar setting
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
// Navbar setting

// Product Slider Functionality 

    const slider = document.querySelector('.product-slider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    // Set the width of each slide based on its width (30% of the container)
    const productWidth = slider.querySelector('.product').offsetWidth + 20; // 20px is the gap

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: productWidth * 3, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -productWidth * 3, behavior: 'smooth' });
    });

// Product Slider Functionality 


