import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from '../../utils/Constant';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    // const

    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    alt={snippet?.title}
                    sx={{
                        width: '357',
                        height: '180',
                    }}
                    image={snippet?.thumbnails?.high?.url} />
            </Link>
        </Card>
    )
}

export default VideoCard