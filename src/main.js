import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./assets/css/style.css";

import { Header, initHeader } from "./components/Header.js";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Disc } from "./sections/Disc/Disc";
import { Benefits, initBenefits } from "./sections/Benefits/Benefits";
import { Course } from "./sections/Course";
import { Testimonials } from "./sections/Testimonials";
import { Register } from "./sections/Register";
import { Footer } from "./sections/Footer";
import { MusicPlayer, initMusicPlayer } from "./components/MusicPlayer";

import Swiper from "swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

document.querySelector("#app").innerHTML = `
    ${Header()}
    ${Hero()}
    ${Problem()}
    ${Disc()}
    ${Benefits()}
    ${Course()}
    ${Testimonials()}
    ${Register()}
    ${Footer()}
    ${MusicPlayer()}
`;

initHeader();

new Swiper(".testimonialSwiper", {

    modules: [Pagination, Autoplay],

    slidesPerView: 3,

    spaceBetween: 30,

    loop: true,

    autoplay: {

        delay: 3000,

        disableOnInteraction: false

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true

    },

    breakpoints: {

        0: {

            slidesPerView: 1

        },

        768: {

            slidesPerView: 2

        },

        1200: {

            slidesPerView: 3

        }

    }

});

initMusicPlayer();

initBenefits();