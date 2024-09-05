/* eslint-disable @typescript-eslint/no-explicit-any */
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
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../models/schemaValidation/authSchema";
import { Ilogin } from "../../models/interface";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../services/auth";
import { ErrorHandling } from "../../utils/ErrorHandling";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/pageRoutes";

const LoginPage = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: any) => {
      Cookies.set("jwtToken", data.payload.accessToken);
      navigate(PATH.HOME);
      toast({
        title: "Successfully login",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      });
    },
    onError: (error: unknown) => {
      const errorResult = ErrorHandling(error);
      toast({
        title: errorResult,
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Ilogin>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit: SubmitHandler<Ilogin> = async (userCredential) => {
    await loginMutation.mutateAsync(userCredential);
  };

  const passwordVisibilityHandler = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <Card w="28rem" p={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                autoComplete="off"
                isInvalid={errors.username ? true : false}
                {...register("username")}
              />
              <Text textAlign="left" fontSize="xs" p={1} color="danger">
                {errors.username?.message}
              </Text>
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
                  autoComplete="off"
                  isInvalid={errors.password ? true : false}
                  {...register("password")}
                />
                <InputRightElement
                  onClick={passwordVisibilityHandler}
                  cursor="pointer"
                >
                  {isPasswordVisible ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
              </InputGroup>
              <Text textAlign="left" fontSize="xs" p={1} color="danger">
                {errors.password?.message}
              </Text>
            </Box>

            <Text
              fontSize="sm"
              alignSelf="flex-end"
              color="textMuted"
              cursor="pointer"
            >
              Forgot Password?
            </Text>
            <Button
              type="submit"
              w="full"
              isLoading={loginMutation.isPending}
              loadingText="Loading"
            >
              Sign In
            </Button>
          </VStack>
        </CardBody>
      </form>
    </Card>
  );
};

export default LoginPage;
