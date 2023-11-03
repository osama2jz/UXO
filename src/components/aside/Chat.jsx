import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Flex,
  Group,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import { MoreVertical, PlusCircle, Send } from "lucide-react";
import React from "react";

const Chat = () => {
  return (
    <Box
      bg="white"
      p="xs"
      style={{ borderRadius: "10px", height: "100%", position: "relative" }}
    >
      <Group justify="space-between">
        <Flex gap="md">
          <Avatar />
          <Stack gap={0}>
            <Text className="boldText">Maria</Text>
            <Text fz={"9px"}>Linea</Text>
          </Stack>
        </Flex>
        <Flex c="gray">
          <PlusCircle />
          <MoreVertical />
        </Flex>
      </Group>
      <Divider my="sm" />
      <Stack style={{ position: "absolute", bottom: 10, width: "93%" }}>
        <Divider />
        <Flex gap="md">
          <Skeleton h={30} radius={"md"} style={{ flex: 1 }} />
          <ActionIcon bg="#c1c6de" radius={"xl"} size={"md"} p={4}>
            <Send />
          </ActionIcon>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Chat;
