import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from '../';
import { fetchFromAPI } from "../../utils/fetchFromAPI";




function Feed() {

  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [selectedCategory, SetSelectedCategory] = useState('New');


  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items);
        setLoadingVideos(false);
      })



  }, [selectedCategory])

  return (
    <>
      {loadingVideos ? <div className='spinner-container'><div className="spinner"></div></div> :

        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, backdropFilter: 'blur(5px);' }}>
          <Box sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: '7px' },
            backgroundColor: 'black',
            width: '200px'

          }}>
            <SideBar
              selectedCategory={selectedCategory}
              SetSelectedCategory={SetSelectedCategory}
            />
            <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
              <span color='gray' style={{opacity : ".3" , textAlign : 'center'}}>Copyright 2023 VidAir&#169;</span>
            </Typography>
          </Box>

          <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' m={2} sx={{ color: 'white' }}>
              {selectedCategory} <span style={{ color: '#2a4589' }}>video</span>
            </Typography>

            {loadingVideos ? <div class="spinner"></div> :
              <Videos videos={videos} />
            }
          </Box>
        </Stack>
      }
    </>

  )
}

export default Feed