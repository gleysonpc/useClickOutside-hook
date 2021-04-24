import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const ListContainer = styled.ul`
    list-style: none;
    position: absolute;
    background-color: #fffafa;    
    border-radius: 5px;
    margin-top: 2px;
    box-shadow: 0px 0px 11px 1px rgba(5, 16, 25, .39);
`

export const ListItem = styled.li`
    padding: 15px 30px;
    font-size: 16px;
    cursor: pointer;
    color: #7b7a7a;

    &:hover {
        background-color: #b7b7b72e;
    }
`

