export function Header() {
    return `
<header class="header">

    <div class="container">

        <div class="header__wrapper">

            <a href="#" class="logo">
                <img src="/logo.png" alt="DISC Academy">
            </a>

            <nav class="nav">

                <ul class="nav__list">

                    <li><a href="#about">Giới thiệu</a></li>
                    <li><a href="#disc">DISC là gì</a></li>
                    <li><a href="#problem">Vấn đề</a></li>
                    <li><a href="#course">Khóa học</a></li>
                    <li><a href="#testimonials">Feedback</a></li>
                </ul>

            </nav>

            <a href="#register" class="btn btn--primary desktop-btn">
                Đăng ký ngay
            </a>

            <button class="menu-toggle">

                ☰

            </button>

        </div>

    </div>

    <div class="mobile-menu">

        <button class="mobile-menu__close">
            ✕
        </button>

        <ul>

            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#disc">DISC là gì</a></li>
            <li><a href="#problem">Vấn đề</a></li>
            <li><a href="#course">Khóa học</a></li>
            <li><a href="#testimonials">Feedback</a></li>
            <li><a href="#register">Đăng ký</a></li>

        </ul>

        <a href="#" class="btn btn-primary">

            Đăng ký ngay

        </a>

    </div>

    <div class="overlay"></div>

</header>
`;
}

export function initHeader() {

    const menuBtn = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");
    const closeBtn = document.querySelector(".mobile-menu__close");

    if (!menuBtn) return;

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    function closeMenu() {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    const mobileLinks = document.querySelectorAll(".mobile-menu ul a");

    mobileLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}