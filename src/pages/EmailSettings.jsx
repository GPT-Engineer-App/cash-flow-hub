import React from 'react';
import { Box, Heading, FormControl, FormLabel, Switch, VStack } from '@chakra-ui/react';

const EmailSettings = () => {
  const [emailEnabled, setEmailEnabled] = React.useState(false);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Email Settings</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Enable email notifications
          </FormLabel>
          <Switch id="email-alerts" isChecked={emailEnabled} onChange={(e) => setEmailEnabled(e.target.checked)} />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default EmailSettings;