import React from "react";
import { Button } from "flowbite-react";

export function Buttons({ title, handleCount }) {
  return (
    <>
      <Button onClick={handleCount} gradientMonochrome="success">
        {title}
      </Button>
    </>
  );
}
