import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Orders from './Orders';
import { TotalCustomers } from './total-customers';
import { countUser } from '../../slices/userSlice';
import { useDispatch,useSelector} from 'react-redux';
import { useState,useEffect  } from 'react';
const Dashboard = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(countUser())
      },[dispatch])
      const count=useSelector(state=>state.userReducer.count)
    return (

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                 <TotalCustomers Count={count}/>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
    )
}

export default Dashboard;
