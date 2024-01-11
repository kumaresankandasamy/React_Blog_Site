import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";

const NewsletterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-gray-900 flex items-center justify-center px-28 md:px-5 py-[30px] w-full">
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
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[58px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/")}
                size="sm"
              >
                Blog
              </Button>
              <div
                className="common-pointer flex flex-col items-start justify-start p-2 w-auto"
                onClick={() => navigate("/projects")}
              >
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterRegular20WhiteA700"
                  >
                    Projects
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[73px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/about")}
                size="sm"
              >
                About
              </Button>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <div className="md:h-7 h-[29px] pb-[5px] relative w-[108px]">
                  <div className="absolute border-b border-solid border-white-A700 h-7 inset-[0] m-auto w-full"></div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-white-A700 text-xl top-[0] w-max"
                    size="txtInterBold20"
                  >
                    Newsletter
                  </Text>
                </div>
              </div>
              <Img
                className="h-10 rounded-[20px] w-24"
                src="images/img_togglemode.svg"
                alt="togglemode"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start max-w-[1440px] py-[30px] w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-base text-center text-deep_purple-400 w-full"
                    size="txtInterSemiBold16"
                  >
                    Newlatters
                  </Text>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[-0.96px] w-full"
                    size="txtInterSemiBold48"
                  >
                    Stories and interviews
                  </Text>
                </div>
                <Text
                  className="leading-[30.00px] max-w-3xl md:max-w-full text-blue_gray-200 text-center text-xl"
                  size="txtInterRegular20Bluegray200"
                >
                  Subscribe to learn about new product features, the latest in
                  technology, solutions, and updates.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-[360px]">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Input
                        name="input"
                        placeholder="Enter your email"
                        className="p-0 placeholder:text-blue_gray-500 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid w-full"
                        type="email"
                      ></Input>
                    </div>
                    <Text
                      className="text-blue_gray-200 text-sm w-full"
                      size="txtInterRegular14"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        We care about your data in our{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        privacy policy
                      </a>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-medium min-w-[118px] rounded-lg text-base text-center"
                    color="deep_purple_400"
                    size="lg"
                    variant="fill"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray-900 flex items-center justify-center md:px-5 py-[30px] w-full">
          <div className="flex flex-col items-start justify-start max-w-7xl sm:px-5 px-8 w-full">
            <div className="flex flex-col gap-8 items-start justify-start max-w-[1216px] w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                size="txtInterSemiBold24"
              >
                All blog posts
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-center w-full">
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_240x384.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-deep_purple-500 text-sm w-full"
                          size="txtInterSemiBold14"
                        >
                          Sunday , 1 Jan 2023
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtInterSemiBold24"
                          >
                            Bill Walsh leadership lessons
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          Like to know the secrets of transforming a 2-14 team
                          into a 3x Super Bowl winning Dynasty?
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-gray-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-deep_purple-500 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Leadership
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-gray-50_03 justify-center px-2.5 py-[3px] rounded-[12px] text-blue_gray-700 text-center text-sm w-auto"
                            size="txtInterMedium14Bluegray700"
                          >
                            Management
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[106px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Presentation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_2.png"
                      alt="image_One"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-deep_purple-500 text-sm w-full"
                          size="txtInterSemiBold14"
                        >
                          Sunday , 1 Jan 2023
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtInterSemiBold24"
                          >
                            PM mental models
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap_One"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          Mental models are simple expressions of complex
                          processes or relationships.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[73px] text-center text-sm"
                            shape="round"
                            color="gray_50_02"
                            size="xs"
                            variant="fill"
                          >
                            Product
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="blue_50"
                            size="xs"
                            variant="fill"
                          >
                            Research
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[103px] text-center text-sm"
                            shape="round"
                            color="red_50"
                            size="xs"
                            variant="fill"
                          >
                            Frameworks
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_3.png"
                      alt="image_Two"
                    />
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="text-deep_purple-500 text-sm w-full"
                          size="txtInterSemiBold14"
                        >
                          Sunday , 1 Jan 2023
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtInterSemiBold24"
                          >
                            What is Wireframing?
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap_Two"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          Introduction to Wireframing and its Principles. Learn
                          from the best in the industry.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-gray-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-deep_purple-500 text-sm w-auto"
                            size="txtInterMedium14"
                          >
                            Design
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="blue_50"
                            size="xs"
                            variant="fill"
                          >
                            Research
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[106px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Presentation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Footer className="bg-gray-900 flex gap-16 items-center justify-center md:px-5 py-[30px] w-full" />
      </div>
    </>
  );
};

export default NewsletterPage;
