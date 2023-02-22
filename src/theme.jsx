import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
        color: 'gray.800',
        bg: '#fff',
        margin: 0,
        padding: 0,
      },
    },
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    heading: 'DM Sans, sans-serif',
  },
});

export default theme;
