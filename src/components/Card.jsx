import React from 'react';
import {
  Card,
  Grid,
  CardBody,
  GridItem,
  Box,
  Text,
  Tag,
  CardFooter,
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

export function PriceCard({ data, label, currency }) {
  const getPrice = item => {
    switch (item) {
      case 'voice':
        return {
          incoming: 'Coming Soon',
          outgoing: data[label],
          unit: 'sec',
        };
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
      h="360px"
      borderWidth="1px"
      borderColor="#aaccf9"
      borderRadius="lg"
      bg="#fff"
    >
      <CardBody color="black">
        <Box display="flex" flexDirection="column" p="10px">
          <FaWhatsappSquare size={64} color={THEME.PrimaryBlue} />
          <Text
            my={4}
            fontWeight="bold"
            fontSize="lg"
            color={'black'}
            textTransform={label === 'sms' ? 'uppercase' : 'capitalize'}
          >
            {label}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text mb={4} fontSize={15}>{MESSAGE[label]['incomingMessage']}</Text>
              <Text fontSize={15} as="b">
                {currency} {getPrice(label)?.outgoing}
              </Text>
              <span>/{getPrice(label)?.unit}</span>
            </GridItem>
            <GridItem w="100%">
              {label !== 'email' ? (
                <>
                  <Text mb={4} fontSize={16}>{MESSAGE[label]['outgoingMessage']}</Text>
                  {getPrice(label).incoming === 'Coming Soon' ? (
                    <Tag color={THEME.PrimaryBlue}>Coming Soon</Tag>
                  ) : (
                    <>
                      <Text as="b">{getPrice(label).incoming}</Text>
                      <span>/{getPrice(label)?.unit}</span>
                    </>
                  )}
                </>
              ) : null}
            </GridItem>
          </Grid>
        </Box>
      </CardBody>
      {(label === 'sms' || label === 'whatsapp') && (
        <CardFooter borderTop="1px" borderColor="#aaccf9">
          <Box w="100%" h="40px" mx="auto">
            <Text
              color={THEME.PrimaryBlue}
              textDecoration="underline"
              textAlign="center"
              cursor="pointer"
              fontSize="xl"
            >
              More Details
            </Text>
          </Box>
        </CardFooter>
      )}
    </Card>
  );
}
