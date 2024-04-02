import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Token {
  id: number;
  token: string;
  loggedOut: boolean;
}

interface Authority {
  authority: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  role: string;
  tokens: Token[];
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  authorities: Authority[];
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
