import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuHeaderOpened: false,
    menuAccountOpened: false,
}

const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        openMenuHeader(state){
            state.menuHeaderOpened = true;
        },
        closeMenuHeader(state){
            state.menuHeaderOpened = false;
        },
        openMenuAccount(state){
            state.menuAccountOpened = true;
        },
        closeMenuAccount(state){
            state.menuAccountOpened = false;
        }
    }
});

export const menusActions = menuSlice.actions
export default menuSlice.reducer;