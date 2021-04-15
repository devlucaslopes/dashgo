import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Lopes</Text>
          <Text color="gray.300" fontSize="small">
            lucas@mail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Lopes"
        src="https://github.com/thuram.png"
      />
    </Flex>
  );
}
