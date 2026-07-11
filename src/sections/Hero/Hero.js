export function Hero() {
    return `
        <section class="hero" id="about">

            <div class="container">

                <div class="hero__wrapper">

                    ${HeroContent()}

                    ${HeroMedia()}

                </div>

            </div>

        </section>
    `;
}

function HeroContent() {
    return `
        <div class="hero__content">

            <h1 class="hero__title">

                <span class="hero__title hero__title--red">
                    HIỂU MÌNH
                </span>

                <span class="hero__title hero__title--blue">
                    HIỂU NGƯỜI
                </span>

            </h1>

            <h2 class="hero__subtitle">
                Kết nối yêu thương
            </h2>

            <p class="hero__description">
                Khóa học DISC thực chiến 2 ngày giúp bạn bẻ lái ngôn từ, đọc vị bất kỳ ai trong 60 giây đầu tiên và bứt phá hiệu suất công việc.
            </p>

            <div class="hero__features">

                ${FeatureItem("red", "👁️", "Đọc vị người khác nhanh chóng")}

                ${FeatureItem("yellow", "⚡", "Kích hoạt thế mạnh bản thân⁠")}

                ${FeatureItem("blue", "💬", "Làm chủ giao tiếp & đàm phán⁠")}

                ${FeatureItem("green", "🤝", "Hóa giải xung đột trong các mối quan hệ")}

            </div>

            <div class="hero__actions">

                <a
                    href="#register"
                    class="btn btn--primary"
                >
                    ĐĂNG KÝ NGAY
                </a>

                <span class="hero__note">
                    
                </span>

            </div>

        </div>
    `;
}

function HeroMedia() {

    return `

        <div class="hero__media">

            <img
                class="hero__image"
                src="/hero.JPG"
                alt="DISC Academy"
            >

        </div>

    `;

}

function FeatureItem(color, icon, text) {

    return `

        <div class="hero-feature">

            <div class="hero-feature__icon hero-feature__icon--${color}">
                ${icon}
            </div>

            <span class="hero-feature__text">
                ${text}
            </span>

        </div>

    `;

}