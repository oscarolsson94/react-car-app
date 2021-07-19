import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        max-w-2xl 
        flex
        flex-row
        items-center
        justify-between
        lg:px-12
    `}
`;
