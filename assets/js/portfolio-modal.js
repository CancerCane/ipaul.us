// Portfolio Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal container if it doesn't exist
    if (!document.getElementById('portfolioModal')) {
        const modalHTML = `
            <div id="portfolioModal" class="portfolio-modal">
                <div class="portfolio-modal-content">
                    <span class="close-portfolio-modal">&times;</span>
                    <div class="portfolio-modal-body">
                        <!-- Content will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('portfolioModal');
    const modalBody = document.querySelector('.portfolio-modal-body');
    const closeBtn = document.querySelector('.close-portfolio-modal');

    // Project data
    const projectData = {
        'veteran-alliance': {
            title: 'Veteran Business Alliance',
            category: 'Branding & Web Design',
            images: [
                '/assets/img/dilogo.png',
                '/assets/img/logoIPM-5.png'
            ],
            description: 'Complete brand identity and web presence for veteran entrepreneurs alliance.',
            details: {
                'Challenge': 'Create a unified brand identity for veteran entrepreneurs that conveys professionalism, trust, and military heritage.',
                'Solution': 'Developed comprehensive branding including logo design, brand guidelines, and a fully responsive website with member portal functionality.',
                'Services Provided': [
                    'Logo design and brand identity',
                    'Brand guidelines documentation',
                    'Responsive website design',
                    'Web hosting setup and configuration',
                    'Member portal development'
                ],
                'Technologies': 'WordPress, Custom PHP, MySQL, Responsive Design',
                'Results': [
                    '150% increase in member engagement within 3 months',
                    'Unified brand presence across all touchpoints',
                    'Streamlined member onboarding process',
                    'Improved visibility in veteran business community'
                ]
            }
        },
        'knight-shields': {
            title: 'Knight Shield Collection',
            category: 'Makers Studio - Engraving',
            images: [
                '/assets/img/knights01.png',
                '/assets/img/paul-logo-knght.png',
                '/assets/img/ipm-studio-logo-knght-red.png'
            ],
            description: 'Custom laser-engraved commemorative shields for military units and veterans.',
            details: {
                'Challenge': 'Design and produce high-quality commemorative pieces that honor military service while maintaining precision and durability.',
                'Process': 'Each shield is custom designed with unit insignias, carefully engraved using precision laser technology, and finished with protective coating.',
                'Materials & Techniques': [
                    'Premium metal substrates',
                    'Precision laser engraving',
                    'Custom design for each unit',
                    'Protective coating application',
                    'Individual packaging and presentation'
                ],
                'Product Range': [
                    'Unit commemorative shields',
                    'Individual service awards',
                    'Retirement presentations',
                    'Memorial pieces'
                ],
                'Impact': 'Over 200 units delivered to veterans nationwide, preserving military heritage and honoring service.'
            }
        },
        'artisan-market': {
            title: 'Dallas Artisan Market',
            category: 'E-commerce & Photography',
            images: [
                '/assets/img/bgblue01.jpg',
                '/assets/img/bg01.jpg'
            ],
            description: 'Complete online marketplace solution for local artisans, from product photography to payment processing.',
            details: {
                'Challenge': 'Local artisans needed a professional online presence to reach customers beyond traditional craft fairs, especially during pandemic restrictions.',
                'Solution': 'Created a comprehensive e-commerce platform with professional product photography, individual vendor stores, and integrated payment processing.',
                'Services Provided': [
                    'Professional product photography',
                    'E-commerce website development',
                    'Individual vendor storefronts',
                    'Payment gateway integration',
                    'Inventory management system',
                    'SEO optimization',
                    'Social media integration'
                ],
                'Technologies': 'WooCommerce, WordPress, Stripe API, Custom PHP, Professional Photography',
                'Results': [
                    '$50K in sales within first quarter of launch',
                    '45 local artisans onboarded',
                    '300% increase in customer reach',
                    'Featured in local business journal',
                    'Sustained growth throughout pandemic'
                ]
            }
        }
    };

    // Function to open modal with project data
    function openProjectModal(projectId) {
        const project = projectData[projectId];
        if (!project) return;

        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            imagesHTML = '<div class="modal-image-gallery">';
            project.images.forEach(img => {
                imagesHTML += `<img src="${img}" alt="${project.title}" class="modal-gallery-image">`;
            });
            imagesHTML += '</div>';
        }

        let detailsHTML = '';
        if (project.details) {
            detailsHTML = '<div class="modal-project-details">';
            for (const [key, value] of Object.entries(project.details)) {
                if (Array.isArray(value)) {
                    detailsHTML += `<h4>${key}:</h4><ul>`;
                    value.forEach(item => {
                        detailsHTML += `<li>${item}</li>`;
                    });
                    detailsHTML += '</ul>';
                } else {
                    detailsHTML += `<h4>${key}:</h4><p>${value}</p>`;
                }
            }
            detailsHTML += '</div>';
        }

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p class="modal-category">${project.category}</p>
            ${imagesHTML}
            <div class="modal-description">
                <p>${project.description}</p>
                ${detailsHTML}
            </div>
        `;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Event listeners for modal triggers
    document.addEventListener('click', function(e) {
        // Handle clicks on elements with data-project attribute
        if (e.target.matches('[data-project]')) {
            e.preventDefault();
            const projectId = e.target.getAttribute('data-project');
            openProjectModal(projectId);
        }

        // Handle clicks on parent elements containing data-project
        const projectElement = e.target.closest('[data-project]');
        if (projectElement) {
            e.preventDefault();
            const projectId = projectElement.getAttribute('data-project');
            openProjectModal(projectId);
        }
    });

    // Close modal functionality
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Service modal function for services page
    window.openServiceModal = function(title, content) {
        modalBody.innerHTML = `
            <h2>${title}</h2>
            <div class="service-modal-content">
                ${content}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});
