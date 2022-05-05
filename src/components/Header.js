// @flow
import React from 'react';
import type { Node } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Header(): Node {
  return (
    <Box textAlign="center" margin="auto" maxWidth="400px" mt={3}>
      <Heading fontSize="2xl" as="h1">
        aha
      </Heading>
      <Text marginTop={2}>
        Find the perfect name for your next project. Take inspiration from
        synonyms and translations.
      </Text>
    </Box>
  );
}

export default Header;
