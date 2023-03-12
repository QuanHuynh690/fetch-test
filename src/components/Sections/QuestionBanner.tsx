import Button from "components/Form/Button";
import React from "react";
const FirstBanner: React.FC = () => {
  return (
    <article>
      <div className="md:mt-32 mt-14 py-20 md:pl-20 p-9 h-[694px] md:bg-[url('/images/question-banner.png')] bg-[url('/images/mobile-question.png')] bg-cover">
        <div className="md:w-[410px] w-full grid place-content-between h-full">
          <h1 className="text-white md:text-6xl text-5xl font-bold flex-wrap md:leading-[114px] leading-[72px] text-center md:-text-left mx-5">
            Questions about buying or renting?
          </h1>
          <Button title="Ask Us" className="md:mt-8 mt-20 w-full h-[60px]" />
        </div>
      </div>
      <div className="bg-neutral3 py-10 md:px-[90px] px-4 mt-20">
        <p className="font-semibold text-neutral7">
          UCARS - Revolutionizing The Online Car Marketplace In Singapore
        </p>
        <p className="mt-4 text-xs text-neutral7 font-semibold">
          Buy Used And New Cars Online
        </p>
        <p className="text-xs text-neutral7 leading-5">
          Start your car buying journey with UCARS as we connect you seamlessly
          to the industry&apos;s best CaseTrust-SVTA accredited car dealerships. As a
          one stop car online portal you can now buy your new ride, be it a
          pre-owned car or a brand new car from trusted dealers all over
          Singapore, all in one place. Our ever expanding listing of quality and
          covet-worthy cars, new and second hand, from both owners and trusted
          car dealers, will leave you spoilt for choice. Refine your search by
          vehicle type, registration year, price, mileage, engine type,
          transmission, annual depreciation value and more to find the car that
          best suits your needs, taste and lifestyle. You can even search for
          your car by dealer or directly by owner.
        </p>
        <p className="mt-4 text-xs text-neutral7 font-semibold">
          Sell Your Car In An Instant With Confidence
        </p>
        <p className=" text-xs text-neutral7 leading-5">
          We all know how selling a car in Singapore can be a daunting task
          especially for a first time car seller; from trying to get a valuation
          for your car, finding a trusted dealer, to getting the best quote on
          your vehicle. UCARS understands the hassle and even the costs involved
          and have as such partnered with Huawei to develop a FIRST in Southeast
          Asia AI car valuation tool that is able to provide a car’s resale
          value at the snap of a finger. Backed with a consortium of trusted
          CaseTrust-SVTA accredited car dealers you can be assured that you are
          getting the best price for your vehicle and do not have to worry about
          any hidden costs.
        </p>
        <p className="mt-4 text-xs text-neutral7 font-semibold">
          The Ultimate Car Shopping Experience Online
        </p>
        <p className="text-xs text-neutral7 leading-5">
          UCARS platform is the first of its kind to be backed by Huawei’s
          Artificial Intelligence and cloud computing, enabling it to be able to
          offer users transparency and enhanced security, all with the one aim
          of enhancing customer experience. So come on over to buy and sell used
          cars online at the best prices at UCARS Singapore. Connect easily with
          dealers in real-time via our online video call feature, or schedule a
          test drive when you&apos;re ready. Have some questions? Get them answered
          instantly with our chatbot moderated by our responsive team. Stay in
          the loop with our car-related tips, reviews and news. Learn the
          ins-and-outs of your car, as well as global and Singapore’s car
          updates at your own pace.
        </p>
      </div>
    </article>
  );
};
export default FirstBanner;
