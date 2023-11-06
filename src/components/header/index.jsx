import { Flex, Text } from "@mantine/core";
import React from "react";
import GrayButton from "../GrayButton";
import Container from "../Container";
const Header = () => {
  return (
    <Container>
      <Flex p={0} m={0} justify={"space-evenly"}>
        <GrayButton mih={45} h={45} label={"Alta P. Beneficiaria"} />
        <GrayButton mih={45} h={45} label={"Cita Intervencion"} />
        <GrayButton mih={45} h={45} label={"Documentos Entidad"} />
        <GrayButton mih={45} h={45} label={"Reportes"} />
        <GrayButton mih={45} h={45} label={"Conecta"} />
      </Flex>
    </Container>
  );
};

export default Header;
