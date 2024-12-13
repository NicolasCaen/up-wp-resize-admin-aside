(function() {
    function injectStyles() {
        const styles = `
            .interface-interface-skeleton__sidebar {
                position: relative !important;
                min-width: 280px !important;
                max-width: 900px !important;
            }

            .interface-complementary-area,
            .interface-complementary-area__fill {
                min-width: 280px !important;
                max-width: 900px !important;
                width: 100% !important;
            }

            .sidebar-resizer {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 6px;
                cursor: col-resize;
                background: transparent;
                z-index: 1000;
            }

            .sidebar-resizer:hover {
                background: rgba(0,0,0,0.1);
            }

            .is-resizing .interface-complementary-area,
            .is-resizing .interface-complementary-area__fill {
                transition: none !important;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    function initResizer() {
        const sidebar = document.querySelector('.interface-interface-skeleton__sidebar');
        if (!sidebar) return;

        const complementaryArea = document.querySelector('.interface-complementary-area');
        const complementaryAreaFill = document.querySelector('.interface-complementary-area__fill');

        const resizer = document.createElement('div');
        resizer.className = 'sidebar-resizer';
        sidebar.prepend(resizer);

        let isResizing = false;
        let startX, startWidth;

        resizer.addEventListener('mousedown', function(e) {
            isResizing = true;
            startX = e.pageX;
            startWidth = sidebar.offsetWidth;
            document.body.classList.add('is-resizing');
        });

        document.addEventListener('mousemove', function(e) {
            if (!isResizing) return;

            const width = startWidth - (e.pageX - startX);
            
            if (width >= 280 && width <= 900) {
                requestAnimationFrame(() => {
                    sidebar.style.width = `${width}px`;
                    if (complementaryArea) {
                        complementaryArea.style.width = `${width}px`;
                    }
                    if (complementaryAreaFill) {
                        complementaryAreaFill.style.width = `${width}px`;
                    }
                });
            }
        });

        document.addEventListener('mouseup', function() {
            if (isResizing) {
                isResizing = false;
                document.body.classList.remove('is-resizing');
            }
        });
    }

    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectStyles();
            initResizer();
        });
    } else {
        injectStyles();
        initResizer();
    }

    // Réinitialiser en cas de changement dynamique du DOM
    const observer = new MutationObserver(function(mutations) {
        if (!document.querySelector('.sidebar-resizer')) {
            initResizer();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();