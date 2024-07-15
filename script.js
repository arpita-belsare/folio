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