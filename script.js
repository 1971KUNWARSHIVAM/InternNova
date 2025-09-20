// Jab poora page load ho jaye, tab yeh code chalega
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger aur menu ko pakad liya, taaki unse interaction kar sakein
    const hamburgerButton = document.getElementById('hamburger-button');
    const slideInMenu = document.getElementById('slide-in-menu');

    // Hamburger button par click hone par event listener
    hamburgerButton.addEventListener('click', () => {
        // 'open' class ko add/remove karo, jisse animation trigger ho
        hamburgerButton.classList.toggle('open');
        slideInMenu.classList.toggle('open');
    });
});
