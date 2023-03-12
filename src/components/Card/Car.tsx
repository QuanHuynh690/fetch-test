import React from "react";
import { CarType } from "types/car";
import Image from "next/image";
import { numberToUSD } from "utils/formatNumber";
const Car: React.FC<CarType> = (car) => {
  return (
    <>
      <div className="max-h-[361px] max-w-[281px] cursor-pointer">
        <Image src={car.image} alt={car.name} width="281" height="187" />
        <div className="border-neutral4 border-x border-b rounded-b-[5px] p-4">
          <p className="font-semibold mt-2">{car.name}</p>
          <span className='mt-2'>From </span>
          <span className="font-semibold text-secondary mt-2">
            {numberToUSD(car.floorPrice)}{" "}
          </span>
          <span className="text-secondary text-xs bg-secondarylight inline-block p-1 rounded-sm mt-2" >{numberToUSD(car.monthly)}/mo</span>
          <p className='text-neutral7 text-sm mt-2'>{car.variants} variants {car.isWithCOE&&'| with COE'}</p>
          <div className="flex flex-row items-center mt-4">
            <Image src={car.vender.logo} width='32' height='32' alt='logo' style={{objectFit:'contain'}}/>
            <span className='text-sm ml-2'>{car.vender.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Car;
