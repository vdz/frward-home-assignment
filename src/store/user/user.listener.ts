import { ListenerEffect } from "@reduxjs/toolkit";
import { newUser, setUserError, updateUser } from "./user.actions";
import { ErrorType, NewUserPayload } from "./types";
import { validateCountry, validateEmail, validateName, validatePhone } from "./isValid";


export const userListener = [
    {
        actionCreator: updateUser,
        effect: (action, listenerApi) => {
            let validationError: ErrorType | null = null;
            const {id, name, email, country, phone } = action.payload;
            // test what is about to be updated, and whether it's valid

            // TODO: export the following inline validations into a function
            // name
            if (name !== undefined) {
                validationError = validateName(action.payload.name);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: {
                            name: validationError
                        }
                    }));
                    // TODO: possibly cancel the action here
                    listenerApi.cancel();
                    return false;
                }
            }

            // country
            if (country !== undefined) {
                validationError = validateCountry(country);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id,  
                        error: {
                            country: validationError
                        }
                    }));
                    // TODO: possibly cancel the action here
                    return; 
                }
            }

            // email
            if (email !== undefined) {
                validationError = validateEmail(email);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: {
                            email: validationError
                        }
                    }));
                    // TODO: possibly cancel the action here
                    return; 
                }
            }

            // phone
            if (phone !== undefined) {
                validationError = validatePhone(phone);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: { phone: validationError }
                    }));
                    // TODO: possibly cancel the action here
                    return; 
                }
            }   

        }
    }
]   