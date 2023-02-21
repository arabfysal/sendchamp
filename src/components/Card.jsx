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
//import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
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
  //console.log(data);
  return (
    <Card
      w="370px"
      borderWidth="1px"
      borderColor="#aaccf9"
      borderRadius="lg"
      bg="#fff"
      p="40px"
      //px={10}
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
                {currency}{' '}
                {data[label]?.charge ||
                  data[label]?.outgoing ||
                  data[label]?.international ||
                  data?.voice }
                /{label}
              </Text>
            </GridItem>
            <GridItem w="100%">
              <Text fontSize={16}>{MESSAGE[label]['outgoingMessage']}</Text>
              <Tag color={THEME.PrimaryBlue}> { data[label]?.outgoing || data[label]?.charge|| 'Coming Sooon'}</Tag>
            </GridItem>
          </Grid>
        </Box>
      </CardBody>
    </Card>
  );
}
