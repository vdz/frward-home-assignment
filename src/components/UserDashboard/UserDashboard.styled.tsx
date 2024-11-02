import { AutoComplete } from "rsuite";
import { PickerPopup } from "rsuite/esm/internals/Picker";
import styled from "styled-components";

export const ListWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    gap: 0rem;
    border-radius: 1em;
    background-color: #f0f0ff;
    max-width: 60rem;
    margin: auto;
    border: 4px solid #000;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    height: calc(100vh - 100px);
    overflow: auto;
`;

export const Title = styled.h1`
    font-family: monospace;
    text-align: left;
    font-size: 1.8rem;
    font-weight: 700;
    color: #333;
    padding-left: 20px;
    padding-right: 20px;
`;


export const Meta = styled.span`
    font-weight: 400;
    color: #999;
    margin-left: 10px;
`;

export const NewUserButton = styled.button`
    appearance: none;
    height: 46px;
    width: 92px;
    line-height: 6px;
    border: 0;
    border-radius: 8px;
    background-color: transparent;
    color: #333;
    font-size: 46px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    flex-shrink: 0;

    &:hover {
        color: #2a00fc;
        background-color: #fff;
    }
`;

export const UserWrapper = styled.div`
    --error-color: #e85050;
    --hover-color: #d8d0ff;
    --focus-color: #c8c0ee;
    --bck-color: #c0c9ff;
    --bck-color-dark: #ddc5c5;
    
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    gap: 8px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;

    font-family: monospace;

    &:nth-child(even) {
        background-color: var(--bck-color);
    }

    &:hover {
        background-color: #e8e0ff;
    }
    
    input {
        font-family: monospace;
        border-radius: 8px;
        background-color: transparent;
        border: 3px solid transparent;
        height: 40px;
        padding-left: 10px;
        padding-right: 10px;
        align-self: center;

        &:hover {
            background-color: #fff;
            border-color: var(--hover-color);
        }

        &:focus {
            outline: none;
            background-color: #fff;
            border-color: var(--focus-color);
            color: #333;
        }
        &.invalid, &.empty {
            position: relative;
            border-color: #fff;
            background-color: var(--error-color);
            color: #fff;
            &::after {
                position: absolute;
                width: fit-content;
                height: 15px;
                bottom: -5px;
                left: 0;
                font-size: 0.8rem;
                text-align: left;
                /* can import content: attr(data-error), but JSX is messy enough */
            }
        }
    }
`;

export const WrappedAutoComplete = styled(AutoComplete)`
    .rs-input {
        height: 48px;
    }

    &.invalid input.rs-input, &.empty input.rs-input {
        border-color: #fff;
        background-color: var(--error-color);
        color: #fff;
    }

    &.invalid, &.empty {
        &::after {
            position: absolute;
            width: fit-content;
            height: 15px;
            bottom: -5px;
            left: 0;
            font-size: 0.8rem;
            text-align: left;
            /* can import content: attr(data-error), but JSX is messy enough */
        }
    }
`;

export const UserName = styled.input``;
export const UserEmail = styled.input``;
export const UserPhone = styled.input``;

export const DeleteButton = styled.button`
    flex-shrink: 1; 
    appearance: none;
    border: none;
    background: none;
    cursor: pointer;
    width: 46px;
    height: 46px;
    transition: all 0.3s ease-in-out;

    &::before {
        content: '🗑️';
    }

    &:hover {
        scale: 1.7;
    }
`;

export const UpdateButton = styled.button`
    flex-shrink: 1; 
    appearance: none;
    border: none;
    background-color: #2a00fc;
    cursor: pointer;
    min-width: 76px;
    height: 46px;
    line-height: 46px;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    visibility: hidden;

    &.disabled {
        background-color: #ccc;
        color: #999;
    }

    &.show {
        visibility: visible;
    }
`;

export const UserListActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const UsersWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    overflow-y: auto;
    padding-top: 0;
`;