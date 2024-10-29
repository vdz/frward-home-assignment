export interface User {
    id: string;
    name?: string;
    country?: string;
    email?: string;
    phone?: string;
}

export interface SetUsersPayload {
    users: User[];
}

export interface NewUserPayload {
    id: string;
    name?: string;
    country?: string;
    email?: string;
    phone?: string;
}

export interface UpdateUserPayload {
    id: string;
    name?: string;
    country?: string;
    email?: string;
    phone?: string;
}

export interface DeleteUserPayload {
    id: string;
}

export type ErrorType = 'invalid' | 'empty';

export interface UserError {
    name?: ErrorType;
    country?: ErrorType;
    email?: ErrorType;
    phone?: ErrorType;
}

export interface SetUserErrorPayload {
    id: string;
    error: UserError;
}

export interface UserState {
    users: User[];
    by_id: Record<string, User>;
    errors: Record<string, UserError>;
}

