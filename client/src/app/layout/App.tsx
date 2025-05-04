import { Box, Container, CssBaseline } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "./NavBar"
import ActivityDashboard from "../../features/Activities/Dashboard/ActivityDashboard"

function App() {

  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)


  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(activity => activity.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenFrom = (id?: string) => {
    if (id)
      handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true)
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenFrom}/>
      <Container maxWidth='xl' sx={{ marginTop: 3 }}>
        <ActivityDashboard activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          OpenForm={handleOpenFrom}
          editMode={editMode}
          closeForm={handleCloseForm}

        />
      </Container>
    </Box>
  )
}

export default App
