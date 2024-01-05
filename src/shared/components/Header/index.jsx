import { Router } from '../../constant/router/index'
import { useRouter } from 'next/router'
import styled from 'styled-components'
const Header = () => {
    const { push: navigate } = useRouter()

    return (
        <Wrapper>
            <List>
                <Li onClick={() => navigate(Router.home)}>
                    Home
                </Li>

                <Li onClick={() => navigate(Router.catalog)}>
                    Catalog
                </Li>
            </List>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    padding: 38px 0px;
`

const List = styled.ul`
    display: flex;
    gap: 75px;
`

const Li = styled.li`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`