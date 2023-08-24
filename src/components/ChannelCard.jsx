import {Box,CardContent,CardMedia,Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({channelDetail,marginTop}) => {
    return (
        <Box sx={{boxShadow:'none',borderRadius:'20px',justifyContent:'center',alignItems:'center',width:{xs:'356px',md:'320px'},margin:'auto',height:'326px',marginTop}}>
            <Link to={`channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}>
                    <CardMedia
                        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channelDetail?.snippet?.title}
                        sx={{borderRadius:'50%',height:'220px',width:'220px',ml:'32px',border:'1px solid #e3e3e3'}}
                    />
                    <Typography variant='h6' sx={{mt:'15px'}}>
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard