import { createSlice } from "@reduxjs/toolkit";

export const list = createSlice({
    name:'todo',
    initialState:{
     input:"",
     tasks:[],
     editing:false, 
     complet: '',
    },
    reducers:{
        setInput:function(state,action){

            state.input=action.payload
        },
        setTasks:function(state,action){
            if(state.editing !== false){
               state.tasks[state.editing]=state.input
               state.editing= false

            }
            else{

                state.tasks=[...state.tasks,state.input]
                state.input =[]
            }
            },
        deletTask: function(state,action){

                state.complet = state.complet.filter((index) => index !== action.payload)
                state.tasks= state.tasks.filter((task,index)=>{
                return index !== action.payload
               


            })
        },
        editTask: function(state,action){
            state.editing = action.payload;
            state.input = state.tasks[action.payload]
        },
        completTask: function(state,action){
            state.complet= [...state.complet, action.payload]
        }
        
    }
})
export const{setInput, setTasks, deletTask, editTask, completTask}= list.actions 
export default list.reducer