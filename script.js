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