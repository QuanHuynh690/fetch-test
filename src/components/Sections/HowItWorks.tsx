import React from "react";
import Image from "next/image";
const HowItWorks: React.FC = () => {
  return (
    <section className="bg-neutral8 pt-6 pb-28 xl:px-14 px-4 flex flex-col items-center">
      <p className="text-primary md:text-5xl text-3xl font-bold">How it works.</p>
      <p className="md:text-3xl text-xl text-center md:text-left text-white mt-2">
        This is how our products works{" "}
      </p>
      <div className="md:grid md:grid-cols-3 flex flex-col md:mt-36 mt-10 gap-16">
        <div className="flex flex-col items-center">
          <div className="h-36">
            <Image
              src="/images/find.svg"
              alt="Find Car"
              width="73"
              height="105"
            />
          </div>
          <p className="xl:text-4xl lg:text-3xl text-2xl sm:text-xl text-white font-medium mt-10 text-center">Find Car</p>
          <p className="text-white text-center xl:text-2xl lg:text-xl font-light mt-3">
            Our cars are located at prime areas where by there won’t be problem
            with transportation
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-36">
            <Image
              src="/images/payment.svg"
              alt="Find Car"
              width="184"
              height="105"
            />
          </div>
          <p className="xl:text-4xl lg:text-3xl text-2xl sm:text-xl text-white font-medium mt-10 text-center">Make payments </p>
          <p className="text-white text-center  xl:text-2xl lg:text-xl  font-light mt-3">
            Our estates comes with good network,portable water , 24hrs light and
            round the clock security.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {" "}
          <div className="h-36">
            <Image
              src="/images/official.svg"
              alt="Find Car"
              width="141"
              height="105"
            />
          </div>
          <p className="xl:text-4xl lg:text-3xl text-2xl sm:text-xl text-white font-medium mt-10 text-center">Make it Official </p>
          <p className="text-white text-center  xl:text-2xl lg:text-xl  font-light mt-3">
            We have been in business for over 32 years,for client outside the
            country you can trust us to deliver well.
          </p>
        </div>{" "}
      </div>
    </section>
  );
};
export default HowItWorks;
