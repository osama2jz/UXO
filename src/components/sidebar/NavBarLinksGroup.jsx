import {
  Collapse,
  Flex,
  Group,
  Text,
  UnstyledButton
} from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./styles.module.css";

const LinksGroup = ({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  ind,
  link,
  globalOpen,
  setGlobalOpen,
  toggle,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = ChevronDown;

  useEffect(() => {
    globalOpen !== label && setOpened(false);
  }, [globalOpen, label]);

  const items = (hasLinks ? links : []).map((link, index) => (
    <Flex
      component={Link}
      gap="sm"
      className={classes.link}
      py={"xs"}
      pr="sm"
      pl={50}
      align={"center"}
      to={link.link}
      bg={location.pathname === link.link ? "#f8f8f8" : "white"}
      onClick={() => toggle()}
      key={link.label}
    >
      <Text fw={600}>{link.label}</Text>
    </Flex>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setGlobalOpen(label);
          !hasLinks && toggle();
          if (link) {
            link && navigate(link);
          }
          if (label === "Log Out") {
            localStorage.removeItem("userData");
          }
        }}
        bg={location.pathname === link ? "#f8f8f8" : "white"}
        className={classes.mainLink}
      >
        <Group
          justify="space-between"
          spacing={0}
          px={"sm"}
          py={10}
          onClick={() => link && navigate(link)}
        >
          <Group align="center">
            <Icon size={22} />
            <Text fw={600}>{label}</Text>
          </Group>
          <Group gap={"xs"}>
            {hasLinks && (
              <ChevronIcon
                className={classes.chevron}
                size={12}
                style={{
                  transform: opened ? `rotate(180deg)` : "none",
                }}
              />
            )}
          </Group>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};
export default LinksGroup;
