import React from 'react';
import {
  Text,
  Box
} from '@chakra-ui/react';
const Section = ({title, description, action})=> {
    return(
        <>
        <Box maxW="50%" mx="auto" display="flex" flexDirection="column">
            <Box textAlign={'center'}>
              <Text fontSize={52} align="center" as="b">
              {title}
              </Text>
              <Text fontSize={18}>
              {description}
              </Text>
            </Box>
            <Box mt={8} mb={16}>
            {action}
            </Box>
          </Box>
        </>
    )
}
export default Section;