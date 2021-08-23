import styled from "styled-components";
import { FIFTH_COLOR, THIRD_COLOR } from "../common/colorPalette";

const PageContainer = styled.div`
    width: 100%;
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    z-index: -1;
`

const Landing = styled.section`
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    min-height: 100vh;
    background: linear-gradient(70deg, rgba(80,2,70,1) 0%, rgba(126,5,110,1) 50%, rgba(80,2,70,1) 100%);
`

const LandingFirstContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(min-width: 768px){
        max-width: 1200px;
        padding: 5rem 0;
        justify-content: initial;
        flex-direction: row;
    }
`

const LandingTitleContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 30%;

    @media(min-width: 768px){
        height: 100%;
        width: 50%;
        text-align: left;
        justify-content: flex-start;
        align-items: center;
        transition: transform 0.2s;

        &:hover{
            transform: rotateY(30deg) rotateX(5deg) rotateZ(-5deg);
        }
    }
`

const TitleInsideContainer = styled.div`
    
`

const LandingPhotoContainer = styled.div`
    margin-top: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 20%;

    @media(min-width: 768px){
        height: 100%;
        width: 50%;
        justify-content: flex-end;
        align-items: center;
    }
`

const MyPhoto = styled.img`
    display: block;
    object-fit: cover;
    object-position: center center;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    background-color: ${FIFTH_COLOR};

    @media(min-width: 768px){
        width: 270px;
        height: 270px;
        transition: transform 0.2s;

        &:hover{
            transform: rotateY(30deg) rotateX(-5deg) rotateZ(5deg);
        }
    }
`

const MyProfession = styled.h2`
    color: ${THIRD_COLOR};
    font-size: 48px;
    line-height: 48px;
    width: 400px;

    @media(min-width: 768px){
        font-size: 64px;
        line-height: 64px;
    }
`

const MyName = styled.h3`
    font-size: 16px;
    height: 16px;
    color: ${FIFTH_COLOR};
    
    @media(min-width: 768px){
        font-size: 24px;
        height: 24px;
    }
`

const TextDefinesMeSection = styled.section`
    height: 100vh;
    min-height: 100vh;
    width: 100%;
`

const TextDefinesMeContainer = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 5rem 0;
    font-weight: 700;
    color: ${FIFTH_COLOR}
`

const Home = () => {
    return (
        <PageContainer>
            <Landing>
                <LandingFirstContainer>
                    <LandingTitleContainer>
                        <TitleInsideContainer>
                            <MyName>
                                Taha Boyraz
                            </MyName>
                            <MyProfession>
                                Front-end Developer
                            </MyProfession>
                        </TitleInsideContainer>
                    </LandingTitleContainer>
                    <LandingPhotoContainer>
                        <MyPhoto 
                        src={process.env.PUBLIC_URL + '/tahaa.jpeg'} 
                        alt="Taha Boyraz">
                        </MyPhoto>
                    </LandingPhotoContainer>
                </LandingFirstContainer>
            </Landing>
            <TextDefinesMeSection>
                <TextDefinesMeContainer>
                    hi
                </TextDefinesMeContainer>
            </TextDefinesMeSection>
        </PageContainer>
    )
}

export default Home;