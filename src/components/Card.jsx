import React from 'react';
import {
  Card,
  Grid,
  CardBody,
  GridItem,
  Button,
  Box,
  Text,
  Icon,
  Tag,
} from '@chakra-ui/react';
//import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FaWhatsappSquare } from 'react-icons/fa';
import { THEME } from '../utils/constants';

export function MyCard({ data, label }) {
  console.log(data?.charge);
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
        <FaWhatsappSquare size={64} color={THEME.PrimaryBlue}/>
          <Text mt={2} fontWeight="bold" fontSize="lg" color={'black'}>
            {label}
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <GridItem w="100%">
              <Text fontSize={15}>To Send SMS</Text>
              <Text fontSize={15}>MYR 0.2927/sms</Text>
            </GridItem>
            <GridItem w="100%">
              <Text fontSize={16}>To Send SMS</Text>
              <Tag>Coming Soon</Tag>
            </GridItem>
          </Grid>
        </Box>
        {/* <Icon as={<FaHeart/>} bg="red"/> */}
      </CardBody>
    </Card>
  );
}
