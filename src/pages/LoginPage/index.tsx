import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const hasError = true;
  const passwordVisibilityHandler = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <Card w="28rem" p={6}>
      <CardBody>
        <VStack spacing="1rem">
          <Image src="./images/cpi_logo.svg" alt="CPI Logo" boxSize="4rem" />
          <Text fontSize="xl" as="b">
            Maplesoft System
          </Text>
          <Text fontSize="sm" color="text">
            Welcome back! Please login to continue
          </Text>
          <Divider />
          <Box w="full">
            <Text color="textMuted" mb="0.3rem">
              Username
            </Text>
            <Input
              placeholder="John Doe"
              variant="outline"
              isInvalid={hasError || true}
            />
          </Box>
          <Box w="full">
            <Text color="textMuted" mb="0.3rem">
              Password
            </Text>
            <InputGroup size="md">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="******"
                variant="outline"
              />
              <InputRightElement
                onClick={passwordVisibilityHandler}
                cursor="pointer"
              >
                {isPasswordVisible ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
          </Box>
          <Text
            fontSize="sm"
            alignSelf="flex-end"
            color="textMuted"
            cursor="pointer"
          >
            Forgot Password?
          </Text>
          <Button w="full" isLoading={false} loadingText="Loading">
            Sign In
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default LoginPage;
