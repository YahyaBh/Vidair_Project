import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';


import { Navbar, Feed , SearchFeed , VideoDetail , ChannelDetail} from './Components/index';


function App() {
  return (
    <Fragment>

      <Box sx={{ backgroundColor: "#a890b0" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Feed />} exact />
          <Route path="/video/:id" element={<VideoDetail />} exact />
          <Route path="/channel/:id" element={<ChannelDetail />} exact />
          <Route path="/search/:searchTerm" element={<SearchFeed />} exact />

        </Routes>
      </Box>


    </Fragment>
  )
}

export default App