export function Problem() {
    return `
        <section class="problem" id="problem">

            <div class="container">

                <div class="problem__header">

                    <h2 class="problem__title">
                        Bạn đang gặp những vấn đề này?
                    </h2>

                    <p class="problem__description">
                        Trong công việc và cuộc sống, đôi khi chúng ta vô tình rơi vào những vòng lặp mệt mỏi mà không biết nguyên nhân cốt lõi bắt nguồn từ đâu. Hãy thử xem bạn có đang nhìn thấy chính mình trong những tình huống dưới đây không nhé?
                    </p>

                </div>

                <div class="problem__list">

                    ${ProblemCard(
                        "😔",
                        "Bất đồng ngôn ngữ",
                        "Nói sếp không hiểu, đồng nghiệp không nghe, động tí là xảy ra xung đột, tranh cãi."
                    )}

                    ${ProblemCard(
                        "🤔",
                        "Mất định hướng bẩm sinh",
                        "Làm việc tùy hứng, trì hoãn, không rõ thế mạnh thực sự của mình ở đâu để bứt phá thu nhập."
                    )}

                    ${ProblemCard(
                        "😥",
                        "Tê liệt vì ôm đồm",
                        "Nghiện công việc nhưng hiệu suất kém, hoặc làm việc theo cảm xúc dẫn đến cả thèm chóng chán."
                    )}

                    ${ProblemCard(
                        "⏳",
                        "⁠Trì hoãn & Dậm chân tại chỗ⁠",
                        "Bị kẹt trong vùng an toàn, nhiều ý tưởng nhưng hay trì hoãn, loay hoay mãi vẫn chưa thể bứt phá lên vị trí cao hơn."
                    )}

                </div>

            </div>

        </section>
    `;
}

function ProblemCard(icon, title, description) {
    return `
        <article class="problem-card">

            <div class="problem-card__icon">
                ${icon}
            </div>

            <h3 class="problem-card__title">
                ${title}
            </h3>

            <p class="problem-card__description">
                ${description}
            </p>

        </article>
    `;
}