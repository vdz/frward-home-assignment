import styled from "styled-components";

export const ListWrapper = styled.div`
    display: flex;
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
    font-size: 2rem;
    font-weight: 700;
    color: #ccc;
`;

export const NewUserButton = styled.button`
    height: 46px;
    line-height: 46px;
    appearance: none;
    border: 4px dashed #ccc;
    border-radius: 1rem;
    background-color: #fff;
    padding: 0;
    color: #ccc;
    font-size: 46px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    flex-shrink: 0;

    &:hover {
        border-color: #999;
        color: #999;
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
            background-color: var(--focus-color);
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
    
    &::before {
        content: '🗑️';
    }

    &:hover {
        scale: 1.7;
    }
`;