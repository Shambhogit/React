import React from 'react'
import useHabitStore from './store/store'
import { Box, Container, Typography } from "@mui/material"
import AddHabitForm from './components/AddHabitForm';
import HabitsList from './components/HabitsList';

const App = () => {
  const store = useHabitStore();
  console.log(store);
  return (
    <Container>
      <Box>
        <Typography variant='h2' component="h1" gutterBottom align='center'>
          Habit Tracker
        </Typography>
        {/* Form */}
        <AddHabitForm/>
        {/* List */}
        <HabitsList/>
        {/* Stats */}
      </Box>
    </Container>
  )
}

export default App