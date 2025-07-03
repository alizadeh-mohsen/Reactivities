import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import Diversity3Icon from '@mui/icons-material/Diversity3';

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 3, sm: 6 },
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        px: { xs: 2, sm: 0 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          gap: { xs: 1, sm: 3 },
          flexDirection: { xs: 'column', sm: 'row' }
        }}
      >
        <Diversity3Icon sx={{ height: { xs: 60, sm: 110 }, width: { xs: 60, sm: 110 } }} />
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.2rem', sm: '3.5rem', md: '4rem' },
            textAlign: 'center'
          }}
        >
          MeetUp
        </Typography>
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.2rem', sm: '2rem', md: '2.5rem' },
          textAlign: 'center'
        }}
      >
        Find Local Groups, Events, and Activities Near You
      </Typography>
      <Button
        component={Link}
        to='/activities'
        size="large"
        variant="contained"
        sx={{
          height: { xs: 50, sm: 80 },
          borderRadius: 4,
          fontSize: { xs: '1rem', sm: '1.5rem' },
          px: { xs: 3, sm: 6 }
        }}
      >
        Take me to the events!
      </Button>
      <Box
        sx={{ mt: 2, display: { xs: 'none', sm: 'flex' } }}
        alignItems='center'
        justifyContent='center'
      >
        <Chip
          size="medium"
          sx={{ fontSize: '0.9rem', color: 'white' }}
          label='Not optimised for mobile view; Use desktop or laptop instead'
          variant="filled"
        />
      </Box>
    </Paper>
  )
}