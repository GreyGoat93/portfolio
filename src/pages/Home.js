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
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    background: linear-gradient(70deg, rgba(80,2,70,1) 0%, rgba(126,5,110,1) 50%, rgba(80,2,70,1) 100%);
`

const LandingFirstContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    top: 99px;
    height: 100%;
    display: flex;
`

const LandingTitleContainer = styled.div`
    padding: 12rem 0;
    width: 50%;
    height: 100%;
`

const LandingPhotoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 50%;
    height: 100%;
`

const MyPhoto = styled.img`
    display: block;
    width: 100%;
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
                        <MyPhoto src={process.env.PUBLIC_URL + '/taha.png'} alt="Taha Boyraz"></MyPhoto>
                    </LandingPhotoContainer>
                </LandingFirstContainer>
            </Landing>
        </PageContainer>
    )
}

export default Home;