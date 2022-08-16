// import React from "react";
import { React, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { Grid, Typography } from '@mui/material';
import NavBar from './NavBar';

export default function Parks () {

  

    return (
      <>
      <NavBar />
        <Grid style={{ display: "inline-block", backgroundImage: "url(https://rockalittletravel.com/wp-content/uploads/2020/09/Sunrise-at-Tunnel-View-Yosemite.jpg?ezimgfmt=ng:webp/ngcb21)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        position: "absolute", 
        backgroundRepeat: "no-repeat", 
        }}>
        <Typography variant="h1" mt={20} align="center">
            National Parks Service
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={10}>
        <Sheet
          variant="outlined"
          sx={{
            display: 'flex',
            gap: 2,
            p: 2,
            minWidth: 300,
            borderRadius: 'sm',
          }}
        >
          <AspectRatio
            sx={{
              flexBasis: "250px",
              borderRadius: 'sm',
              overflow: 'auto',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt=""
            />
          </AspectRatio>
          <Box>
            <Typography fontWeight="md">Yosemite National Park</Typography>
            <Typography level="body2">California, USA</Typography>
          </Box>
        </Sheet>
      </Box>
      </Grid>
      </>
    )
}