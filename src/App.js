import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import theme from './theme';
import { HeaderComponent } from './components/Header';
import Pricing from './pages/pricing';

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Box w="84vw" mx="auto">
          <HeaderComponent />
        </Box>
        <Pricing />
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
