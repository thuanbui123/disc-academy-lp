export function Testimonials() {

    const reviews = [
        {
            avatar: "/images/avatar/avatar_1.JPG",
            name: "Nguyễn Minh Anh",
            job: "Sinh viên",
            review: "Sau khóa học, mình hiểu bản thân hơn và nhận ra nhiều điểm mà trước đây chưa từng để ý. Mình cũng biết cách điều chỉnh cách giao tiếp để người khác dễ hiểu mình hơn"
        },
        {
            avatar: "/images/avatar/avatar_2.JPG",
            name: "Trần Thu Hà",
            job: "Nhân viên Marketing",
            review: "Điều mình thích nhất là khóa học không chỉ có lý thuyết mà còn có nhiều hoạt động và tình huống thực tế. Không khí rất vui và kiến thức cũng dễ tiếp thu."
        },
        {
            avatar: "/images/avatar/avatar_3.JPG",
            name: "Phạm Quỳnh Trang",
            job: "Giáo viên",
            review: "Trước đây mình thường nghĩ người khác khó hiểu, nhưng học DISC rồi mới nhận ra mỗi người chỉ có cách suy nghĩ và phản ứng khác nhau."
        },
        {
            avatar: "/images/avatar/avatar_4.JPG",
            name: "Lê Đức Anh",
            job: "Kỹ sư CNTT",
            review: "Mình đã hiểu vì sao có những người mình rất khó giao tiếp. Sau khóa học, mình học được cách thay đổi cách nói chuyện thay vì chỉ mong người khác thay đổi"
        },
        {
            avatar: "/images/avatar/avatar_6.JPG",
            name: "Đỗ Khánh Linh",
            job: "Nhân viên văn phòng",
            review: "Khóa học giúp mình nhìn lại các mối quan hệ xung quanh. Mình cảm thấy mình biết lắng nghe và thấu hiểu sự khác biệt của người khác hơn trước."
        },
        {
            avatar: "/images/avatar/avatar_5.jpg",
            name: "Nguyễn Hoàng Nam",
            job: "Nhân viên kinh doanh",
            review: "Phần điểm mù khiến mình ấn tượng nhất. Có những điều mình luôn nghĩ là điểm mạnh, nhưng khi thể hiện quá mức lại có thể khiến người khác cảm thấy áp lực"
        },
        {
            avatar: "/images/avatar/avatar_7.JPG",
            name: "Phạm Hải Đăng",
            job: "Kinh doanh tự do",
            review: "Ban đầu mình chỉ nghĩ DISC là một bài test tính cách, nhưng sau hai buổi học mình mới thấy DISC có thể ứng dụng rất thực tế vào giao tiếp, công việc và các mối quan hệ."
        },
        {
            avatar: "/images/avatar/avatar_8.JPG",
            name: "Trần Minh Đức",
            job: "Quản lý đội nhóm",
            review: "Mình rất thích cách Speaker chia sẻ gần gũi và dễ hiểu. Những ví dụ thực tế giúp mình nhìn thấy cả bản thân và những người trong đội nhóm của mình."
        },
        {
            avatar: "/images/avatar/avatar_9.JPG",
            name: "Hoàng Thảo Vy",
            job: "Freelancer",
            review: "Sau khóa học, mình không còn muốn dùng DISC để đóng khung người khác, mà muốn dùng nó như một công cụ để hiểu sự khác biệt và kết nối tốt hơn."
        },
        {
            avatar: "/images/avatar/avatar_10.JPG",
            name: "Đỗ Tiến Đạt",
            job: "Sinh viên",
            review: "Điều mình nhận được lớn nhất không chỉ là biết mình thuộc nhóm DISC nào, mà là hiểu rằng muốn có mối quan hệ tốt hơn, trước tiên mình cũng cần học cách thay đổi chính mình."
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