"use client";
import React from "react";
import { Item, MainBlock } from "./styles";
import SVGIcon from "@/app/assets/SVGConpnents";

const AnnouncementBar = () => {
  return (
    <MainBlock>
      <Item>
        <SVGIcon
          name="lorem-ipsum-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        />

        <p>Lorem ipsum dolor</p>
      </Item>
      <Item className="second-item">
        <SVGIcon
          name="lorem-ipsum-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        />
        <p>Lorem ipsum dolor</p>
      </Item>
      <Item className="third-item">
        <SVGIcon
          name="lorem-ipsum-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        />

        <p>Lorem ipsum dolor</p>
      </Item>
    </MainBlock>
  );
};

export default AnnouncementBar;
