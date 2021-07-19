import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `};
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl 
        font-bold
        text-black
        m-1
    `};
`;

export function Logo() {}
