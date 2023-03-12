import Button from "components/Form/Button";
import React from "react";
const FirstBanner: React.FC = () => {
  return (
    <>
      <header className="mx-4 md:mx-0 md:rounded-none rounded-[5px] md:pt-24 pt-4 md:pl-28 pl-4 md:h-[529px] h-[142px] bg-[url('/images/intro-banner.png')] bg-cover">
        <h1 className="text-white md:text-6xl text-base font-bold hidden md:block">
          Car Marketplace
        </h1>
        <p className="text-neutral4 mt-4 hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Nunc odio in et, lectus sit lorem id integer.
        </p>
        <Button
          title="Get started"
          className="mt-8 w-48 h-[52px] hidden md:block"
        />
      </header>
    </>
  );
};
export default FirstBanner;
