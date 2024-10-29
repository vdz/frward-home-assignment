import { ErrorType } from "./types";
import countries from '../../data/countries.json';

export function validateName(field: string): ErrorType | null {
    if (field.length === 0) {
        return 'empty';
    }

    if (!/^[a-zA-Z]+$/.test(field)) {
        return 'invalid';
    }

    return null;
}

export function validateCountry(field: string): ErrorType | null {
    if (field.length === 0) {
        return 'empty';
    }

    if (!countries.includes(field)) {
        return 'invalid';
    }

    return null;
}

export function validateEmail(field: string): ErrorType | null {
    if (field.length === 0) {
        return 'empty';
    }

    if (!/^[^@]+@[^@]+$/.test(field)) {
        return 'invalid';
    }

    return null;
}

export function validatePhone(field: string): ErrorType | null {
    if (field.length === 0) {
        return 'empty';
    }

    if (!/^\+[^+]*$/.test(field)) {
        return 'invalid';
    }

    return null;
}