import styled from "styled-components";

export const Search = styled.div`
    position: relative;
    margin-top: 2em;
    width: 864px;

    h1 {
        font-size: 18px;
        color: #C4D4E3;
    }

    input[type=search] {
        width: 864px;
        padding: 12px 16px 12px 16px;
        border: 1px solid #1C2F41;
        border-radius: 6px;
        background-color: #040F1A;
        color: #3A536B;
    }

    input[type=search]::placeholder {
        color: #3A536B;
    }

    #countPost {
        position: absolute;
        right: 0;
        top: 1em;
        font-size: 14px;
    }
`