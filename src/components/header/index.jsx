import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <Flex
      bg="#f3f3f3"
      h="70px"
      p="10px"
      justify={"space-between"}
      style={{ borderRadius: "10px" }}
    >
      <Text className={classes.tab}>Some Text Here</Text>
      <Text className={classes.tab}>Some Text Here</Text>
      <Text className={classes.tab}>Some Text Here</Text>
      <Text className={classes.tab}>Some Text Here</Text>
      <Text className={classes.tab}>Some Text Here</Text>
    </Flex>
  );
};

export default Header;
