// @flow
import React from 'react';
import type { Node } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  heading: string,
  identifier?: string,
  description?: string,
};

function WordCard(props: Props): Node {
  const { heading, identifier, description } = props;

  return (
    <Box boxShadow="2xl" borderWidth="2px" borderRadius="lg" overflow="hidden">
      <h2>{heading}</h2>
      <p>
        <em>{identifier}</em> {description}
      </p>
    </Box>
  );
}

WordCard.defaultProps = {
  identifier: '',
  description: '',
};

export default WordCard;
