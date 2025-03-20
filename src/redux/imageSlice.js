import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: JSON.parse(localStorage.getItem('images')) || [],
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    uploadImage: (state, action) => {
      state.images.push({
        ...action.payload,
        likes: 0,
        uploadTime: new Date().toISOString(),
      });
      localStorage.setItem('images', JSON.stringify(state.images));
    },
    likeImage: (state, action) => {
      const image = state.images.find(img => img.id === action.payload);
      if (image) image.likes += 1;
      localStorage.setItem('images', JSON.stringify(state.images));
    },
  },
});

export const { login, logout, uploadImage, likeImage } = imageSlice.actions;
export default imageSlice.reducer;