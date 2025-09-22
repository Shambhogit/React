import { create } from 'zustand';

const useHabitStore = create((set, get) => ({
  habits: [],
  addHabit:(name, frequency)=>set((state)=>{
    return {
        habits:[
            ...state.habits,
            {
                id:Date.now().toString(),
                name,
                frequency,
                completedDates:[],
                createdAt:new Date().toISOString(),
            }
        ]
    }
  })
}));

export default useHabitStore;