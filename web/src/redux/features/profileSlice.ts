import {type PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ProfileDetails {
  name: string;
  email: string;
}

interface Profile {
  profile: ProfileDetails;
  isEmpty: boolean;
}

const initialState = {
  profile: {
    name: '',
    email: '',
  },
  isEmpty: true,
} as Profile;

export interface FormDetails {
  name: keyof ProfileDetails;
  value: string;
}

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileDetails>) => {
      state.profile = action.payload;
      state.isEmpty = false;
    },

    updateProfile: (state, action: PayloadAction<FormDetails>) => {
      const {name, value} = action.payload ?? {};

      state.profile[name] = value;
    },
  },
});

export const {setProfile, updateProfile} = profile.actions;

export default profile.reducer;
