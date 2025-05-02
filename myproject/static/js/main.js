// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            
            // Save preference to localStorage
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Handle RTL specific adjustments
    const isRTL = document.documentElement.dir === 'rtl';
    if (isRTL) {
        // Add any RTL specific JavaScript logic here
        // For example, you might need to adjust certain elements for RTL layout
        const rtlElements = document.querySelectorAll('.rtl-flip');
        rtlElements.forEach(element => {
            element.style.transform = 'scaleX(-1)';
        });
    }
});

// Initialize Alpine.js dropdown components
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,
        toggle() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
        }
    }));
});