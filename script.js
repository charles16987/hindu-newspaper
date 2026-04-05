// Initialize Lucide Icons
lucide.createIcons();

// Current Year for Footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// FAQ Data
const faqs = [
    { q: "Is it free?", a: "Yes, completely free. We share the PDF for educational purposes." },
    { q: "Is login required?", a: "No signup or login needed. Just join the Telegram channel." },
    { q: "Is it daily updated?", a: "Yes, we update the channel every single morning." },
    { q: "Which editions are available?", a: "We primarily share the Chennai and Delhi editions, but other major editions are often included." },
    { q: "How to download the PDF?", a: "Click the 'Join Telegram' button, open the channel, and click on the latest PDF file shared." },
    { q: "Is it safe?", a: "Yes, our channel is a trusted source used by thousands of aspirants." },
    { q: "Can I read it on mobile?", a: "Absolutely! The PDFs are mobile-optimized for easy reading on any device." },
    { q: "What time is it updated?", a: "Usually between 6:00 AM and 7:30 AM IST." },
    { q: "Are there other newspapers?", a: "Our primary focus is The Hindu, but we occasionally share other relevant study materials." },
    { q: "Is there any limit on downloads?", a: "No, you can download as many past issues as you need from the channel history." },
    { q: "Do you have a website?", a: "This landing page is our primary web presence for promoting the Telegram channel." },
    { q: "Is this official?", a: "No, we are an independent community sharing resources for UPSC and competitive exam aspirants." },
    { q: "How can I support you?", a: "Just share the channel link with your friends and fellow aspirants!" },
    { q: "What if the link doesn't work?", a: "Try opening it in a different browser or search for the channel name directly in Telegram." },
    { q: "Is it available in Hindi?", a: "This channel shares the English edition. We may launch a Hindi version soon." },
    { q: "Can I request a specific date?", a: "You can search the channel history for any specific date's newspaper." },
    { q: "Is it high quality?", a: "Yes, we share high-resolution e-paper PDFs." },
    { q: "Does it include supplements?", a: "Yes, we try to include all major supplements like Science & Tech, Magazine, etc." },
    { q: "Is it useful for UPSC?", a: "It is one of the most recommended resources for UPSC Civil Services preparation." },
    { q: "How do I leave the channel?", a: "You can leave the channel anytime through the Telegram app settings." }
];

// Render FAQs
const faqContainer = document.getElementById('faq-container');
faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item bg-white rounded-xl border border-gray-200 overflow-hidden';
    faqItem.innerHTML = `
        <button class="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none">
            <span class="font-bold text-gray-800">${faq.q}</span>
            <i data-lucide="chevron-down" class="chevron text-gray-400 w-5 h-5"></i>
        </button>
        <div class="faq-answer px-5 text-gray-600 leading-relaxed border-t border-gray-50">
            <div class="py-4">${faq.a}</div>
        </div>
    `;
    
    faqItem.querySelector('button').addEventListener('click', () => {
        const isOpen = faqItem.classList.contains('open');
        // Close all other FAQs (optional, but cleaner)
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
        if (!isOpen) {
            faqItem.classList.add('open');
        }
    });
    
    faqContainer.appendChild(faqItem);
});

// Re-initialize icons for dynamic content
lucide.createIcons();

// Sticky CTA Visibility on Scroll
const stickyCta = document.getElementById('sticky-cta');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        stickyCta.classList.add('sticky-visible');
    } else {
        stickyCta.classList.remove('sticky-visible');
    }
});
