import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
