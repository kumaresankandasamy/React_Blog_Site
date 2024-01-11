import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between max-w-[1216px] py-2.5 w-full">
          <div className="header-row mt-[9px] mb-2.5">
            <Text
              className="text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              Your Name
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-3.5 sm:hidden items-start justify-start w-auto">
            <div className="flex flex-col items-start justify-start p-2 w-auto">
              <Text
                className="border-b border-solid border-white-A700 text-white-A700 text-xl w-auto"
                size="txtInterBold20"
              >
                Blog
              </Text>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-inter min-w-[93px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/projects")}
              size="sm"
            >
              Projects
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-inter min-w-[73px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/about")}
              size="sm"
            >
              About
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-inter min-w-[120px] text-center text-white-A700 text-xl"
              onClick={() => navigate("/newsletter")}
              size="sm"
            >
              Newsletter
            </Button>
            <Img
              className="h-10 rounded-[20px] w-24"
              src="images/img_togglemode.svg"
              alt="togglemode"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
