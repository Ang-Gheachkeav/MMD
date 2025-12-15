// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            const span = faq.querySelector('.faq-question span');
            if (span) {
                span.textContent = '+';
            }
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            item.classList.add('active');
            const span = question.querySelector('span');
            if (span) {
                span.textContent = '−';
            }
        }
    });
});

// Smooth scrolling for internal hash links (if any)
document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        link.addEventListener('click', function (e) {
            const targetSection = document.querySelector(href);
            if (targetSection) {
                e.preventDefault();
                window.scrollTo({
                    top: targetSection.offsetTop - 150,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Language selector functionality
const languageSelect = document.querySelector('.language-selector select');
if (languageSelect) {
    languageSelect.addEventListener('change', function () {
        if (this.value === 'km') {
            alert('Switching to Khmer language. In a production site this would load the Khmer version.');
            // Real implementation: redirect or reload with Khmer content.
        } else if (this.value === 'en') {
            // Keep English, no action needed in this static demo.
        }
    });
}

// Back to Top Button logic
const backToTopBtn = document.getElementById("backToTop");

// Show or hide button on scroll
window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 250) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Click -> Smooth scroll to top
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
