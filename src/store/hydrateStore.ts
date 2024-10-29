import users from '../data/users.json';
import { setUsers } from './user/user.actions';

export function hydrateStore(store) {
    store.dispatch(setUsers({ users }));
}