import { useDisclosure } from "@mantine/hooks";
import { AppShell, Box, Burger, Flex, Image, Text } from "@mantine/core";
import logo from "/logo.png";
import { SideBar } from "../sidebar";
import Header from "../header";
import Aside from "../aside";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 320, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{ width: 370 }}
      padding="md"
    >
      <AppShell.Header
        hiddenFrom="sm"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "5px 30px",
          border: "none",
        }}
      >
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>
      <AppShell.Aside
        style={{ border: "none", overflowY: "scroll" }}
        pr="sm"
        pb="md"
      >
        <Aside />
      </AppShell.Aside>

      <AppShell.Navbar p="md" style={{ border: "none" }}>
        <Image src={logo} w={70} mb="md" />
        <SideBar toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Header />
        <Box my="md" >
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};
export default Layout;
