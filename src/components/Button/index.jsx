import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    white_A700_b2: "bg-white-A700_b2 text-gray-900_02",
    deep_purple_400: "bg-deep_purple-400 shadow-bs text-white-A700",
    red_50_01: "bg-red-50_01 text-pink-700",
    gray_50: "bg-gray-50 text-deep_purple-500",
    gray_50_03: "bg-gray-50_03 text-blue_gray-700",
    gray_50_02: "bg-gray-50_02 text-light_blue-900",
    red_50: "bg-red-50 text-deep_orange-900",
    blue_50: "bg-blue-50 text-indigo-500",
    gray_50_01: "bg-gray-50_01 text-pink-A700",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[7px]",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[30px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700_b2",
    "deep_purple_400",
    "red_50_01",
    "gray_50",
    "gray_50_03",
    "gray_50_02",
    "red_50",
    "blue_50",
    "gray_50_01",
  ]),
};

export { Button };
