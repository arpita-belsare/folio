document.addEventListener('DOMContentLoaded', function() {
    const barElement = document.querySelector('.menu-bar');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    barElement.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    const body = document.body;

    // Check the user's preference and apply it
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    toggleButtons.forEach(toggleButton => {
        toggleButton.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            let theme = 'light';
            if (body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            // Save the preference in local storage
            localStorage.setItem('theme', theme);
        });
    });
});
