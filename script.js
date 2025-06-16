        const sidebar = document.getElementById('sidebar');
        const hamburgerBtn = document.getElementById('hamburger-btn'); // Ganti ID
        const sidebarBackdrop = document.getElementById('sidebar-backdrop');
        const sidebarLinks = sidebar.querySelectorAll('ul li a');

        function openSidebar() {
            sidebar.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            hamburgerBtn.setAttribute('data-tooltip', 'Close Sidebar'); // Tooltip untuk tombol hamburger
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            hamburgerBtn.setAttribute('data-tooltip', 'Open Sidebar'); // Tooltip untuk tombol hamburger
        }

        // Ketika tombol hamburger di navbar diklik, buka sidebar
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openSidebar();
        });

        // Ketika backdrop diklik, tutup sidebar
        sidebarBackdrop.addEventListener('click', () => {
            closeSidebar();
        });

        // Ketika salah satu link di sidebar diklik, tutup sidebar
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sidebar.classList.contains('active')) {
                    closeSidebar();
                }
            });
        });
