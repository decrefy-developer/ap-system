import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { ButtonStyle } from "./componentStylesConfig/ButtonStyle";
import { GlobalStyleProps } from "@chakra-ui/theme-tools";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { InpuStyle } from "./componentStylesConfig/InpuStyle";
import { TextStyle } from "./componentStylesConfig/TextStyle";

const globalStyles = {
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? darkTheme.colors.background
            : lightTheme.colors.background,
        color:
          props.colorMode === "dark"
            ? darkTheme.colors.text
            : lightTheme.colors.text,
        transition: "background-color 0.2s ease-in-out",
      },
    }),
  },
};

const theme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: true,
    ...globalStyles,
    colors: { ...lightTheme.colors },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: ButtonStyle,
      Input: InpuStyle,
      Text: TextStyle
    },
  },
  withDefaultColorScheme({
    colorScheme: "purple",
    components: ["Input", "Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
