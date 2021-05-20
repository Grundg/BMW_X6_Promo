document.addEventListener('DOMContentLoaded', () => {
    const 
            $menuElem = document.querySelector('.menu'),
            $humburgerBtn = document.querySelector('.humburger-menu'),
            toggleMenu = () => {
                $menuElem.classList.toggle('menu-active');
                $humburgerBtn.classList.toggle('humburger-menu-active')
            },
            closeMenu = () => {
                $menuElem.classList.remove('menu-active');
                $humburgerBtn.classList.remove('humburger-menu-active');
            };

    $humburgerBtn.addEventListener('click', toggleMenu);

    $menuElem.addEventListener('click', (event) => {
       const target = event.target;
       if (target.classList.contains('menu-list__link')) {
            closeMenu();
       }
    })
});