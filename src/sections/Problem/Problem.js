export function Problem() {
    return `
        <section class="problem" id="problem">

            <div class="container">

                <div class="problem__header">

                    <h2 class="problem__title">
                        Bạn đang gặp những vấn đề này?
                    </h2>

                    <p class="problem__description">
                        DISC không chỉ giúp bạn hiểu bản thân mà còn giúp cải thiện
                        giao tiếp, xây dựng các mối quan hệ và phát triển sự nghiệp.
                    </p>

                </div>

                <div class="problem__list">

                    ${ProblemCard(
                        "😔",
                        "Khó giao tiếp",
                        "Thường khó mở lời, không biết bắt đầu trò chuyện như thế nào, dễ xảy ra hiểu lầm, khó kết nối với đồng nghiệp và người thân."
                    )}

                    ${ProblemCard(
                        "🤔",
                        "Không hiểu bản thân",
                        "Không biết điểm mạnh, điểm yếu và cách phát huy năng lực."
                    )}

                    ${ProblemCard(
                        "😥",
                        "Làm việc thiếu hiệu quả",
                        "Khó phối hợp trong nhóm và xử lý xung đột."
                    )}

                    ${ProblemCard(
                        "🚀",
                        "Muốn phát triển",
                        "Muốn nâng cao kỹ năng giao tiếp và phát triển bản thân."
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