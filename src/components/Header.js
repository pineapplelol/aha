// @flow
import React from 'react';
import type { Node } from 'react';
import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';

function Header(): Node {
  return (
    <VStack maxWidth="400px" mt={3} margin="0 auto">
      <Heading fontSize="2xl" as="h1">
        aha
      </Heading>
      <Text marginTop={2}>
        Find the perfect name for your next project. Take inspiration from
        synonyms and translations.
      </Text>
    </VStack>
  );
}

export default Header;
