import styled from 'styled-components';
import { FIRST_COLOR, THIRD_COLOR } from '../common/colorPalette';

import Navigation from './Navigation';

const Header = styled.header`
    width: 100%;
    height: 74px;
    background-color: ${FIRST_COLOR};
`

const HeaderInside = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    color: ${THIRD_COLOR};
    font-size: 42px;
`

const PortfolioHeader = () => {
    return (
        <Header>
            <HeaderInside>
                <Container>
                    <Title>
                        taha
                    </Title>
                </Container>
                <Container>
                    <Navigation />
                </Container>
            </HeaderInside>
        </Header>
    )
}

export default PortfolioHeader;