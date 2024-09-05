import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyle = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    borderRadius: 4,
    _focus: {
      ring: 2,
      ringColor: "purple.500",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: (props: StyleFunctionProps) => ({
      color: mode("white", "gray.800")(props),

      _focus: {
        ring: 2,
        borderRadius: 6,
        ringColor: "purple.500",
      },

      _hover: {
        backgroundColor: mode("purple.600", "purple.400")(props),
      },

      _active: {
        backgroundColor: mode("purple.700", "purple.500")(props),
      },
    }),
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    colorScheme: "purple",
  },
});
