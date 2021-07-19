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
    `}
`;

export function TopSection() {}
