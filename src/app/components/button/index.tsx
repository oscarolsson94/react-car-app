import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
}

const BaseButton = styled.button`
  ${tw`
        px-5 
        py-3 
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2 
        border-solid
        focus:outline-none
        transition-all 
        duration-200 
        ease-in-out
        m-1
    `}
`;

export function Button(props: IButtonProps) {}
