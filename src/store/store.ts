import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import { initAppListeners } from './listeners';
import { userReducer } from './user/user.reducer';
import { uiReducer } from './ui/ui.reducer';

const listenerMiddleware = initAppListeners();

export const store = configureStore({
  reducer: {
    ui: uiReducer,
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