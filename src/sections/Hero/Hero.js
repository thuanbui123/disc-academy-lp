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
                Giao tiếp hiệu quả cùng DISC
            </h2>

            <p class="hero__description">
                DISC Academy giúp bạn khám phá bản thân, thấu hiểu người khác
                và ứng dụng DISC để phát triển các mối quan hệ,
                công việc và cuộc sống tốt đẹp hơn.
            </p>

            <div class="hero__features">

                ${FeatureItem("red", "👤", "Hiểu bản thân")}

                ${FeatureItem("yellow", "💡", "Hiểu người khác")}

                ${FeatureItem("blue", "💬", "Giao tiếp hiệu quả")}

                ${FeatureItem("green", "🌱", "Phát triển bản thân")}

            </div>

            <div class="hero__actions">

                <a
                    href="#register"
                    class="btn btn--primary"
                >
                    ĐĂNG KÝ NGAY
                </a>

                <span class="hero__note">
                    Tham gia cộng đồng DISC ngay hôm nay!
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