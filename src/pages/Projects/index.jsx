import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";

const ProjectsPage = () => {
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
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <Text
                  className="border-b border-solid border-white-A700 py-0.5 text-white-A700 text-xl w-auto"
                  size="txtInterBold20"
                >
                  Projects
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[73px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/about")}
                size="sm"
              >
                About
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer min-w-[120px] text-center text-white-A700 text-xl"
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
        <div className="bg-gray-900 flex flex-col items-center justify-center max-w-[1440px] py-[30px] w-full">
          <div className="h-[275px] max-w-[1216px] mx-auto md:px-5 relative w-full">
            <div className="border-solid border-white-A700 border-y h-[274px] m-auto w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto md:text-5xl text-[227px] text-center text-white-A700 w-max"
              size="txtInterBold227"
            >
              PROJECTS
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1440px] py-[30px] w-full">
          <div className="flex flex-col gap-8 items-start justify-start max-w-7xl mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
              size="txtInterSemiBold24"
            >
              List Project
            </Text>
            <List
              className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
                <Img
                  className="h-[330px] md:h-auto object-cover w-full"
                  src="images/img_image_330x592.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Text
                        className="flex-1 leading-[32.00px] max-w-[552px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        User Experience Design Dashboard Hotel Management
                      </Text>
                      <Img
                        className="h-7 w-6"
                        src="images/img_iconwrap.svg"
                        alt="iconwrap"
                      />
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      n the context of user experience (UX) design, a hotel
                      management dashboard should be designed with the needs and
                      goals of the hotel staff in mind. This means creating a
                      clear and intuitive interface that allows staff to easily
                      access and use the various tools and features of the
                      dashboard.
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
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_image_14.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Text
                        className="flex-1 leading-[32.00px] max-w-[552px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        Bring of User Experience Design to Policy Making, How to
                        Impact Society
                      </Text>
                      <Img
                        className="h-7 w-6"
                        src="images/img_iconwrap.svg"
                        alt="iconwrap"
                      />
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      User experience (UX) design is a discipline that focuses
                      on creating products and services that are easy to use,
                      efficient, and enjoyable for users. In the context of
                      policy making, UX design can be used to create policies
                      that are effec
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
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
            </List>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-8 h-full items-start justify-start w-full">
                <Img
                  className="h-[556px] md:h-auto object-cover w-full"
                  src="images/img_image_556x1216.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                      <Text
                        className="flex-1 leading-[32.00px] max-w-[1176px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtInterSemiBold24"
                      >
                        UX review presentatiBringing Design Process to Teams,
                        How to Solve User Problems with Data & Inclusive
                        Collaboration Designons
                      </Text>
                      <Img
                        className="h-7 w-6"
                        src="images/img_iconwrap.svg"
                        alt="iconwrap"
                      />
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[1216px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      There are many different design processes that can be
                      followed when creating a hotel management dashboard. Here
                      are some tips for bringing a design process to teams and
                      using data and inclusive collaboration to solve user
                      problems
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Button
                        className="cursor-pointer font-medium min-w-[110px] text-center text-sm"
                        shape="round"
                        color="blue_50"
                        size="xs"
                        variant="fill"
                      >
                        Collaboration
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_image_378x592.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Text
                        className="flex-1 text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        Icon Package of Slin Icon
                      </Text>
                      <Img
                        className="h-7 w-6"
                        src="images/img_iconwrap.svg"
                        alt="iconwrap"
                      />
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
                    >
                      An icon package is a collection of icons that can be used
                      in various design projects, such as website design, app
                      development, and graphic design.
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
                      <Text
                        className="bg-blue-50 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-indigo-500 text-sm w-auto"
                        size="txtInterMedium14Indigo500"
                      >
                        Branding
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="bg-gray-50_01 justify-center px-2.5 py-[3px] rounded-[12px] text-center text-pink-A700 text-sm w-auto"
                        size="txtInterMedium14PinkA700"
                      >
                        Identity
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-8 h-full items-start justify-start w-full">
                <Img
                  className="h-[378px] md:h-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
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
                      className="leading-[24.00px] max-w-[592px] md:max-w-full text-base text-blue_gray-200"
                      size="txtInterRegular16"
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
            </List>
          </div>
        </div>
        <Footer className="bg-gray-900 flex gap-16 items-center justify-center md:px-5 py-[30px] w-full" />
      </div>
    </>
  );
};

export default ProjectsPage;
