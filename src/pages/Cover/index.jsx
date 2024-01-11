import React from "react";

import { Button, Img, Text } from "components";

const CoverPage = () => {
  return (
    <>
      <div className="bg-gray-50_04 flex sm:flex-col md:flex-col flex-row font-gilroy sm:gap-10 md:gap-10 items-start justify-between mx-auto md:pl-10 sm:pl-5 pl-[216px] w-full">
        <div className="flex flex-col items-center justify-start md:mt-0 mt-[165px] w-[31%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-white-A700_99 border border-solid border-white-A700 h-[58px] rounded-[29px] w-[36%]"></div>
            <div className="h-[276px] md:h-[372px] mt-24 relative w-full">
              <Text
                className="leading-[92.00px] m-auto md:text-5xl text-[86px] text-light_blue-A700 tracking-[3.87px] uppercase"
                size="txtGilroyBold86"
              >
                <>
                  The Blog - <br />
                  Personal <br />
                  Blog
                </>
              </Text>
              <Img
                className="absolute bottom-[7%] h-10 right-[6%] w-10"
                src="images/img_figmacursor.svg"
                alt="figmacursor"
              />
            </div>
            <div className="flex flex-row gap-4 items-center justify-start mt-6 w-[63%] md:w-full">
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[220px] outline outline-[1px] outline-white-A700 rounded-[45px] text-2xl md:text-[22px] text-center sm:text-xl"
                color="white_A700_b2"
                size="xl"
                variant="fill"
              >
                Light & Dark
              </Button>
              <div className="bg-white-A700_66 flex flex-col h-[90px] items-center justify-end outline outline-[1px] outline-white-A700 p-5 rounded-[50%] w-[90px]">
                <Img
                  className="h-[42px] mt-1.5"
                  src="images/img_close.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1034px] md:h-[960px] relative w-[62%] md:w-full">
          <div className="absolute h-[1012px] md:h-[960px] inset-[0] justify-center m-auto pb-[52px] rotate-[12deg] shadow-bs1 w-full">
            <Img
              className="absolute h-[960px] inset-x-[0] mx-auto object-cover top-[0] w-[99%]"
              src="images/img_financedashboard.png"
              alt="financedashboar"
            />
            <Img
              className="absolute h-[109px] inset-x-[0] mx-auto object-cover top-[0] w-full"
              src="images/img_searchbard1.png"
              alt="searchbardOne"
            />
          </div>
          <div className="absolute flex flex-col inset-y-[0] my-auto pb-[74px] right-[0] rotate-[12deg] shadow-bs1 w-[77%] md:w-full">
            <Img
              className="h-[131px] mx-auto object-cover w-full"
              src="images/img_searchbarl2.png"
              alt="searchbarlTwo"
            />
            <Img
              className="h-[960px] mt-[-131.38px] mx-auto object-cover w-[99%] z-[1]"
              src="images/img_financedashboard_960x788.png"
              alt="financedashboar_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverPage;
