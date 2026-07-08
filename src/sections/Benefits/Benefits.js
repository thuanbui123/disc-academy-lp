export function Benefits() {

    const benefits = [
        {
            icon: "🎯",
            title: "Hiểu rõ bản thân\nvà khám phá\ntiềm năng"
        },
        {
            icon: "🤝",
            title: "Hiểu và giao tiếp\ntốt hơn với\nmỗi kiểu người"
        },
        {
            icon: "💚",
            title: "Xây dựng và cải thiện\ncác mối quan hệ\nchất lượng"
        },
        {
            icon: "💼",
            title: "Làm việc nhóm\nhiệu quả và phù hợp\nvới môi trường"
        },
        {
            icon: "📈",
            title: "Định hướng phát triển\nbản thân và sự\nnghiệp rõ ràng"
        },
        {
            icon: "📋",
            title: "Thực hành các tình\nhuống thực tế và\nứng dụng ngay"
        }
    ];

    return `
<section class="benefits">

    <div class="container">

        <div class="section-title">

            <h2>

                THAM GIA KHÓA HỌC, BẠN SẼ

                <span>NHẬN ĐƯỢC</span>

            </h2>

        </div>

        <div class="benefits__grid">

            ${benefits.map(item => `

                <div class="benefit-card">

                    <div class="benefit-card__icon">

                        ${item.icon}

                    </div>

                    <h3>

                        ${item.title.replace(/\n/g,"<br>")}

                    </h3>

                </div>

            `).join("")}

        </div>

    </div>

</section>
`;

}