import { Box } from "@mantine/core";
import React from "react";

const Container = ({children, styles, p="md"}) => {
  return (
    <Box bg="#f3f3f3" p={p} style={{ borderRadius: "10px", ...styles }}>
      {children}
    </Box>
  );
};

export default Container;
