import React from "react";
import Container from "../../components/Container";
import GrayButton from "../../components/GrayButton";
import Button from "../../components/Button";
import {
  ActionIcon,
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import SelectMenu from "../../components/SelectMenu";
import { DateInput, DatePicker } from "@mantine/dates";
import { MoreVertical } from "lucide-react";

const Connect = () => {
  return (
    <Container>
      <Flex my="lg" gap="lg">
        <Stack style={{ flex: 1 }} align="stretch">
          <GrayButton label={"UXO Connect"} fullWidth={true} />
          <Container>
            <Stack bg="white" p="xl" style={{ borderRadius: "10px" }}>
              <Title order={3}>Filters Something</Title>
              <SelectMenu label={"Oficina"} data={[]} />
              <SelectMenu label={"Mes"} data={[]} />
              <SelectMenu label={"Dias"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <Stack
                gap={"xs"}
                p="md"
                style={{
                  border: "1px solid rgb(0,0,0,0.1)",
                  borderRadius: "10px",
                }}
              >
                <Title order={5}>Connect UXO</Title>
                <Flex justify={"space-between"}>
                  <Avatar size={"lg"} />
                  <Avatar size={"lg"} />
                  <Avatar size={"lg"} />
                  <Avatar size={"lg"} />
                  <Avatar size={"lg"} />
                </Flex>
              </Stack>
            </Stack>
          </Container>
        </Stack>
        <Stack style={{ flex: 1 }} align="stretch">
          <GrayButton label={"Export"} fullWidth={true} />
          <Container styles={{ flex: 1 }}>
            <Stack bg="white" h="100%" p="xl" style={{ borderRadius: "10px" }}>
              <Flex justify={"space-between"}>
                <Box>
                  <Title order={3}>Professional</Title>
                  <Text>Fundacion Moixo</Text>
                </Box>
                <MoreVertical cursor={"pointer"} size={30} />
              </Flex>
              <Flex gap={"md"} align={"center"}>
                <Avatar size={"xl"} />
                <Box>
                  <Text fw={"bold"} fz="xl">
                    {" "}
                    Laura Sanchez
                  </Text>
                  <Text> Trabajadora Social</Text>
                </Box>
              </Flex>
              <Text fw="bold" fz="xl">
                Experta:
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex aliquam erat volutpat. Ut wisi enim ad minim veniam,
                quis nostrud exerci tation ullamcorper suscipit
              </Text>
              <Textarea label="¿Quieres Contactar?" rows={4} />
              <Button label={"Solicitar Contacto"} />
              <Button label={"Cancelar Contacto"} />
            </Stack>
          </Container>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Connect;
