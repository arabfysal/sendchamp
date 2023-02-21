import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Select,
  Grid,
  GridItem,
  Center,
  Button,
} from '@chakra-ui/react';
import theme from './theme';
import { THEME } from './utils/constants';
import { HeaderComponent } from './components/Header';
// import Pricing from './pages/pricing';
import { MyCard } from './components/Card';
import Section from './components/Section';

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
         <Section
         title="Pricing for every business"
         description="No hidden fees or charges - simple & flexible pricing that fits with your business at any stage."
         action={
          <Box maxH="160px">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem>
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
                </GridItem>
                <GridItem>
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
                </GridItem>
              </Grid>
            </Box>
         }
         />

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
                <MyCard
                  label={item}
                  data={price}
                  currency={selectedCurrency?.name}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          w="100vw"
          p="100px 0"
          px={32}
          mx="auto"
          bg={THEME.SecondaryGray}
        >
          <Section
            title="Sendchamp for Startups"
            description="Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding."
            action={<Center>
              <Button bg={THEME.PrimaryBlue}>Apply Now</Button>
            </Center>}
          />
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
          <Section
            title="Start building better communication experience with Sendchamp"
            description="Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family."
            action={
              <>
                <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                  <GridItem>
                    <Button
                      bg={THEME.PrimaryBlue}
                    >
                      Start for free
                    </Button>
                  </GridItem>
                  <GridItem>
                    <Button
                      bg={THEME.PrimaryBlue}
                    >
                      Talk To Sales
                    </Button>
                  </GridItem>
                </Grid>
              </>
            }
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
