import React from "react";
import classes from "./header.module.css";
import { Text, UnstyledButton } from "@mantine/core";

const GrayButton = ({ label, fullWidth, ...props }) => {
  return (
    <UnstyledButton
      className={classes.tab}
      mih={"50px"}
      {...props}
      fw="500"
      w={fullWidth && "100%"}
    >
      {label}
    </UnstyledButton>
  );
};

export default GrayButton;
