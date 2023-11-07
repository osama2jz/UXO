import { Flex, Text } from "@mantine/core";
import React from "react";
import GrayButton from "../GrayButton";
import Container from "../Container";
const Header = () => {
  return (
    <Container>
      <Flex
        p={0}
        m={0}
        justify={"space-evenly"}
        gap="md"
        // wrap={'wrap'}
      >
        <GrayButton mih={45} h={45} fz="sm" label={"Alta P. Beneficiaria"} />
        <GrayButton mih={45} h={45} fz="sm" label={"Cita Intervencion"} />
        <GrayButton mih={45} h={45} fz="sm" label={"Documentos Entidad"} />
        <GrayButton mih={45} h={45} fz="sm" label={"Reportes"} />
        <GrayButton mih={45} h={45} fz="sm" label={"Conecta"} />
      </Flex>
    </Container>
  );
};

export default Header;
