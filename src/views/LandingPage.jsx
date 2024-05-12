import Grid from '@mui/material/Grid'
import Profile from '../components/Profile'
import Information from '../components/Information'

const LandingPage = () => {
    return (
        <>
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <Profile></Profile>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Information></Information>
                </Grid>
            </Grid>
        </>
    )
}

export default LandingPage
