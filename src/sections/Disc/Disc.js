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
                            DISC là công cụ thấu hiểu tâm lý hành vi hàng đầu thế giới, giúp bạn bóc tách tính cách, 
                            phong cách giao tiếp và cách làm việc của bất kỳ ai chỉ qua 4 nhóm điển hình.
                        </p>
                        <div class="disc__test-card">

                            <div class="disc__test-content">

                                <span class="disc__test-badge">
                                    🎁 Miễn phí
                                </span>

                                <h3>
                                    Bạn thuộc nhóm tính cách DISC nào?
                                </h3>

                                <p>
                                    Thực hiện bài test DISC miễn phí chỉ trong khoảng
                                    <strong>5 - 7 phút</strong> để khám phá điểm mạnh,
                                    điểm cần cải thiện và phong cách giao tiếp của chính bạn.
                                </p>

                            </div>

                            <a
                                href="https://forms.gle/f6khVYoddLMmpQq98"
                                target="_blank"
                                class="btn disc__test-btn"
                            >
                                Làm bài test miễn phí →
                            </a>

                        </div>
                        <div class="disc__list">

                            ${DiscItem(
        "D",
        "disc-item--red",
        "Dominance - Thống trị",
        "Quyết liệt, mạnh mẽ, tiên phong, tập trung vào mục tiêu và kết quả."
    )}

                            ${DiscItem(
        "I",
        "disc-item--yellow",
        "Influence - Ảnh hưởng",
        "Hòa đồng, nhiệt huyết, sáng tạo, truyền cảm hứng và kết nối."
    )}

                            ${DiscItem(
        "S",
        "disc-item--green",
        "Steadiness - Kiên định",
        "Điềm tĩnh, kiên nhẫn, chân thành, sâu sắc và đáng tin cậy."
    )}

                            ${DiscItem(
        "C",
        "disc-item--blue",
        "Conscientiousness - Tận tâm",
        "Chính xác, kỷ luật, logic, cẩn trọng và hệ thống."
    )}

                        </div>

                    </div>

                    <div class="disc__media">

                        <img
                            src="/disc-wheel.jpg"
                            alt="DISC Wheel"
                            class="disc__image"
                        >

                        <div class="disc__quote">

                            <p>
                                "DISC không sinh ra để dán nhãn hay phán xét. <br/>
                                Nó là chiếc gương để thấu hiểu chính mình, và là chiếc cầu để bao dung người khác."
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