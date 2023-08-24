import {useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material';
import Videos from "./Videos";
import { FetchFromAPI } from '../utils/FetchFromAPI';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  const [videos,setVideos]=useState([]);
  const {searchTerm} = useParams();
  useEffect(() =>{ 
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
  },[searchTerm])
  console.log(videos);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
            Search results for: <span style={{color:'#F31503'}}> {searchTerm}</span>
        </Typography>
        <Box display="flex">
          <Box sx={{ mr: { sm: '100px' } }}/>
          {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

export default SearchFeed