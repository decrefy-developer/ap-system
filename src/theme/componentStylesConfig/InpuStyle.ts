import { defineStyleConfig } from "@chakra-ui/react";

export const InpuStyle = defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "purple.500",
        },
        _active: {
          borderColor: "purple.500",
        },
      },
    },
    outline: {
      field: {
        _focus: {
          borderColor: "purple.500",
          borderWidth: "2px",
          boxShadow: "none",
        },
      },
    },
  },
  defaultProps: {},
});
