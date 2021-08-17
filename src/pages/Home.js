import styled from "styled-components";
import { FIFTH_COLOR, SECOND_COLOR } from "../common/colorPalette";

const PageContainer = styled.div`
    width: 100%;
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: -1;
`

const Landing = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 100vh;
`

const LandingFirstContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    top: 99px;
    padding: 12rem 0;
    height: 100%;
    display: flex;
`

const LandingTitleContainer = styled.div`
    width: 50%;
    height: 100%;
`

const LandingPhotoContainer = styled.div`
    width: 50%;
    height: 100%;
`

const MyProfession = styled.h2`
    font-size: 64px;
    color: ${SECOND_COLOR};
    line-height: 64px;
`

const MyName = styled.h3`
    font-size: 24px;
    height: 24px;
    color: ${FIFTH_COLOR};
`

const Home = () => {
    return (
        <PageContainer>
            <Landing>
                <LandingFirstContainer>
                    <LandingTitleContainer>
                        <MyName>
                            Taha Boyraz
                        </MyName>
                        <MyProfession>
                            Front-end Developer
                        </MyProfession>
                    </LandingTitleContainer>
                    <LandingPhotoContainer>
                        Photo
                    </LandingPhotoContainer>
                </LandingFirstContainer>
            </Landing>
        </PageContainer>
    )
}

export default Home;