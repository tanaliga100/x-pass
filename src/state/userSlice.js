import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      username: "michaeljohnson",
      email: "michael@example.com",
    },
    {
      id: 4,
      name: "Emily Williams",
      username: "emilywilliams",
      email: "emily@example.com",
    },
    {
      id: 5,
      name: "Daniel Brown",
      username: "danielbrown",
      email: "daniel@example.com",
    },
    {
      id: 6,
      name: "Olivia Davis",
      username: "oliviadavis",
      email: "olivia@example.com",
    },
    {
      id: 7,
      name: "William Garcia",
      username: "williamgarcia",
      email: "william@example.com",
    },
    {
      id: 8,
      name: "Sophia Miller",
      username: "sophiamiller",
      email: "sophia@example.com",
    },
    {
      id: 9,
      name: "Liam Wilson",
      username: "liamwilson",
      email: "liam@example.com",
    },
    {
      id: 10,
      name: "Ava Martinez",
      username: "avamartinez",
      email: "ava@example.com",
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    listOfUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { listOfUsers } = userSlice.actions;
export default userSlice.reducer;
