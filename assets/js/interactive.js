// ============================================
// Interactive Features
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    initializeTooltips();
    
    // Initialize image zoom
    initializeImageZoom();
    
    // Initialize code copy buttons
    initializeCodeCopy();
    
    // Initialize search functionality
    initializeSearch();
});

function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => tooltip.classList.add('active'), 10);
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function initializeImageZoom() {
    const images = document.querySelectorAll('.zoomable-image');
    
    images.forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="image-modal-content">
                    <span class="image-modal-close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            document.body.appendChild(modal);
            
            setTimeout(() => modal.classList.add('active'), 10);
            
            modal.querySelector('.image-modal-close').addEventListener('click', () => {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    setTimeout(() => modal.remove(), 300);
                }
            });
        });
    });
}

function initializeCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'code-copy-btn';
        button.innerHTML = '<i class="fas fa-copy"></i>';
        button.setAttribute('title', 'Copy code');
        
        block.style.position = 'relative';
        block.appendChild(button);
        
        button.addEventListener('click', function() {
            const code = block.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i>';
                }, 2000);
            });
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            hideSearchResults();
            return;
        }
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 300);
    });
}

function performSearch(query) {
    // This would typically search through content
    // For now, just a placeholder
    console.log('Searching for:', query);
}

function hideSearchResults() {
    const results = document.getElementById('search-results');
    if (results) {
        results.style.display = 'none';
    }
}

// Add CSS for tooltips and modals dynamically
const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        background: var(--bg-tertiary);
        color: var(--text-primary);
        padding: 0.5rem 0.75rem;
        border-radius: var(--radius-md);
        font-size: 0.875rem;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.2s;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .tooltip.active {
        opacity: 1;
    }
    
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .image-modal.active {
        opacity: 1;
    }
    
    .image-modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .image-modal-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
    }
    
    .image-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        transition: background 0.2s;
    }
    
    .image-modal-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .code-copy-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: var(--bg-tertiary);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text-primary);
        padding: 0.5rem;
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .code-copy-btn:hover {
        background: var(--primary);
        border-color: var(--primary);
    }
    
    .zoomable-image {
        cursor: zoom-in;
        transition: transform 0.2s;
    }
    
    .zoomable-image:hover {
        transform: scale(1.02);
    }
`;
document.head.appendChild(style);
