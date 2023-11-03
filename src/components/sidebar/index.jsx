import { Box } from "@mantine/core";
import { useState } from "react";
import LinksGroup from "./NavBarLinksGroup";
import { SuperAdminSiderbarData } from "./SidebarData";

export function SideBar({ toggle, opened }) {
  const [globalOpen, setGlobalOpen] = useState("");
  const links = SuperAdminSiderbarData?.map((item, ind) => (
    <LinksGroup
      {...item}
      icon={item.icon}
      key={ind}
      ind={ind + 1}
      showBadge={item?.showBadge}
      link={item.link}
      globalOpen={globalOpen}
      setGlobalOpen={setGlobalOpen}
      toggle={toggle}
    />
  ));
  return (
    <Box
    p="sm"
      style={{
        borderRadius: "20px",
        overflowY: "scroll",
        height:"100%",
        boxShadow: "0px 0px 10px 5px rgb(0,0,0,0.1)",
      }}
    >
      {links}
    </Box>
  );
}
