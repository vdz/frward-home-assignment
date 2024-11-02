import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { initAppListeners } from './listeners';
import { userReducer } from './user/user.reducer';
import { searchReducer } from './search/search.reducer';

const listenerMiddleware = initAppListeners();

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware), 
});

export type GetAppState = typeof store.getState;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<GetAppState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;