import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Select,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import theme from './theme';
import { THEME } from './utils/constants';
import { HeaderComponent } from './components/Header';
// import Pricing from './pages/pricing';
import { MyCard } from './components/Card';

function App() {
  const [countries, setCountries] = useState([]);
  const [price, setPricing] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState([]);

  useEffect(() => {
    fetch('https://api.sendchamp.com/api/v1/country').then(res =>
      res
        .json()
        .then(data => setCountries(data?.data))
        .catch(err => console.log(err))
    );
  }, []);

  useEffect(() => {
    if (selectedCurrency.name && selectedCurrency.alPha3 && selectedCountry) {
      fetch(
        `https://api.sendchamp.com/api/v1/pricing/${selectedCountry}/${selectedCurrency.name}/${selectedCurrency.alPha3}`
      ).then(res =>
        res
          .json()
          .then(data => setPricing(data?.data))
          .catch(err => console.log(err))
      );
    }
  }, [selectedCountry, selectedCurrency]);

  const handleChange = (e, changeType) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = {
      code: countries[selectedIndex - 1].short_code,
      name: countries[selectedIndex - 1].currency,
      alPha3: countries[selectedIndex - 1].alpha3,
    };
    if (changeType === 'country') {
      setSelectedCountry(selectedOption?.code);
    }
    if (changeType === 'currency') {
      setSelectedCurrency(selectedOption);
    }
  };
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Box w="84vw" mx="auto" bg="">
          <HeaderComponent />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          w="100vw"
          p="100px 0"
          px={32}
          mx="auto"
          bg={THEME.PrimaryGray}
        >
          <Box maxW="50%" mx="auto" display="flex" flexDirection="column">
            <Box textAlign={'center'}>
              <Text fontSize={52} align="center" as="b">
                Pricing for every business{' '}
              </Text>
              <Text fontSize={18}>
                No hidden fees or charges - simple & flexible pricing that fits
                with your business at any stage.
              </Text>
            </Box>
            <Box maxH="160px">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Select
                maxH="150px"
                overflowY="scroll"
                  bg="#fff"
                  placeholder="Select Country"
                  onChange={e => handleChange(e, 'country')}
                >
                  {countries?.map(c => (
                    <option
                      value={{
                        name: c?.name,
                        currency: c?.currency,
                        shortCode: c?.shortCode,
                      }}
                    >
                      {c?.name}
                    </option>
                  ))}
                </Select>
                <Select
                  bg="#fff"
                  placeholder="Select Currency"
                  onChange={e => handleChange(e, 'currency')}
                >
                  {countries?.map(c => (
                    <option
                      value={{
                        name: c?.name,
                        currency: c?.currency,
                        shortCode: c?.shortCode,
                      }}
                    >
                      {c?.name} - {c?.currency}
                    </option>
                  ))}
                </Select>
              </Grid>
            </Box>
          </Box>
          
          {/* <Pricing/> */}
        </Box>
        <Box
         display="flex"
         flexDirection="column"
         w="100vw"
         p="100px 0"
         px={32}
         mx="auto"
         bg="#fff"
         >
          <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={20}>
            {Object?.keys(price)?.map(item => (
              <GridItem w="100%">
                <MyCard label={item} data={price[item]} />
              </GridItem>
            ))}
          </Grid>
          {/* second section */}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
