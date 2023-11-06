import { Select } from "@mantine/core";
import React from "react";

const SelectMenu = ({ data, label, placeholder }) => {
  return <Select data={data} label={label} placeholder={placeholder}/>;
};

export default SelectMenu;
