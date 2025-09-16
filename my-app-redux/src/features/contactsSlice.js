import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: { items: [] },
    reducers: {
      addContact: {
        reducer(state, action) {
          state.items.push(action.payload);
        },
        prepare(values) {
          return { payload: { id: nanoid(), ...values } };
        }
      },
      clearAll(state) {
        state.items = [];
      }
    }
});
  
export const { addContact, clearAll } = contactsSlice.actions;
export default contactsSlice.reducer;