import React from "react";
import Image from "next/image";
import Button from "components/Form/Button";
import features from "__mocks__/feature.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Feature from "components/Card/Feature";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const FeatureVehicle: React.FC = () => {
  return (
    <section className="md:mt-20 mt-14 flex flex-col">
      <div className="md:px-16 px-4">
        <p className="text-primary md:text-5xl text-3xl font-bold text-center md:text-left">
          Our Featured Vehicles.{" "}
        </p>
        <div className="flex md:justify-between justify-center items-end">
          <p className="md:text-3xl text-xl mt-2 w-2/3 text-center md:text-left">
            One of our biggest product to be featured and that has sold out the
            most.
          </p>
          <Button title="View more" className="w-44 h-10 hidden md:block" />
        </div>
      </div>
      <div className="md:pl-16 pl-4 flex mt-16">
        <Swiper modules={[Pagination]} slidesPerView="auto" spaceBetween={10}>
          {features.map((item, i: number) => (
            <SwiperSlide
              key={i}
              className="flex justify-center max-w-[419px] max-h-[370px] p-1"
            >
              <Feature {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden justify-end flex px-4">
        <Button title="View more" className="w-44 h-10 md:hidden block" />
      </div>
    </section>
  );
};
export default FeatureVehicle;
