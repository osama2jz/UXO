import { Box } from "@mantine/core";
import React from "react";

const Container = ({ children, styles, p = "md" }) => {
  return (
    <Box
      bg="#f3f3f3"
      p={p}
      style={{
        borderRadius: "10px",
        boxShadow: "2px 2px 10px 1px rgb(0,0,0,0.2)",
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
