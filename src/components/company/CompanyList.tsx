import Company from "../../model/Company";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CompanyItem from "./CompanyItem";
import 'swiper/css';
import 'swiper/css/navigation';

interface props {
  items: Company[];
}
export default function CompanyList(props: props) {
  return (
    <div className="w-1/2">
      <Swiper
         modules={[Navigation]}
         spaceBetween={20}
         slidesPerView={1}
         navigation
      >
        {props.items.map((item) => {
          return (
            <SwiperSlide key={item.name + item.address} className="p-2">
              <CompanyItem
                name={item.name}
                address={item.address}
                phone={item.phone}
                revenue={item.revenue}
                key={item.name + item.revenue}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
