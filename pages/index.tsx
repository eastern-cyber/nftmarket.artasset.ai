import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>ArtAsset NFT Market</Heading>
          <Button
             as={NextLink} href='/buy'
          >ArtAsset NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
