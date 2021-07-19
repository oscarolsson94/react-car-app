import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
        w-full
        max-w-2xl 
        flex
        flex-row
        items-center
        justify-between
        lg:px-12
    `};
`;

export function Navbar() {
  return <NavbarContainer></NavbarContainer>;
}
