import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl 
        flex
        justify-between
        px-3
        lg:px-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2 
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2 
        flex
        flex-col
        relative
        mt-20
    `};
`;

export function TopSection() {}
