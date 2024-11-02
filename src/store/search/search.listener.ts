import { searchUsers } from "./helpers/searchUsers";
import { clearTerm, setSearchResults, setTerm } from "./search.actions";

export const searchListener = [
    {
        actionCreator: setTerm,
        effect: (action, listenerApi) => {
            if (!action.payload.term.length) {
                listenerApi.dispatch(clearTerm());
                return;
            }
            const users = listenerApi.getState().user.users;
            const results  = searchUsers(users, action.payload.term);
            listenerApi.dispatch(setSearchResults({ results }));
        }
    }
];