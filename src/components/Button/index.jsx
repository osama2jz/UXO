import { Button as MantineButton } from "@mantine/core";

const Button = ({ label, variant = "gradient", radius, ...props }) => {
  return (
    <MantineButton
      variant={variant}
      radius="lg"
      gradient={{ from: "#f50192", to: "#03249a", deg: 90 }}
      {...props}
    >
      {label}
    </MantineButton>
  );
};

export default Button;
