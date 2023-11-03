import {
  ActionIcon,
  Avatar,
  Box,
  Center,
  Flex,
  Stack,
  Text,
} from "@mantine/core";
import {
  Clipboard,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Pin,
  User,
  UserSquare,
} from "lucide-react";
import React from "react";
import styles from "./aside.module.css";
import Button from "../Button";
import Container from "../Container";
import Chat from "./Chat";

const Aside = () => {
  return (
    <Stack gap={"xs"} h="100%">
      <Flex py="md" gap={"xs"}>
        <ActionIcon
          bg="#f3f3f3"
          c={"blue"}
          size={"70px"}
          style={{ borderRadius: "10px" }}
        >
          <Clipboard />
        </ActionIcon>
        <ActionIcon
          bg="#f3f3f3"
          c={"blue"}
          size={"70px"}
          style={{ borderRadius: "10px" }}
        >
          <UserSquare />
        </ActionIcon>
        <Container p="sm" styles={{ flex: 1 }}>
          <Flex
            bg="white"
            gap="sm"
            p="xs"
            w={"100%"}
            justify={"space-evenly"}
            align={"center"}
            style={{ borderRadius: "10px" }}
          >
            <Home color="#c1c6de" cursor={"pointer"} />
            <MessageCircle color="#c1c6de" cursor={"pointer"} />
            <User color="#c1c6de" cursor={"pointer"} />
          </Flex>
        </Container>
      </Flex>
      <Stack>
        <Container>
          <Box bg="white" style={{ borderRadius: "10px" }} p="md">
            <Text className={"boldText"}>Proxima Cita</Text>
            <Flex justify={"space-between"} align={"center"} gap={"sm"}>
              <Stack justify="center" align="center" gap={3}>
                <Avatar size={80} />
                <Text className={"boldText"}>Maria Glz</Text>
              </Stack>
              <Stack gap={3}>
                <Text className={styles.info}>
                  <Mail size={"12"} /> maria@gmail.com
                </Text>
                <Text className={styles.info}>
                  <Phone size={"12"} /> +01234567989
                </Text>
                <Text className={styles.info}>
                  <MapPin size={"12"} /> Paeso de la Castellana
                </Text>
              </Stack>
              <Box className={styles.date}>
                <Text fz="xs">Lunes</Text>
                <Text fz="30px" fw="bold">
                  14
                </Text>
                <Text fz="6px">something, 2023</Text>
              </Box>
            </Flex>
            <Flex justify={"space-between"} gap="sm" mt="sm">
              <Button
                label={"Iniciar Cita"}
                size={"compact-md"}
                fz="xs"
                style={{ flex: 1 }}
              />
              <Button
                label={"Cancelar Cita"}
                size={"compact-md"}
                fz="xs"
                style={{ flex: 1 }}
              />
              <Button
                label={"UXO Chat"}
                size={"compact-md"}
                fz="xs"
                style={{ flex: 1 }}
              />
            </Flex>
          </Box>
        </Container>
        <Container>
          <Flex
            bg="white"
            p="sm"
            justify={"space-between"}
            align={"center"}
            style={{ borderRadius: "10px" }}
          >
            <Text
              fz="8px"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
            >
              UXO ECO
            </Text>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </Flex>
        </Container>
        <Container>
          <Flex
            bg="white"
            p="sm"
            justify={"space-between"}
            align={"center"}
            style={{ borderRadius: "10px" }}
          >
            <Text
              fz="8px"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
            >
              UXO ECO
            </Text>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </Flex>
        </Container>
        <Container>
          <Flex
            bg="white"
            p="sm"
            justify={"space-between"}
            align={"center"}
            style={{ borderRadius: "10px" }}
          >
            <Text
              fz="8px"
              style={{
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
            >
              UXO ECO
            </Text>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </Flex>
        </Container>
        <Container
          styles={{
            height: "400px",
            // position: "absolute",
            // bottom: 0,
            // width: "98%",
          }}
        >
          <Chat />
        </Container>
      </Stack>
    </Stack>
  );
};

export default Aside;
