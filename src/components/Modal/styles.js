import styled from "styled-components";

export const ModalContainer = styled.div`
    transition: all 1s;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    padding: 3em;
    border-radius: 10px;
    background: #112131;

    .close {
        position: absolute;
        right: 3em;
        font-size: 22px;
        cursor: pointer;
    }
`