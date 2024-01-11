import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const TheBlogPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto pb-2.5 w-full">
        <Header className="bg-gray-900 flex gap-2.5 items-center justify-center px-28 md:px-5 py-[30px] w-full" />
        <div className="bg-gray-900 flex flex-col gap-[50px] items-center justify-center max-w-[1440px] py-[30px] w-full">
          <div className="h-[296px] max-w-7xl mx-auto md:px-5 relative w-full">
            <div className="absolute border-solid border-white-A700 border-y h-[295px] inset-[0] m-auto w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto md:text-5xl text-[244px] text-white-A700 w-max"
              size="txtInterBold244"
            >
              THE BLOG
            </Text>
          </div>
          <div className="flex flex-col gap-8 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
              size="txtInterSemiBold24"
            >
              Recent blog posts
            </Text>
            <div className="flex md:flex-col flex-row gap-8 items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
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
                      className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-500"
                      size="txtInterRegular16Bluegray500"
                    >
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
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
              <List
                className="flex flex-1 flex-col gap-8 items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start my-0 w-full">
                  <Img
                    className="md:flex-1 h-[200px] sm:h-auto max-h-[200px] object-cover sm:w-[] md:w-full"
                    src="images/img_image_200x320.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
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
                          className="leading-[24.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-500"
                          size="txtInterRegular16Bluegray500"
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
                <div className="flex flex-1 sm:flex-col flex-row gap-6 items-start justify-start my-0 w-full">
                  <Img
                    className="md:flex-1 h-[200px] sm:h-auto max-h-[200px] object-cover sm:w-[] md:w-full"
                    src="images/img_image_1.png"
                    alt="image"
                  />
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
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
                          className="leading-[24.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-500"
                          size="txtInterRegular16Bluegray500"
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
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheBlogPage;
