import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store';
import { userListener } from './user/user.listener';
import { searchListener } from './search/search.listener';

const listenerMiddleware = createListenerMiddleware();

// pre-typed startListening function
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>;

const listeners = [
    userListener,
    searchListener
];

export function initAppListeners() {
    listeners.forEach((listener) => {
        listener.forEach((logic) => {
            startAppListening(logic);
        })
    });
    
    return listenerMiddleware;
}
