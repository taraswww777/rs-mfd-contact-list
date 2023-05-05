import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from 'src/counterSlice';
import {counterSlice2} from 'src/counterSlice2';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [counterSlice2.name]: counterSlice2.reducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
