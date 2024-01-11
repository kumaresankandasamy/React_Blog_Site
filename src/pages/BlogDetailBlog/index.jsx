import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Footer from "components/Footer";

const BlogDetailBlogPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-gray-900 flex items-center justify-center px-28 md:px-5 py-[30px] w-full">
          <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between max-w-[1216px] py-2.5 w-full">
            <div className="header-row my-[7px]">
              <Text
                className="common-pointer text-white-A700 text-xl"
                size="txtInterSemiBold20WhiteA700"
                onClick={() => navigate("/")}
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
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[93px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/projects")}
                size="sm"
              >
                Projects
              </Button>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterRegular20WhiteA700"
                >
                  About
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtInterRegular20WhiteA700"
                >
                  Newsletter
                </Text>
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
          <div className="flex flex-col items-start justify-start max-w-[1216px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-center w-[351px]">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtInterSemiBold24"
                >
                  Recent blog posts
                </Text>
                <List
                  className="flex flex-col gap-8 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-8 h-[432px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="md:h-auto h-full object-cover w-full"
                      src="images/img_image.png"
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                            size="txtInterSemiBold24"
                          >
                            UX review presentations
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          How do you create compelling presentations that wow
                          your colleagues and impress your managers?
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
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[228px] md:h-auto object-cover w-full"
                      src="images/img_image_200x320.png"
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
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-lg text-white-A700 w-full"
                            size="txtInterSemiBold18"
                          >
                            Migrating to Linear 101
                          </Text>
                          <Text
                            className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                            size="txtInterRegular16"
                          >
                            Linear helps streamline software projects, sprints,
                            tasks, and bug tracking. Here’s how to get...
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-gray-50_02 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-light_blue-900 text-sm w-auto"
                            size="txtInterMedium14Lightblue900"
                          >
                            Design
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Research
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[228px] md:h-auto object-cover w-full"
                      src="images/img_image_1.png"
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
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-lg text-white-A700 w-full"
                            size="txtInterSemiBold18"
                          >
                            Building your API Stack
                          </Text>
                          <Text
                            className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                            size="txtInterRegular16"
                          >
                            The rise of RESTful APIs has been met by a rise in
                            tools for creating, testing, and manag...
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-light_green-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-sm text-teal-800 w-auto"
                            size="txtInterMedium14Teal800"
                          >
                            Design
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Research
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 leading-[32.00px] max-w-[302px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
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
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
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
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
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
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_4.png"
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 leading-[32.00px] max-w-[302px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtInterSemiBold24"
                          >
                            How collaboration makes us better designers
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          Collaboration can make our teams stronger, and our
                          individual designs better.
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
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_5.png"
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 leading-[32.00px] max-w-[302px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtInterSemiBold24"
                          >
                            Our top 10 Javascript frameworks to use
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          JavaScript frameworks make development easy with
                          extensive features and functionalities.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-light_green-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-sm text-teal-800 w-auto"
                            size="txtInterMedium14Teal800"
                          >
                            Software Development
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[56px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Tools
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[54px] text-center text-sm"
                            shape="round"
                            color="red_50_01"
                            size="xs"
                            variant="fill"
                          >
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Img
                      className="h-60 md:h-auto object-cover w-full"
                      src="images/img_image_6.png"
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 leading-[32.00px] max-w-[302px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                            size="txtInterSemiBold24"
                          >
                            Podcast: Creating a better CX Community
                          </Text>
                          <Img
                            className="h-7 w-6"
                            src="images/img_iconwrap.svg"
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                          size="txtInterRegular16"
                        >
                          Starting a community doesn’t need to be complicated,
                          but how do you get started?
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="gray_50"
                            size="xs"
                            variant="fill"
                          >
                            Podcasts
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[146px] text-center text-sm"
                            shape="round"
                            color="gray_50_03"
                            size="xs"
                            variant="fill"
                          >
                            Customer Success
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
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <Img
                      className="h-[228px] md:h-auto object-cover w-full"
                      src="images/img_image_1.png"
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
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-lg text-white-A700 w-full"
                            size="txtInterSemiBold18"
                          >
                            Building your API Stack
                          </Text>
                          <Text
                            className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
                            size="txtInterRegular16"
                          >
                            The rise of RESTful APIs has been met by a rise in
                            tools for creating, testing, and manag...
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="bg-light_green-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-sm text-teal-800 w-auto"
                            size="txtInterMedium14Teal800"
                          >
                            Design
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer font-medium min-w-[83px] text-center text-sm"
                            shape="round"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Research
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className="flex flex-row gap-4 items-start justify-start w-full">
                          <Text
                            className="flex-1 leading-[32.00px] max-w-[302px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
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
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
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
                            alt="iconwrap"
                          />
                        </div>
                        <Text
                          className="leading-[24.00px] max-w-[342px] md:max-w-full text-base text-blue_gray-200"
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
                </List>
              </div>
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
                <Text
                  className="text-deep_purple-500 text-sm w-full"
                  size="txtInterSemiBold14"
                >
                  Sunday , 1 Jan 2023
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="leading-[32.00px] max-w-[778px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtInterBold36"
                  >
                    Grid system for better Design User Interface
                  </Text>
                </div>
                <Img
                  className="h-[426px] sm:h-auto object-cover w-full"
                  src="images/img_image_246x592.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-center justify-center w-full">
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      A grid system is a design tool used to arrange content on
                      a webpage. It is a series of vertical and horizontal lines
                      that create a matrix of intersecting points, which can be
                      used to align and organize page elements. Grid systems are
                      used to create a consistent look and feel across a
                      website, and can help to make the layout more visually
                      appealing and easier to navigate.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      If you’ve been to New York City and have walked the
                      streets, it is easy to figure out how to get from one
                      place to another because of the grid system that the city
                      is built on. Just as the predictability of a city grid
                      helps locals and tourists get around easily, so do webpage
                      grids provide a structure that guides users and designers
                      alike. Because of their consistent reference point, grids
                      improve page readability and scannability and allow people
                      to quickly get where they need to go.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[567px] md:max-w-full text-base text-blue_gray-200 text-center"
                      size="txtInterBold16"
                    >
                      Definition: A grid is made up of columns, gutters, and
                      margins that provide a structure for the layout of
                      elements on a page.
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[498px] md:h-auto object-cover w-full"
                        src="images/img_image_498x778.png"
                        alt="image_One"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Definition: A grid is made up of columns, gutters, and
                        margins that provide a structure for the layout of
                        elements on a page.
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      There are three common grid types used in websites and
                      interfaces: column grid, modular grid, and hierarchical
                      grid.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Column grid involves dividing a page into vertical
                      columns. UI elements and content are then aligned to these
                      columns.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Modular grid extends the column grid further by adding
                      rows to it. This intersection of columns and rows make up
                      modules to which elements and content are aligned. Modular
                      grids are great for ecommerce and listing pages, as rows
                      are repeatable to accommodate browsing.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Hierarchical grid: Content is organized by importance
                      using columns, rows, and modules. The most important
                      elements and pieces of content take up the biggest pieces
                      of the grid.
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Breaking Down the Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Regardless of the type of grid you are using, the grid is
                      made up of three elements: columns, gutters, and margins.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-bold">
                        Columns:
                      </span>
                      <span className="text-blue_gray-200 font-inter text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        Columns take up most of the real estate in a grid.
                        Elements and content are placed in columns. To adapt to
                        any screen size, column widths are generally defined
                        with percentages rather than fixed values and the number
                        of columns will vary. For example, a grid on a mobile
                        device might have 4 columns and a grid on a desktop
                        might have 12 columns.
                      </span>
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Gutters: The gutter is the space between columns that
                      separates elements and content from different columns.
                      Gutter widths are fixed values but can change based on
                      different breakpoints. For example, wider gutters are
                      appropriate for larger screens, whereas smaller gutters
                      are appropriate for smaller screens like mobile.
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_426x778.png"
                        alt="image_Two"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Three elements make up any grid: (1) columns, (2)
                        gutters, and (3) margins.
                      </Text>
                    </div>
                    <Text
                      className="text-blue_gray-200 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Examples of Grids in Use
                    </Text>
                    <Text
                      className="text-base text-blue_gray-200 w-full"
                      size="txtInterBold16"
                    >
                      Example 1: Hierarchical Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        Our first example is from{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        The New York Times
                      </a>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        . This screen utilizes a hierarchical grid to create a
                        newspaper-like reading experience. At desktop screen
                        size, two main columns make up the hierarchical grid.
                        The most important news story takes up the most space in
                        the grid, the left column, followed by secondary and
                        tertiary stories, which take up the smaller column and
                        modules on the right.
                      </span>
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_7.png"
                        alt="image_Three"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        The New York Times uses a hierarchical grid to achieve
                        its newspaper-like reading experience. (We highlighted
                        the columns in yellow, the gutters in blue, and the
                        margins in purple.)
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-200 w-full"
                      size="txtInterBold16"
                    >
                      Example 2: Column Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        Our second example is from{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        Ritual.com
                      </a>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        , a vitamin company. This design uses a column grid to
                        create an attractive visual experience. At this screen
                        size, four consistently sized columns make up the grid
                        structure and elements are aligned to and within these
                        columns. The gutters, the spaces in between the columns,
                        are also consistently sized and help the user visually
                        separate the different products. The margins are
                        independently sized and are the same between the left
                        and right sides.
                      </span>
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_8.png"
                        alt="image_Four"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Ritual’s four-column grid makes scanning products easy.
                        (We highlighted the columns in yellow, the gutters in
                        blue, and the margins in purple.)
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-200 w-full"
                      size="txtInterBold16"
                    >
                      Example 3: Modular Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        Our third example is from{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        Behance
                      </a>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        , a design library. The site’s design uses a modular
                        grid to create a pleasant browsing experience. At
                        desktop size, rows are made up of 4 consistently sized
                        modules. Horizontal gutters are slightly thicker than
                        vertical gutters and the margins are consistently sized
                        on the left and right of the design. Like in previous
                        example, the gutters visually separate each element.
                      </span>
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_9.png"
                        alt="image_Five"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Behance’s design uses a modular grid, which allows users
                        to easily browse. (We highlighted the columns in yellow,
                        the gutters in blue, and the margins in purple.)
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-200 w-full"
                      size="txtInterBold16"
                    >
                      Example 4: Breaking the Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        Our last example is{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        Shrine from Google’s Material Studies
                      </a>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        . This design uses a column grid, as we can see based on
                        the left navigation, which is 2 columns wide. Look
                        closely and you will see that some product images settle
                        to the margins, while others do not. Breaking the grid
                        like this makes it challenging to focus or quickly scan
                        product images and calls more attention to some products
                        over others. It is okay to break the grid every so
                        often, as long as you have a valid reason for it.
                      </span>
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_10.png"
                        alt="image_Six"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Breaking the grid produces a chaotic browsing experience
                        for users. (We highlighted the columns in yellow, the
                        gutters in blue, and the margins in purple.)
                      </Text>
                    </div>
                    <Text
                      className="text-base text-blue_gray-200 w-full"
                      size="txtInterBold16"
                    >
                      Benefits of the Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        <>
                          Using a grid benefits both end users and the designers
                          alike:
                          <br />
                          Designers can quickly put together well-aligned
                          interfaces.
                          <br />
                          Users can easily scan predictable grid-based
                          interfaces.
                          <br />A good grid is easy to adapt to various screen
                          sizes and orientations. In fact, grid layouts are an
                          essential component of{" "}
                        </>
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-200 font-inter text-left font-normal underline"
                      >
                        responsive web design
                      </a>
                      <span className="text-blue_gray-200 font-inter text-left font-normal">
                        . Responsive design uses breakpoints to determine the
                        screen size threshold at which the layout should change.
                        For example, a desktop screen may have 12 grid columns,
                        which may be stacked on mobile so that the resulting
                        layout has only 4 columns.
                      </span>
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_11.png"
                        alt="image_Seven"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        At the mobile size, Behance’s one-column grid (left) was
                        reflowed into a four-column grid structure (right).
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Even more importantly, the grid is not a throw-away
                      concept. It is used by both designers and developers
                      alike. Be sure to communicate with your developers the
                      grid structure used when creating the design, so they can
                      implement it accordingly.
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Choosing and Setting Up Your Grid
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      How you use and set up a grid is fundamental to creating
                      well thought out layouts and experiences for your user.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Choose the right grid for your needs. Take time to think
                      through what type of grid ­— column, modular, or
                      hierarchical — best suits your needs. A hierarchical grid
                      may be the best fit if one item on your page will always
                      be more important than the surrounding elements. For
                      example, hierarchical grids are great for online news
                      platforms. If the content you need to display is highly
                      variable, consider using a basic column or modular grid,
                      as these provide lots of flexibility when designing. For
                      example, elements and content can span across multiple
                      columns or modules or just one to fit design needs.
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Spend time setting up your grid. Once you have figured out
                      what type of grid will work well for your needs, start
                      setting it up. Determine the number of columns and the
                      margin and gutter sizes relative to your screen sizes. You
                      will most likely want to prepare for mobile, tablet, and
                      desktop screens. A 12-column grid at laptop or desktop
                      size is generally flexible enough for most design needs.
                      The number of columns will decrease as your device size
                      decreases. Wireframing tools like Sketch and Figma have
                      quick and easy ways to set up and edit your grid, even
                      after you have started designing.
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_12.png"
                        alt="image_Eight"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Easily set the number of columns, the gutter size, and
                        margin size in Figma.
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Always place content within columns, not gutters. The
                      gutters should remain empty as you place elements on the
                      grid in order to clearly separate and align content and
                      elements.
                    </Text>
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-[426px] md:h-auto object-cover w-full"
                        src="images/img_image_13.png"
                        alt="image_Nine"
                      />
                      <Text
                        className="leading-[24.00px] text-base text-blue_gray-200 text-center w-[73%] sm:w-full"
                        size="txtInterRegular16"
                      >
                        Content or elements should be placed within and across
                        columns, not gutters.
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Consider using an 8px grid system. For most common
                      devices, the screen size in pixels is a multiple of 8.
                      Keeping grid-component values at a multiple of 8 will
                      generally make it easier to scale and implement a grid.
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Conclusion
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[778px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      Grids not only provide designers a structure on which to
                      base layouts, but they also improve readability and
                      scannability for end users. Use a good grid system that
                      easily adapts to various screen sizes.
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
                        className="cursor-pointer font-medium min-w-[81px] text-center text-sm"
                        shape="round"
                        color="gray_50_01"
                        size="xs"
                        variant="fill"
                      >
                        Interface
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-center justify-start w-auto md:w-full">
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
                      Subscribe to learn about new product features, the latest
                      in technology, solutions, and updates.
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
          </div>
        </div>
        <Footer className="bg-gray-900 flex gap-16 items-center justify-center md:px-5 py-[30px] w-full" />
      </div>
    </>
  );
};

export default BlogDetailBlogPage;
