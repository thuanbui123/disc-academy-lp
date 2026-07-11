// ==============================
// DATA
// ==============================

const benefits = [
    {
        icon: "🎯",
        title: "Làm chủ bản thân",
        subtitle: "Hiểu chính mình để phát triển bền vững.",
        description:
            "DISC giúp bạn hiểu rõ bản thân, biết vì sao mình suy nghĩ, hành động và ra quyết định theo cách hiện tại.",
        features: [
            "Hiểu rõ xu hướng tính cách của chính mình.",
            "Nhận diện điểm mạnh để phát huy.",
            "Nhìn thấy điểm mù để điều chỉnh.",
            "Hiểu cách mình phản ứng khi giao tiếp và chịu áp lực.",
            "Biết mình cần thay đổi gì để trở thành phiên bản tốt hơn."
        ],
        image: "/images/benefits/self.jpg"
    },
    {
        icon: "🤝",
        title: "Đọc vị người đối diện",
        subtitle: "Hiểu người để giao tiếp hiệu quả.",
        description:
            "Bạn sẽ biết cách nhận diện nhóm tính cách của người đối diện chỉ trong vài phút quan sát.",
        features: [
            "Nhận diện 4 xu hướng hành vi D – I – S – C.",
            "Hiểu mỗi người cần một cách giao tiếp khác nhau.",
            "Biết nên nói gì, nói thế nào với từng nhóm.",
            "Hạn chế hiểu lầm và những xung đột không đáng có.",
            "Linh hoạt hơn khi giao tiếp với nhiều kiểu người."
        ],
        image: "/images/benefits/people.jpg"
    },
    {
        icon: "💚",
        title: "Nâng cấp mối quan hệ",
        subtitle: "Kết nối tốt hơn với mọi người.",
        description:
            "DISC giúp bạn hiểu cách mỗi người suy nghĩ để xây dựng những mối quan hệ bền vững.",
        features: [
            "Hiểu vì sao cùng một chuyện nhưng mỗi người phản ứng khác nhau.",
            "Nhìn sự khác biệt với góc nhìn thấu cảm hơn.",
            "Giảm phán xét – tăng lắng nghe – cải thiện kết nối.",
            "Ứng dụng trong gia đình, tình yêu, tình bạn và công việc.",
            "Học cách yêu thương người khác theo cách họ có thể đón nhận.",
        ],
        image: "/images/benefits/relationship.jpg"
    },
    {
        icon: "💼",
        title: "Xây dựng đội nhóm vô địch",
        subtitle: "Đúng người - đúng việc.",
        description:
            "Biết cách phân công công việc theo điểm mạnh từng thành viên.",
        features: [
            "Nhận diện thế mạnh của từng thành viên.",
            "Hiểu phong cách làm việc khác nhau.",
            "Giao tiếp và phối hợp hiệu quả hơn.",
            "Phân công công việc phù hợp với thế mạnh.",
            "Biến sự khác biệt thành sức mạnh của đội nhóm.",
        ],
        image: "/images/benefits/team.jpg"
    },
    {
        icon: "📈",
        title: "Bản đồ sự nghiệp rõ ràng",
        subtitle: "Biết mình phù hợp điều gì.",
        description:
            "Hiểu điểm mạnh để phát triển sự nghiệp lâu dài.",
        features: [
            "Hiểu phong cách làm việc của bản thân.",
            "Nhận diện môi trường giúp mình phát huy tốt hơn.",
            "Biết những kỹ năng mình cần bổ sung.",
            "Có thêm cơ sở để định hướng phát triển bản thân.",
            "Không đóng khung mình bằng DISC – dùng DISC để hiểu và phát triển mình.",
        ],
        image: "/images/benefits/career.jpg"
    },
    {
        icon: "📋",
        title: "Kỹ năng ứng dụng thực chiến",
        subtitle: "Học xong áp dụng được ngay.",
        description:
            "Kiến thức đều đi kèm tình huống thực tế.",
        features: [
            "Thảo luận và hoạt động tương tác.",
            "Phân tích các tình huống thực tế.",
            "Trò chơi giúp ghi nhớ kiến thức.",
            "Thực hành ngay trong lớp học.",
            "Không chỉ biết DISC – mà biết cách ứng dụng DISC vào cuộc sống.",
        ],
        image: "/images/benefits/practice.jpg"
    }
];

// ==============================
// COMPONENT
// ==============================

export function Benefits() {

    const first = benefits[0];

    return `
<section class="benefits" id="benefits">

<div class="container">

<div class="section-title">

<h2>
THAM GIA KHÓA HỌC, BẠN SẼ
<span>NHẬN ĐƯỢC</span>
</h2>

<p class="custom">👇 Chạm vào từng mục để xem bạn sẽ nhận được gì</p>

</div>

<div class="benefits__grid">

${benefits.map((item,index)=>`

<button
class="benefit-card ${index===0?"active":""}"
data-index="${index}">

<div class="benefit-card__icon">
${item.icon}
</div>

<h3>${item.title}</h3>

</button>

`).join("")}

</div>

<div id="benefit-detail">

${renderDetail(first)}

</div>

</div>

</section>
`;
}

// ==============================
// RENDER DETAIL
// ==============================

function renderDetail(item){

    return `
<div class="benefit-detail">

<div class="benefit-detail__content fade">

<div class="benefit-detail__text">

<span class="benefit-detail__badge">
${item.icon} ${item.title}
</span>

<ul>

${item.features.map(x=>`
<li>${x}</li>
`).join("")}

</ul>

</div>

<div class="benefit-detail__image">

<img
src="${item.image}"
alt="${item.title}">

</div>

</div>

</div>
`;

}

// ==============================
// INIT
// ==============================

export function initBenefits(){

    const cards=document.querySelectorAll(".benefit-card");

    const detail=document.querySelector("#benefit-detail");

    if(!cards.length || !detail) return;

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            cards.forEach(x=>x.classList.remove("active"));

            card.classList.add("active");

            const item=benefits[Number(card.dataset.index)];

            detail.innerHTML=renderDetail(item);

        });

    });

}