import React from "react";
import {
    Box,
    Button
  } from '@chakra-ui/react';

export function HeaderComponent(){
    return(
        <Box display="flex" pt={5}>
            <img alt="sendchamp" src="https://res.cloudinary.com/sendchamp/image/upload/v1647472661/Sendchamp%20Website/logos/NavLogo_nhyqah.svg"/>
            <Box/>
            <Button>Product</Button>
            <Button>Developers</Button>
            <Button>Company</Button>
            <Button>Use Cases</Button>
            <Button>Pricing</Button>
            <Box>
                <Button>Login</Button>
                <Button>get Started</Button>
                <span role="img">🇳🇬</span>
            </Box>
        </Box>
    )
}