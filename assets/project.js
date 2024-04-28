import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'
import VenoBox from 'venobox'
import 'venobox/dist/venobox.min.css'

Swiper.use([Autoplay]);

new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: { delay: 8000 },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

new VenoBox({
  selector: '.project__image',
});