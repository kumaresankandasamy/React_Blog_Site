import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
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
              <div className="flex flex-col items-start justify-start p-2 w-auto">
                <div className="md:h-7 h-[29px] pb-[5px] relative w-[61px]">
                  <div className="absolute border-b border-solid border-white-A700 h-7 inset-[0] m-auto w-full"></div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-white-A700 text-xl top-[0] w-max"
                    size="txtInterBold20"
                  >
                    About
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-2 w-auto"
                onClick={() => navigate("/newsletter")}
              >
                <div className="flex flex-col items-start justify-start pb-[5px] w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterRegular20WhiteA700"
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
        <div className="bg-gray-900 flex flex-col items-center justify-center max-w-[1440px] py-[30px] w-full">
          <div className="md:h-[271px] h-[272px] max-w-[1216px] mx-auto md:px-5 relative w-full">
            <div className="absolute border-solid border-white-A700 border-y h-[271px] inset-[0] m-auto w-full"></div>
            <Text
              className="absolute h-max inset-[0] m-auto md:text-5xl text-[224px] text-center text-white-A700 w-max"
              size="txtInterBold224"
            >
              John Doe
            </Text>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center max-w-[1440px] py-[30px] w-full">
          <div className="border-solid border-white-A700 border-y flex flex-col items-start justify-start max-w-[1216px] mx-auto md:px-5 w-full">
            <div className="bg-gray-900 flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Img
                  className="h-[556px] md:h-auto object-cover w-full"
                  src="images/img_image_15.png"
                  alt="image"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        About Me
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] max-w-[1216px] md:max-w-full text-base text-blue_gray-200_01"
                      size="txtInterRegular16Bluegray20001"
                    >
                      As a passionate and experienced UI designer, I am
                      dedicated to creating intuitive and engaging user
                      experiences that meet the needs of my clients and their
                      users. I have a strong understanding of design principles
                      and a proficiency in design tools, and I am comfortable
                      working with cross-functional teams to bring projects to
                      fruition. I am confident in my ability to create designs
                      that are both visually appealing and functional, and I am
                      always looking for new challenges and opportunities to
                      grow as a designer.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Skills:
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-200"
                    size="txtInterRegular16"
                  >
                    <>
                      Extensive experience in UI design, with a strong portfolio
                      of completed projects
                      <br />
                      Proficiency in design tools such as Adobe Creative Suite
                      and Sketch
                      <br />
                      Excellent visual design skills, with a strong
                      understanding of layout, color theory, and typography
                      <br />
                      Ability to create wireframes and prototypes to communicate
                      design concepts
                      <br />
                      Strong communication and collaboration skills, with the
                      ability to work effectively with cross-functional teams
                      <br />
                      Experience conducting user research and gathering insights
                      to inform design decisions
                      <br />
                      Proficiency in HTML, CSS, and JavaScript
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Experience:
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-200"
                    size="txtInterRegular16"
                  >
                    <>
                      5 years of experience as a UI designer, working on a
                      variety of projects for clients in the tech and retail
                      industries
                      <br />
                      Led the design of a successful e-commerce website,
                      resulting in a 25% increase in online sales
                      <br />
                      Created wireframes and prototypes for a mobile banking
                      app, leading to a 20% increase in app usage
                      <br />
                      Conducted user research and usability testing to inform
                      the redesign of a healthcare provider&#39;s website,
                      resulting in a 15% increase in website traffic
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Education:
                    </Text>
                  </div>
                  <Text
                    className="leading-[24.00px] text-base text-blue_gray-200"
                    size="txtInterRegular16"
                  >
                    <>
                      Bachelor&#39;s degree in Graphic Design
                      <br />
                      Certified User Experience Designer (CUED)
                    </>
                  </Text>
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

export default AboutPage;
