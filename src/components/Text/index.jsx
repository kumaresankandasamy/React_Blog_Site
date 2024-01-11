import React from "react";

const sizeClasses = {
  txtInterMedium14Indigo500: "font-inter font-medium",
  txtInterBold244: "font-bold font-inter",
  txtInterBold224: "font-bold font-inter",
  txtInterMedium14Lightblue900: "font-inter font-medium",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold227: "font-bold font-inter",
  txtInterMedium14PinkA700: "font-inter font-medium",
  txtInterRegular20WhiteA700: "font-inter font-normal",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium14Gray200: "font-inter font-medium",
  txtInterMedium14Bluegray700: "font-inter font-medium",
  txtInterMedium14Bluegray500: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterSemiBold20WhiteA700: "font-inter font-semibold",
  txtInterSemiBold18Gray90003: "font-inter font-semibold",
  txtInterSemiBold24Gray90003: "font-inter font-semibold",
  txtInterRegular16Bluegray20001: "font-inter font-normal",
  txtInterBold18: "font-bold font-inter",
  txtInterBold2438: "font-bold font-inter",
  txtInterRegular16Bluegray500: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterBold36: "font-bold font-inter",
  txtGilroyBold86: "font-bold font-gilroy",
  txtInterBold16: "font-bold font-inter",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterBold2438Gray90003: "font-bold font-inter",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium14Teal800: "font-inter font-medium",
  txtInterRegular20Bluegray200: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
