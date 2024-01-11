import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex sm:flex-col flex-row gap-3.5 items-start justify-start max-w-[1216px] w-full">
          <Text
            className="text-gray-900_03 text-xl w-auto"
            size="txtInterRegular20"
          >
            © 2023
          </Text>
          <ul className="flex md:flex-1 sm:flex-col flex-row gap-3.5 items-start justify-start w-auto md:w-full common-column-list">
            <li>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtInterRegular20"
              >
                Twitter{" "}
              </Text>
            </li>
            <li>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtInterRegular20"
              >
                LinkedIn
              </Text>
            </li>
            <li>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtInterRegular20"
              >
                Email
              </Text>
            </li>
            <li>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtInterRegular20"
              >
                RSS feed
              </Text>
            </li>
            <li>
              <Text
                className="text-gray-900_03 text-xl"
                size="txtInterRegular20"
              >
                Add to Feedly
              </Text>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
