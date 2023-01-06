import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../utils/Constant'
import { ColorExtractor } from 'react-color-extractor'
import { useState } from 'react'


const ChannelCard = ({ channelDetail, marginTop }) => {


  const [colors , setColors] = useState([])


  const getColors = (colors) => {
    setColors(colors)

  }


  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,
      }}
    >
      <div style={{ background: `linear-gradient(90deg, ${colors[1]} 0%, ${colors[0]} 50%, ${colors[2]} 100%)`, zIndex: 10, height: '300px' }}>ChannelCard</div>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            getColors={colors => console.log(colors)}
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}{' '}
            <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard