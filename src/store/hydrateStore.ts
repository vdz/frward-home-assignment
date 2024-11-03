import users from '../data/users.json';
import { setUsers } from './user/user.actions';

export function hydrateStore(store) {
    let payload = JSON.parse(localStorage.getItem('users') || '[]');
    if (!payload.length) {
        payload = users;
    }
    store.dispatch(setUsers({ users: payload }));
}