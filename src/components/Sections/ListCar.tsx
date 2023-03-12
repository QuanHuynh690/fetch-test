import React, { useState } from "react";
import { CarType } from "types/car";
import Image from "next/image";
import Car from "components/Card/Car";
import Button from "components/Form/Button";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import { typeCarFilter, vehicleTypeFilter } from "constanst/filter";
import { VehicleType } from "types/feature";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
interface ListCarsProps {
  cars: CarType[];
}
const ListCars: React.FC<ListCarsProps> = ({ cars }) => {
  const [checkedTypeVehicles, setCheckedTypeVehicles] = useState<string[]>([]);
  const [typeCar, setTypeCar] = useState(typeCarFilter[0]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleCheckChange = (event: any) => {
    const item = event.target.name;
    const isChecked = event.target.checked;
    setCheckedTypeVehicles((prev: any) => {
      if (isChecked) {
        return [...prev, item];
      } else {
        return prev.filter((i: string) => i !== item);
      }
    });
  };
  const displayVehicleType = (typeList: string[]) => {
    switch (true) {
      case typeList.length === 0:
        return "Please choose a type";
      case typeList.length === 1:
        return typeList[0];
      case typeList.length > 1:
        return `+${typeList.length} more`;
    }
  };
  return (
    <section className="md:px-16 pl-4 pb-20 flex flex-col md:items-center relative mt-4">
      <div className="w-full md:absolute md:-translate-y-1/2 md:px-16 pr-4">
        <div className=" md:h-36 w-full flex md:flex-row flex-col md:items-center bg-white border border-neutral4 rounded-[10px] ">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                 md:border-r-2 h-full w-full min-w-[290px] group inline-flex items-center md:px-10 px-4 py-2 text-base font-medium hover:text-opacity-100 border-b md:border-b-0`}
                >
                  <div className="w-full">
                    <p className="font-medium text-left">New/ Used</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-normal text-left">
                        {typeCar.name}
                      </span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 md:translate-y-5 -translate-y-3"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 max-w-sm md:px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-[15px] shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-white p-4">
                        <RadioGroup value={typeCar} onChange={setTypeCar}>
                          {typeCarFilter.map((type, index) => {
                            return (
                              <RadioGroup.Option
                                value={type}
                                key={index}
                                className="mt-2"
                              >
                                {({ checked }) => (
                                  <div className="flex items-center">
                                    <input
                                      id={`type-car${type.id}`}
                                      type="radio"
                                      checked={checked}
                                      className="h-4 w-4 border border-gray-400 rounded-full accent-primary"
                                    />
                                    <label
                                      htmlFor={`type-car${type.id}`}
                                      className="ml-2 text-gray-700"
                                    >
                                      {type.name}
                                    </label>
                                  </div>
                                )}
                              </RadioGroup.Option>
                            );
                          })}
                        </RadioGroup>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                 md:border-r-2 h-full md:w-[410px] w-full group inline-flex items-center md:px-10 px-4 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none border-b md:border-b-0`}
                >
                  <div className="w-full">
                    <p className="font-medium text-left">Price Range</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-normal">New Cars</span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 md:translate-y-5 -translate-y-3"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 md:w-[500px] w-full mt-3 max-w-sm transform md:px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-[15px] shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-white p-4">
                        <p className="font-semibold">Price Range</p>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start text-sm mt-5 border-b-2 pb-6">
                          <div className="border border-1 rounded-[5px] px-4 py-2 mr-3">
                            <p className="text-sm text-neutral5">Min</p>
                            <div className="flex items-center">
                              <label className="mr-2">S$</label>
                              <input
                                type={"number"}
                                className=" focus:ring-0s"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                              />
                            </div>
                          </div>
                          <span className='hidden md:block'>-</span>
                          <div className="border border-1 rounded-[5px] px-4 py-2 md:ml-3 md:mt-0 mt-2">
                            <p className="text-sm text-neutral5">Max</p>
                            <div className="flex items-center">
                              <label className="mr-2">S$</label>
                              <input
                                type={"number"}
                                className=" focus:ring-0"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-8">
                          <button
                            className="text-neutral5 hover:text-primary"
                            onClick={() => {
                              setMinPrice("");
                              setMaxPrice("");
                            }}
                          >
                            Clear
                          </button>
                          <Button title="Save" className="w-[73px] h-10" />
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                h-full md:w-[290px] w-full group inline-flex items-center md:px-10 px-4 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none border-b md:border-b-0`}
                >
                  <div className="w-full">
                    <p className="font-medium text-left">Vehicle Type</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-normal">
                        {displayVehicleType(checkedTypeVehicles)}
                      </span>
                      <ChevronDownIcon
                        className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 md:translate-y-5 -translate-y-3"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute md:w-[480px] w-full z-10 mt-3 md:max-w-screen transform md:px-4 sm:px-0 lg:max-w-[500px]">
                    <div className="overflow-hidden rounded-[15px] shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="bg-white p-4">
                        <p className="font-semibold">Vehicle Type</p>
                        <div className="grid grid-rows-5 grid-flow-col gap-6 text-sm mt-5 border-b-2 pb-6">
                          {vehicleTypeFilter.map((item: VehicleType) => (
                            <div key={item.id} className="flex items-center">
                              <input
                                type="checkbox"
                                name={item.name}
                                id={item.id}
                                className="h-4 w-4 accent-primary border-gray-300 rounded"
                                checked={checkedTypeVehicles.includes(
                                  item.name
                                )}
                                onChange={handleCheckChange}
                              />
                              <label htmlFor={item.id} className="ml-2">
                                {item.name}
                              </label>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between items-center mt-8">
                          <button
                            className="text-neutral5 hover:text-primary"
                            onClick={() => setCheckedTypeVehicles([])}
                          >
                            Clear
                          </button>
                          <Button title="Save" className="w-[73px] h-10" />
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className="flex-1 md:justify-end justify-center flex md:p-10 p-4">
            <Button title="Search" className="md:w-[140px] w-full h-[60px]" />
          </div>
        </div>
      </div>
      <div className="md:mt-40 mt-12 hidden grid-cols-4 gap-10 md:grid">
        <Image
          src="/images/promotion.png"
          width="281"
          height="361"
          alt="promotion"
        />
        {cars.map((car: CarType, index: number) => (
          <Car {...car} key={index} />
        ))}
      </div>
      <div className="md:pl-16 pl-0 flex mt-12 md:hidden">
        <Swiper modules={[Pagination]} slidesPerView="auto" spaceBetween={10}>
          {cars.map((car: CarType, i: number) => (
            <SwiperSlide
              key={i}
              className="flex justify-center max-w-[281px] max-h-[361px] p-1"
            >
              <Car {...car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button
        title="View more new cars"
        variant="secondary"
        className="mt-6 w-[194px] h-10 md:mr-0 mr-4 self-end md:self-center"
      />
    </section>
  );
};
export default ListCars;
