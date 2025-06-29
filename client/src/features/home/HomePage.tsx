import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import Diversity3Icon from '@mui/icons-material/Diversity3';
export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}
    >
      <Box sx={{
        display: 'flex', alignItems: 'center', alignContent: 'center', 
        color: 'white', gap: 3}}
      >
        
        <Diversity3Icon sx={{height: 110, width: 110}} />
        <Typography variant="h1">
          MeetUp
        </Typography>
      </Box>
      <Typography variant="h2">
        Welcome to MeetUp events
      </Typography>
      <Button
        component={Link}
        to='/activities'
        size="large"
        variant="contained"
        sx={{height: 80, borderRadius: 4, fontSize: '1.5rem'}}
      >
        Take me to the events!
      </Button>
    </Paper>
  )
}