import CircularProgress from '@mui/material/CircularProgress';
import './loading.css';
function Loading()
{
    return(
        <div className="Loading"><CircularProgress color="success" /></div>
    )
}
export default Loading;