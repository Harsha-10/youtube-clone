import { Link } from "react-router-dom"
import {typography,Card,CardContent,CardMedia, Typography} from '@mui/material'
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelTitle,demoChannelUrl } from "../utils/constants"
const VideoCard = ({video}) => {
    const {id:{videoId:videoId},snippet} = video;  //Array destructuring
    return (
        <Card sx={{width:{xs:'100%',sm:'320px',md:'320px'},boxShadow:'none',borderRadius:0}}>
            <Link to={videoId?`/video/${videoId}`:`/video/cV2gBU6hKfY`}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width:{
                        xs:'100%',
                        sm:'320px',
                        md:'320px'
                    },height:180}}
                />
            </Link>
            <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
                <Link to={videoId?`video/${videoId}`:demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
                        {snippet?.title.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
                        {snippet?.channelTitle.slice(0,60) || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard