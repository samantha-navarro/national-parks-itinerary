import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import { Typography } from "@mui/material";

export default function ParksCard ({ park }) {


    return (
        <div>
        <Box key={park.id} 
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
        mt={10}>
        <Link component={RouterLink} to="/activities">
        <Sheet
          variant="outlined"
          sx={{
            display: 'flex',
            gap: 2,
            p: 2,
            minWidth: 300,
            borderRadius: 'sm',
            color: "white",
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
              src={park.image}
              srcSet={park.image}
              alt={park.id}
              />
          </AspectRatio>
          <Box>
            <Typography fontWeight="md"
            >{park.name}</Typography>
            <Typography level="body2">{park.location}</Typography>
          </Box>
        </Sheet>
        </Link>
      </Box>
        </div>
    )
}