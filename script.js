// Reveal Animation on Scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Trigger on load
reveal();

// Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun', 'text-yellow-400');
        icon.classList.add('fa-moon', 'text-slate-700');
    } else {
        icon.classList.remove('fa-moon', 'text-slate-700');
        icon.classList.add('fa-sun', 'text-yellow-400');
    }
}

// Mobile Menu Toggle
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Load More Projects Logic
document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Select all hidden projects
            const hiddenProjects = document.querySelectorAll('.hidden-project');
            
            // Reveal them
            hiddenProjects.forEach(project => {
                project.classList.remove('hidden');
                // Optional: visual effect to show they are new
                project.classList.add('animate-fade-in'); 
            });
            
            // Hide the button itself
            this.style.display = 'none';
        });
    }
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skill Tree Growth Animation on Scroll (Generic for all containers)
document.addEventListener('DOMContentLoaded', () => {
    const skillContainers = document.querySelectorAll('.skill-tree-container');
    
    if (skillContainers.length > 0) {
        const treeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'tree-grown' class to trigger the CSS animation
                    entry.target.classList.add('tree-grown');
                    // Stop observing this specific container once triggered
                    treeObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2 // Trigger when 20% of the section is visible
        });
        
        skillContainers.forEach(container => {
            treeObserver.observe(container);
        });
    }
});

// Custom Premium Interactions
document.addEventListener('DOMContentLoaded', () => {
    // 3. Smooth Page Transitions
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    const transitionLinks = document.querySelectorAll('a[href]');

    transitionLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Filter: internal links only, no anchor/mail/tel
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !link.target) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = href;
                
                if (transitionOverlay) {
                    transitionOverlay.classList.add('active');
                    setTimeout(() => {
                        window.location.href = target;
                    }, 600);
                } else {
                    window.location.href = target;
                }
            });
        }
    });

    // Handle back button transition state
    window.addEventListener('pageshow', (event) => {
        if (event.persisted && transitionOverlay) {
            transitionOverlay.classList.remove('active');
        }
    });
});
