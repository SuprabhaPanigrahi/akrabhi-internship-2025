import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { User, LoginFormInputs } from "@/components1/Auth/types";

interface AuthState {
  users: User[];
  isAuthenticated: boolean;
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const loadAuthState = (): AuthState => {
  try {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return {
      users,
      isAuthenticated: false, // Start unauthenticated by default
      currentUser: null,
      loading: false,
      error: null,
      success: null,
    };
  } catch {
    return {
      users: [],
      isAuthenticated: false,
      currentUser: null,
      loading: false,
      error: null,
      success: null,
    };
  }
};

const initialState: AuthState = loadAuthState();

export const checkAuthState = createAsyncThunk<void, void, { state: { auth: AuthState } }>(
  "auth/checkAuthState",
  async (_, thunkAPI) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (currentUser) {
      thunkAPI.dispatch(authSlice.actions.setCurrentUser(currentUser));
    }
  }
);

export const registerUser = createAsyncThunk<
  User,
  User,
  { rejectValue: string; state: { auth: AuthState } }
>("auth/registerUser", async (userData, thunkAPI) => {
  const state = thunkAPI.getState();
  const existingUser = state.auth.users.find(user => user.email === userData.email);

  if (existingUser) {
    return thunkAPI.rejectWithValue("Email already exists");
  }
  return userData;
});

export const loginUser = createAsyncThunk<
  User,
  LoginFormInputs,
  { rejectValue: string; state: { auth: AuthState } }
>("auth/loginUser", async (credentials, thunkAPI) => {
  const state = thunkAPI.getState();
  const foundUser = state.auth.users.find(
    user => user.email === credentials.email && user.password === credentials.password
  );

  if (!foundUser) {
    return thunkAPI.rejectWithValue("Invalid email or password");
  }
  return foundUser;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("currentUser");
      state.error = null;
      state.success = "Logged out successfully";
    },
    clearAuthMessages(state) {
      state.error = null;
      state.success = null;
    },
    setAuth(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(state.users));
        state.isAuthenticated = true;
        state.currentUser = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
        state.success = "Registration successful!";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.currentUser = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
        state.success = "Login successful!";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout, clearAuthMessages, setAuth, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
