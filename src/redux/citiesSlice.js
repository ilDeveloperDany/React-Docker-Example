import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 1,
                title: "San Francisco",
                imgSrc: "https://images.unsplash.com/photo-1724105266499-fceb8fbe7bb5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies, tellus sed tristique imperdiet, lacus justo ultrices dui, sit amet vulputate libero elit non erat. Nunc dapibus lobortis ipsum, ac pharetra dolor ornare sit amet.",
                isVisited: false
            },
            {
                id: 2, 
                title: "Cagliari",
                imgSrc: "https://images.unsplash.com/photo-1591792381642-a088238757f7?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies, tellus sed tristique imperdiet, lacus justo ultrices dui, sit amet vulputate libero elit non erat. Nunc dapibus lobortis ipsum, ac pharetra dolor ornare sit amet.",
                isVisited: true
            },
            {
                id: 3,
                title: "Berlino",
                imgSrc: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies, tellus sed tristique imperdiet, lacus justo ultrices dui, sit amet vulputate libero elit non erat. Nunc dapibus lobortis ipsum, ac pharetra dolor ornare sit amet.",
                isVisited: false
            },
            {
                id: 4,
                title: "Londra",
                imgSrc: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies, tellus sed tristique imperdiet, lacus justo ultrices dui, sit amet vulputate libero elit non erat. Nunc dapibus lobortis ipsum, ac pharetra dolor ornare sit amet.",
                isVisited: false
            }
        ]
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
    }
})

export const {add} = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;