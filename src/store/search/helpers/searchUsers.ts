import { User } from "../../user/types";

export function searchUsers(users: User[], term: string): User[] {
    return users.filter(user => {
        return (
            user.name?.toLowerCase().includes(term.toLowerCase()) ||
            user.country?.toLowerCase().includes(term.toLowerCase()) ||
            user.email?.toLowerCase().includes(term.toLowerCase()) ||
            user.phone?.toLowerCase().includes(term.toLowerCase())
        );
    });
}

