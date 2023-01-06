import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { ColorExtractor } from 'react-color-extractor'
import hexRgb from 'hex-rgb';
import { Videos, ChannelCard } from '../'
import { fetchFromAPI } from '../../utils/fetchFromAPI'


function ChannelDetail() {

  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => (
        setChannelDetail(data?.items[0])
      ))

    fetchFromAPI(`search?channelId=${id}$part=snippet&order=data`)
      .then((data) => (
        setVideos(data?.items)
      ))

  }, [id]);


  return (
    <Box minHeight='95vh'>
      <Box>
        <div>

        </div>
      </Box>

      <ChannelCard channelDetail={channelDetail} />


    </Box>
  )
}

export default ChannelDetail