import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { Container, ListContainer, ListItem } from "./styles";

function DropdownList() {
    function handleClick() {
        console.log('item click')
    }

    return (
        <ListContainer>
            <ListItem onClick={handleClick}>Profile</ListItem>
            <ListItem onClick={handleClick}>About</ListItem>
            <ListItem onClick={handleClick}>Settings</ListItem>
            <ListItem onClick={handleClick}>Logout</ListItem>
        </ListContainer>
    )
}

export default function Dropdown({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    function toggle() {
        setIsVisible(!isVisible)
    }

    let domNode = useClickOutside(() => {
        setIsVisible(false)
    })

    return (
        <Container onClick={toggle} ref={domNode} >
            {children}
            {isVisible && (
                <DropdownList />
            )}
        </Container>
    )
}