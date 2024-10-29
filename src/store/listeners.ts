import { createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from './store';
import { userListener } from './user/user.listener';

const listenerMiddleware = createListenerMiddleware();

// pre-typed startListening function
export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>;

const listeners = [
    userListener
];

export function initAppListeners() {
    listeners.forEach((listener) => {
        listener.forEach((logic) => {
            startAppListening(logic);
        })
    });
    
    return listenerMiddleware;
}
