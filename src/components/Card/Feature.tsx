import React from "react";
import Image from "next/image";
import { FeatureType } from "types/feature";
import { numberToUSD } from "utils/formatNumber";
const Feature: React.FC<FeatureType> = (feature) => {
  return (
    <div className="max-h-[361px] max-w-[415px] relative rounded-tr-[40px] rounded-bl-[40px] px-8 pt-2 pb-4 transition-shadow hover:shadow-md cursor-pointer ">
      <Image src={feature.image} width="350" height="203" alt={feature.name} />
      <div className="flex justify-between mt-14 items-center">
        <div>
          <p className="font-medium text-3xl">{feature.name}</p>
          <p className="text-lg">{feature.description}</p>
        </div>
        <div>
          <p className="text-lg">{feature.type}</p>
          <p className="text-lg text-primary">{numberToUSD(feature.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
