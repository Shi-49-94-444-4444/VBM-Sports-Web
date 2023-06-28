import { postNew } from "@/app/constants";
import Container from "../Container";
import PostNewItem from "./PostNewItem";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../../styles/swiper-custom.css';

SwiperCore.use([Autoplay]);

const PostNewContent = () => {
    return (
        <div className="w-full bg-gray-cus py-10">
            <Container>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >
                    {postNew.map((item) => (
                        <SwiperSlide key={item.id} >
                            <PostNewItem
                                src={item.src}
                                description={item.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div >
    );
};

export default PostNewContent;
