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

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl 
        text-black
        mb-4
        sm:text-3xl 
        sm:leading-snug
        md:text-5xl
        md:font-extrabold
        lg:font-black
        lg:leading-normal
        xl:text-6xl 
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
  ${tw`
        text-xs
        text-grey-800
        overflow-hidden
        max-h-12
        sm:max-h-full
        lg:text-sm
        xl:text-lg
    `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Cars Available With Us</Slogan>
        <Description>
          Always choose the best cars from our local stores, or order it
          remotely, always at the best possible price for you and for as long as
          you like
        </Description>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src="" alt="" />
        </BlobContainer>
        <StandaloneCar>
          <img src="" alt="" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
