import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../../utils/Constant';


const VideoCard = ({ video: { id: { videoId }, snippet }}) => {


    return (
        <Card className='video-card' sx={{ width : {sm : '358px', md : '320px' , xs : '100%'} , boxShadow : 0 , borderRadius : '18px' , outline : 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    alt={snippet?.title}
                    sx={{ width: {xs : '100%' , sm : '356px' , md : '320px'}, height: '180px', }}
                    image={snippet?.thumbnails?.high?.url} />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                    <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant='subtitle1' color='#FFF' fontWeight="bold" title={snippet?.title || demoVideoTitle}>
                            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={snippet.channelId? `/channel/${snippet.channelId}` : demoChannelUrl}>
                        <Typography variant='subtitle2' color='gray' fontWeight="bold" title={snippet?.channelTitle || demoChannelTitle}>
                            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                            <CheckCircle sx={{color : 'gray' , fontSize : 12 , ml : '5px'}} />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    )
}

export default VideoCard