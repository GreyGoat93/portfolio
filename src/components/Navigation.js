import styled from "styled-components"
import { FIRST_COLOR, THIRD_COLOR } from "../common/colorPalette"

import { Link } from "react-router-dom"

const links = [
    {value: "home", path: "/", name: {en: "Home", tr: "Ana Sayfa"}},
    {value: "about", path: "/about", name: {en: "About", tr: "Hakkımda"}},
    {value: "projects", path: "/projects", name: {en: "Projects", tr: "Projelerim"}},
    {value: "contact_me", path: "/contact", name: {en: "Contact", tr: "İletişim"}},
]

const List = styled.ul`
    display: none;
    height: 100%;
    list-style-type: none;
    @media(min-width: 768px){
        display: flex;
    }
`

const ListItem = styled.li`
    font-weight: 700;
    width: 100px;
    height: 100%;
    
    a {
        padding: 0 16px;
        height: 100%;
        width: 100%;
        color: ${THIRD_COLOR};
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 100% 200%; 
        background-image: linear-gradient(to bottom, ${FIRST_COLOR} 50%, ${THIRD_COLOR} 50%);
        transition: background-position .2s ease-in-out, color .5s ease-in-out;

        &:hover {
            background-position: 0 100%;
            color: ${FIRST_COLOR};
        }
    }
`

const Navigation = () => {

    const items = links.map(link => {
        return <ListItem key={link.value}><Link to={link.path}>{link.name.en}</Link></ListItem>
    })

    return (
        <List>
            {items}
        </List>
    )
}

export default Navigation;