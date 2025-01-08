import React from 'react'
import { Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons';

const UserBadgeItem = ({user, handleFunction}) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      className='userbadgeitem'
      fontSize={12}
      cursor="pointer"
      onClick={handleFunction}
    >
        {user.name}
        <CloseIcon pl={1} ml="2px"/>
    </Box>
  );
}

export default UserBadgeItem