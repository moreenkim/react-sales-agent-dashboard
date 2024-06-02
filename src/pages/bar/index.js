import {Box} from '@mui/material'
import Header from '../../components/Header';
import BarGraph from '../../components/charts/BarGraph';

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Graph"/>

            <Box height="75vh">
                <BarGraph/>
            </Box>
        </Box>
    )
}

export default Bar;