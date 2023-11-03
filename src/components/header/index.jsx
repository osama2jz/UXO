import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import classes from "./header.module.css";

const Header = () => {
  return (
    <Flex
      bg="#f3f3f3"
      h="70px"
      p="10px"
      justify={"space-evenly"}
      style={{ borderRadius: "10px" }}
    >
      <Text className={classes.tab}>Alta P. Beneficiaria</Text>
      <Text className={classes.tab}>Cita Intervencion</Text>
      <Text className={classes.tab}>Documentos Entidad</Text>
      <Text className={classes.tab}>Reportes</Text>
      <Text className={classes.tab}>Conecta</Text>
    </Flex>
  );
};

export default Header;
