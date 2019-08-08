import { storiesOf } from "@storybook/react";
import React from "react";
import { MemoryRouter } from "react-router";
import FooterBottom from "./FooterBottom";

const stories = storiesOf("modules/Footer/FooterBottom", module);

stories.add("default", () => (
  <MemoryRouter>
    <FooterBottom />
  </MemoryRouter>
));
