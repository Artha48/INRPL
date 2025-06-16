        const sidebar = document.getElementById('sidebar');
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const sidebarBackdrop = document.getElementById('sidebar-backdrop');
        const sidebarLinks = sidebar.querySelectorAll('ul li a');

        function openSidebar() {
            sidebar.classList.add('active');
            hamburgerBtn.setAttribute('aria-expanded', 'true');
            // Menambahkan class ke body untuk mencegah scrolling saat sidebar terbuka
            document.body.style.overflow = 'hidden';
        }

        function closeSidebar() {
            sidebar.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
            // Mengembalikan scrolling ke body
            document.body.style.overflow = '';
        }

        // Ketika tombol hamburger di navbar diklik, buka sidebar
        hamburgerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Hanya buka sidebar jika saat ini belum aktif
            if (!sidebar.classList.contains('active')) {
                openSidebar();
            }
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

        // ==============================================
        // LOGIKA RESPONSIVE DENGAN JAVASCRIPT
        // Menangani perilaku sidebar saat resize/load
        // ==============================================

        const mediaQuery = window.matchMedia('(min-width: 992px)'); // Sesuaikan dengan breakpoint di CSS Anda

        function handleMediaQueryChange(e) {
            if (e.matches) {
                // Tampilan Desktop ( >= 992px )
                // Pastikan sidebar terlihat dan backdrop tersembunyi
                sidebar.classList.remove('active'); // Pastikan off-canvas tidak aktif
                sidebar.style.left = '0'; // Pastikan CSS statis diterapkan
                sidebarBackdrop.style.display = 'none'; // Sembunyikan backdrop
                document.body.style.overflow = ''; // Aktifkan scrolling body

                // Sembunyikan tombol hamburger di desktop
                hamburgerBtn.style.display = 'none';
            } else {
                // Tampilan Mobile ( < 992px )
                // Pastikan sidebar tersembunyi dan tombol hamburger terlihat
                sidebar.style.left = '-250px'; // Set sidebar ke posisi off-canvas
                sidebar.classList.remove('active'); // Pastikan tidak aktif di mobile
                sidebarBackdrop.style.display = 'none'; // Pastikan backdrop tersembunyi
                document.body.style.overflow = ''; // Aktifkan scrolling body

                // Tampilkan tombol hamburger di mobile
                hamburgerBtn.style.display = 'block';
            }
        }

        // Jalankan fungsi saat halaman dimuat pertama kali
        handleMediaQueryChange(mediaQuery);

        // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
        mediaQuery.addListener(handleMediaQueryChange);
