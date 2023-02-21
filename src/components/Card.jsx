import React from 'react';
import {
  Card,
  Grid,
  CardBody,
  GridItem,
  //Button,
  Box,
  Text,
  Tag,
} from '@chakra-ui/react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { THEME } from '../utils/constants';

const MESSAGE = {
  sms: {
    incomingMessage: 'To Send SMS',
    outgoingMessage: 'To Receive SMS',
  },
  voice: {
    incomingMessage: 'To Make Calls',
    outgoingMessage: 'To Receive Calls',
  },
  whatsapp: {
    incomingMessage: 'To Send Message',
    outgoingMessage: 'To Receive Message',
  },
  email: {
    incomingMessage: 'Price Per Email',
    outgoingMessage: '',
  },
  verification: {
    incomingMessage: 'To Send OTP',
    outgoingMessage: 'To Confirm OTP',
  },
};

export function MyCard({ data, label, currency }) {
  const getPrice = (item, option) => {
    switch (item) {
      case 'voice':
        return { incoming: 'Coming Soon', outgoing: data[label], unit: 'sec' };
      case 'whatsapp':
        return {
          incoming: data[label]?.incoming,
          outgoing: data[label]?.outgoing,
          unit: 'msg',
        };
      case 'sms':
        return {
          incoming: 'Coming Soon',
          outgoing: data[label]?.international,
          unit: 'sms',
        };
      case 'email':
        return { incoming: '', outgoing: data[label]?.charge, unit: 'email' };
      case 'verification':
        return { incoming: data[label]?.charge, outgoing: 0, unit: 'OTP' };
      default:
        break;
    }
  };
  return (
    <Card
      w="370px"
      borderWidth="1px"
      borderColor="#aaccf9"
      borderRadius="lg"
      bg="#fff"
      p="40px"
    >
      <CardBody color={'black'}>
        <Box display="flex" flexDirection="column">
          <FaWhatsappSquare size={64} color={THEME.PrimaryBlue} />
          <Text
            mt={2}
            fontWeight="bold"
            fontSize="lg"
            color={'black'}
            textTransform={label === 'sms' ? 'uppercase' : 'capitalize'}
          >
            {label}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text fontSize={15}>{MESSAGE[label]['incomingMessage']}</Text>
              {console.log(data[label])}
              <Text fontSize={15}>
                {currency} {getPrice(label)?.outgoing}/{getPrice(label)?.unit}
              </Text>
            </GridItem>
            <GridItem w="100%">
              {label !== 'email' ? (
                <>
                  <Text fontSize={16}>{MESSAGE[label]['outgoingMessage']}</Text>
                  {getPrice(label).incoming === 'Coming Soon' ? (
                    <Tag color={THEME.PrimaryBlue}>Coming Soon</Tag>
                  ) : (
                    <Text>
                      {getPrice(label).incoming}/{getPrice(label)?.unit}
                    </Text>
                  )}
                </>
              ) : null}
            </GridItem>
          </Grid>
        </Box>
      </CardBody>
    </Card>
  );
}
