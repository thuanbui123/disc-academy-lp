export function Disc() {
    return `
        <section class="disc" id="disc">

            <div class="container">

                <div class="disc__wrapper">

                    <div class="disc__content">

                        <h2 class="section-title">
                            DISC <span>LÀ GÌ?</span>
                        </h2>

                        <p class="disc__description">
                            DISC không đơn thuần là công cụ giải mã tính cách, đánh giá hành vi mà còn
                            giúp bạn hiểu rõ bản thân, phong cách giao tiếp và cách làm việc 
                            của mỗi người thông qua 4 nhóm tính cách chính.
                        </p>

                        <div class="disc__list">

                            ${DiscItem(
                                "D",
                                "disc-item--red",
                                "Dominance - Thống trị",
                                "Quyết đoán, mạnh mẽ, thích thử thách và kết quả."
                            )}

                            ${DiscItem(
                                "I",
                                "disc-item--yellow",
                                "Influence - Ảnh hưởng",
                                "Hòa đồng, truyền cảm hứng, thích giao tiếp."
                            )}

                            ${DiscItem(
                                "S",
                                "disc-item--green",
                                "Steadiness - Kiên định",
                                "Điềm tĩnh, kiên nhẫn, đáng tin cậy."
                            )}

                            ${DiscItem(
                                "C",
                                "disc-item--blue",
                                "Conscientiousness - Tận tâm",
                                "Chính xác, cẩn thận và logic."
                            )}

                        </div>

                    </div>

                    <div class="disc__media">

                        <img
                            src="/disc-wheel.png"
                            alt="DISC Wheel"
                            class="disc__image"
                        >

                        <div class="disc__quote">

                            <p>
                                "Không có tính cách nào tốt hơn tính cách nào.
                                Điều quan trọng là hiểu bản thân và hiểu người khác."
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    `;
}

function DiscItem(letter, color, title, text) {

    return `
        <div class="disc-item">

            <div class="disc-item__icon ${color}">
                ${letter}
            </div>

            <div>

                <h3>${title}</h3>

                <p>${text}</p>

            </div>

        </div>
    `;
}