import React from "react";
import Container from "../../components/Container";
import GrayButton from "../../components/GrayButton";
import Button from "../../components/Button";
import { Box, Flex, Stack, Title } from "@mantine/core";
import SelectMenu from "../../components/SelectMenu";
import { DateInput, DatePicker } from "@mantine/dates";

const MySchedule = () => {
  return (
    <Container>
      {/* <Flex gap="lg">
        <GrayButton label={"My Schedule"} style={{ flex: 1 }} />
        <GrayButton label={"Export"} style={{ flex: 1 }} />
      </Flex> */}
      <Flex my="lg" gap="lg">
        <Stack style={{ flex: 1 }} align="stretch">
          <GrayButton label={"My Schedule"} fullWidth={true} />
          <Container>
            <Stack bg="white" p="lg" style={{ borderRadius: "10px" }}>
              <Title order={3}>Ajustar Horario</Title>
              <SelectMenu label={"Oficina"} data={[]} />
              <SelectMenu label={"Mes"} data={[]} />
              <SelectMenu label={"Dias"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <Button label={"Anadir"} />
            </Stack>
          </Container>
          <Container>
            <Stack bg="white" p="lg" style={{ borderRadius: "10px" }}>
              <Title order={3}>Solicitar Cancelacion</Title>
              <SelectMenu label={"Oficina"} data={[]} />
              <SelectMenu label={"Mes"} data={[]} />
              <SelectMenu label={"Dias"} data={[]} />
              <SelectMenu label={"Horario"} data={[]} />
              <Button label={"Solicitar"} />
            </Stack>
          </Container>
        </Stack>
        <Stack style={{ flex: 1 }} align="stretch">
          <GrayButton label={"Export"} fullWidth={true} />
          <Container styles={{ flex: 1 }}>
            <Box bg="white" h="100%" p="lg" style={{ borderRadius: "10px" }}>
              <Title order={3}>Resulato Mes</Title>
              <DatePicker
                size="xl"
                style={{ width: "100%" }}
                styles={(theme) => ({
                  month: {
                    width: "100%",
                  },
                  calendarHeader: {
                    maxWidth: "100% !important",
                    margin:'auto'
                  },
                  decadeLevel: {
                    width: "100%",
                  },
                  yearLevel: {
                    width: "100%",
                  },
                  yearsList: {
                    width: "100%",
                  },
                  monthLevel: {
                    width: "100%",
                  },
                  monthsList: {
                    width: "100%",
                  },
                  pickerControl: {
                    maxWidth: "100% !important",
                  },
                  day: {
                    width: "100%",
                  },

                })}
              />
            </Box>
          </Container>
        </Stack>
      </Flex>
    </Container>
  );
};

export default MySchedule;
