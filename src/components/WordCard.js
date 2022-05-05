// @flow
import React from 'react';
import type { Node } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

type Props = {
  heading: string,
  identifier?: string,
  description?: string,
};

function WordCard(props: Props): Node {
  const { heading, identifier, description } = props;

  return (
    <Box
      border="1px solid"
      borderColor="gray.100"
      borderRadius="sm"
      overflow="hidden"
      padding={4}
      _hover={{ boxShadow: 'lg', transition: 'box-shadow 200ms ease-in-out' }}
    >
      <Heading as="h5" size="md">
        {heading}
      </Heading>
      {/* <Text>
        <em>{identifier}</em> {description}
      </Text> */}
    </Box>
  );
}

WordCard.defaultProps = {
  identifier: '',
  description: '',
};

export default WordCard;
