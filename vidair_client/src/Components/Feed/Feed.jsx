import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from '../';
import { fetchFromApi } from '../../utils/fetchFromApi';





function Feed() {

  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [selectedCategory, SetSelectedCategory] = useState('New');


  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)



  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } , backdropFilter : 'blur(5px);'}}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 },
        backgroundColor: 'black',
        width: '200px'

      }}>
        <SideBar
          selectedCategory={selectedCategory}
          SetSelectedCategory={SetSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 VidAir
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' m={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#2a4589' }}>video</span>
        </Typography>

        <Videos videos={[]} />
      </Box>
    </Stack>
  )
}

export default Feed