import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CountryCard = ({name, flag, handler}) => {



  return (
  <Card className='card' onClick={handler} >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{aspectRatio: 16/9}}
          image={flag}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
