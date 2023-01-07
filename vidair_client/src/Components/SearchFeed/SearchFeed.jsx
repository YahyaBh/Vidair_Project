import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { Videos } from '../';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from "../../utils/fetchFromAPI";




function SearchFeed() {

  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const { searchTerm } = useParams();


  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
        setLoadingVideos(false);
      })



  }, [searchTerm])

  return (
    <>
      {loadingVideos ? <div className='spinner-container'><div className="spinner"></div></div> :

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant='h4' fontWeight='bold' m={2} sx={{ color: 'white' }}>
            Search Results For : <span style={{ color: '#2a4589' }}>{searchTerm}</span>
          </Typography>

          {loadingVideos ? <div class="spinner"></div> :
            <Videos videos={videos} />
          }
        </Box>
      }
    </>

  )
}

export default SearchFeed