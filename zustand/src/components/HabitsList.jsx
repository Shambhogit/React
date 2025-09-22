import { Box, Paper } from '@mui/material'
import React from 'react'
import useHabitStore from '../store/store'

const HabitsList = () => {
  const {habits} = useHabitStore();
  console.log(habits);
    return (
    <Box>
        {habits.map((habit, idx)=>{
            <Paper key={idx} elevation={2}>
                Hello
            </Paper>
        })}
    </Box>
  )
}

export default HabitsList