import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const LigthModePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[50px] items-center justify-center py-[30px] w-full">
          <header className="flex md:flex-col flex-row md:gap-3.5 items-center justify-between md:px-5 py-2.5 w-full">
            <Text
              className="text-gray-900_03 text-xl w-auto"
              size="txtInterSemiBold20"
            >
              Your Name
            </Text>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-gray-900_03 text-xl w-auto"
                  size="txtInterRegular20"
                >
                  Blog
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-gray-900_03 text-xl w-auto"
                  size="txtInterRegular20"
                >
                  Projects
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-gray-900_03 text-xl w-auto"
                  size="txtInterRegular20"
                >
                  About
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="text-gray-900_03 text-xl w-auto"
                  size="txtInterRegular20"
                >
                  Newsletter
                </Text>
              </div>
              <div className="bg-gray-900 flex flex-row gap-4 items-start justify-start px-4 py-2 rounded-[20px] w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_brightness.svg"
                  alt="brightness"
                />
                <div className="bg-white-A700 h-6 rounded-[50%] w-6"></div>
              </div>
            </div>
          </header>
          <div className="h-[296px] max-w-[1220px] mx-auto md:px-5 relative w-full">
            <div className="border-black-900_56 border-solid border-y h-[295px] m-auto w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto md:text-5xl text-[243.8px] text-gray-900_03 w-max"
              size="txtInterBold2438Gray90003"
            >
              THE BLOG
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1440px] w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-8 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                size="txtInterSemiBold24Gray90003"
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
                        Olivia Rhye • 1 Jan 2023
                      </Text>
                      <div className="flex flex-row gap-4 items-start justify-start w-full">
                        <Text
                          className="flex-1 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-auto"
                          size="txtInterSemiBold24Gray90003"
                        >
                          UX review presentations
                        </Text>
                        <Img
                          className="h-7 w-6"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft"
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
                          Phoenix Baker • 1 Jan 2023
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_03 text-lg w-full"
                            size="txtInterSemiBold18Gray90003"
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
                          Lana Steiner • 1 Jan 2023
                        </Text>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-gray-900_03 text-lg w-full"
                            size="txtInterSemiBold18Gray90003"
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
          <div className="bg-white-A700 flex flex-col items-center justify-start py-[30px] w-full">
            <div className="flex flex-col items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-8 h-full items-start justify-start w-full">
                  <Img
                    className="flex-1 md:flex-none h-[246px] sm:h-auto max-h-[246px] object-cover sm:w-[] md:w-[]"
                    src="images/img_image_246x592.png"
                    alt="image_One"
                  />
                  <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-deep_purple-500 text-sm w-full"
                        size="txtInterSemiBold14"
                      >
                        Olivia Rhye • 1 Jan 2023
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                        <Text
                          className="flex-1 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-auto"
                          size="txtInterSemiBold24Gray90003"
                        >
                          Grid system for better Design User Interface
                        </Text>
                        <Img
                          className="h-7 w-6"
                          src="images/img_arrowleft.svg"
                          alt="arrowleft_One"
                        />
                      </div>
                      <Text
                        className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-500"
                        size="txtInterRegular16Bluegray500"
                      >
                        A grid system is a design tool used to arrange content
                        on a webpage. It is a series of vertical and horizontal
                        lines that create a matrix of intersecting points, which
                        can be used to align and organize page elements. Grid
                        systems are used to create a consistent look and feel
                        across a website, and can help to make the layout more
                        visually appealing and easier to navigate.
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
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start py-[30px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
              <div className="flex flex-col gap-8 items-start justify-start max-w-[1216px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                  size="txtInterSemiBold24Gray90003"
                >
                  All blog posts
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
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
                            Alec Whitten • 1 Jan 2023
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-auto"
                              size="txtInterSemiBold24Gray90003"
                            >
                              Bill Walsh leadership lessons
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
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
                            Demi WIlkinson • 1 Jan 2023
                          </Text>
                          <div className="flex flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-auto"
                              size="txtInterSemiBold24Gray90003"
                            >
                              PM mental models
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
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
                            Candice Wu • 1 Jan 2023
                          </Text>
                          <div className="flex flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-auto"
                              size="txtInterSemiBold24Gray90003"
                            >
                              What is Wireframing?
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
                          >
                            Introduction to Wireframing and its Principles.
                            Learn from the best in the industry.
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
                            Natali Craig • 1 Jan 2023
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 leading-[32.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                              size="txtInterSemiBold24Gray90003"
                            >
                              How collaboration makes us better designers
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
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
                            Drew Cano • 1 Jan 2023
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 leading-[32.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                              size="txtInterSemiBold24Gray90003"
                            >
                              Our top 10 Javascript frameworks to use
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
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
                            Orlando Diggs • 1 Jan 2023
                          </Text>
                          <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                            <Text
                              className="flex-1 leading-[32.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                              size="txtInterSemiBold24Gray90003"
                            >
                              Podcast: Creating a better CX Community
                            </Text>
                            <Img
                              className="h-7 w-6"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft"
                            />
                          </div>
                          <Text
                            className="leading-[24.00px] md:max-w-full max-w-sm text-base text-blue_gray-500"
                            size="txtInterRegular16Bluegray500"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 h-[61px] md:h-auto items-center justify-between outline outline-blue_gray-50 pt-5 w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowleft_blue_gray_500.svg"
                      alt="arrowleft_Two"
                    />
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtInterMedium14Bluegray500"
                    >
                      Previous
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium h-10 rounded-lg text-center text-deep_purple-400 text-sm w-10"
                    size="md"
                  >
                    1
                  </Button>
                  <List
                    className="sm:flex-col flex-row gap-0.5 grid grid-cols-6 w-[86%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm w-auto"
                          size="txtInterMedium14Bluegray500"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm w-auto"
                          size="txtInterMedium14Bluegray500"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm w-auto"
                          size="txtInterMedium14Bluegray500"
                        >
                          ...
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm w-auto"
                          size="txtInterMedium14Bluegray500"
                        >
                          8
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm w-auto"
                          size="txtInterMedium14Bluegray500"
                        >
                          9
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 items-center justify-start rounded-lg w-full">
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-3 rounded-lg w-10">
                        <Text
                          className="text-blue_gray-500 text-center text-sm"
                          size="txtInterMedium14Bluegray500"
                        >
                          10
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtInterMedium14Bluegray500"
                    >
                      Next
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowleft_blue_gray_500.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex gap-16 items-center justify-center md:px-5 py-[30px] w-full" />
      </div>
    </>
  );
};

export default LigthModePage;
