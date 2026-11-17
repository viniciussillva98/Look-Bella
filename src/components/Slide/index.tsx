import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"


import { ContainerSlide } from './styles';
import Card from '../Card';

type SlideVirtualProps = { // Define o tipo de props que o componente espera receber
    info: {
        image: string;
        profissionalName: string;
    }[];
};


function SlideVirtual({ info }: SlideVirtualProps) {
    return (
        <ContainerSlide>
            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={10}
                slidesPerView="auto"
                loop={true}
                speed={8000}
                allowTouchMove={false}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                className="swiper-slider"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </ContainerSlide>
    );
}


export default SlideVirtual;