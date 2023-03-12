import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
type Props = {
  children: ReactNode;
};
const MainLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="md:pt-[149px] pt-28">{props.children}</div>
      <Footer />
    </>
  );
};
export default MainLayout;
