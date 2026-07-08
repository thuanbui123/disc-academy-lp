export function Testimonials() {

    const reviews = [
        {
            avatar: "/images/avatar/avatar_1.JPG",
            name: "Nguyễn Minh Anh",
            job: "Sinh viên",
            review: "Khóa học DISC giúp mình hiểu rõ bản thân và cải thiện cách giao tiếp với mọi người."
        },
        {
            avatar: "/images/avatar/avatar_2.JPG",
            name: "Trần Hoàng Nam",
            job: "Nhân viên văn phòng",
            review: "Speaker truyền đạt rất dễ hiểu, nhiều ví dụ thực tế và áp dụng được ngay."
        },
        {
            avatar: "/images/avatar/avatar_3.JPG",
            name: "Lê Thu Trang",
            job: "Marketing Executive",
            review: "Sau khóa học mình tự tin hơn khi làm việc nhóm và xử lý các tình huống khó."
        },
        {
            avatar: "/images/avatar/avatar_4.JPG",
            name: "Đỗ Quốc Bảo",
            job: "Kinh doanh",
            review: "Một trong những khóa học đáng học nhất dành cho người đi làm."
        }
    ];

    return `
<section class="testimonials" id="testimonials">

    <div class="container">

        <div class="section-title">
            <h2>HỌC VIÊN NÓI GÌ?</h2>
        </div>

        <div class="swiper testimonialSwiper">

            <div class="swiper-wrapper">

                ${reviews.map(item => `

                    <div class="swiper-slide">

                        <div class="testimonial-card">

                            <div class="stars">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p class="review">
                                "${item.review}"
                            </p>

                            <div class="author">

                                <img src="${item.avatar}" alt="${item.name}">

                                <div>

                                    <h4>${item.name}</h4>

                                    <span>${item.job}</span>

                                </div>

                            </div>

                        </div>

                    </div>

                `).join("")}

            </div>

            <div class="swiper-pagination"></div>

        </div>

    </div>

</section>
`;
}