import { useState,useEffect } from "react"
import { Params, useParams } from "react-router-dom"
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { Box } from "@mui/material"
import {Videos,ChannelCard} from "./";
const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos,setVideos]=useState([]);
  const {id} = useParams();
  useEffect(()=>{
    FetchFromAPI(`channels?.part="snippet&id=${id}`)
      .then((data)=>setChannelDetail(data?.items[0]))
    FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
        <Box>
          <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(225,0,137,1) 0%, rgba(196,5,51,1) 78%)',zIndex:10,height:'200px'}}/>
          <ChannelCard channelDetail={channelDetail} marginTop='-150px' />
        </Box>
        <Box display='flex' p='2'>
          <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelDetail