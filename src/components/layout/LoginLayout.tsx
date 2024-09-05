import { Center } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <Center h="100vh" bg="onsurface">
      <Outlet />
    </Center>
  );
};

export default LoginLayout;
