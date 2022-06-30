import styled from "styled-components"

function Episode({index, title, img, duration, synopsis}){
    return(
        <Container>
            <EpsodeIndex>
                {index}
            </EpsodeIndex>
            <ImageContainer>
                <img src={img}
                />
            </ImageContainer>
            <MetaDataContainer>
                <EpisodeTitle>
                    <span style={{color:"#fff",fontSize:"1em",fontWeight:"700"}}>
                        {title}
                    </span>
                    <span style={{fontSize:"1em",paddingLeft:"10px"}}>
                        {duration}
                    </span>
                </EpisodeTitle>
                <EpisodeSynopsis>
                    {synopsis}
                </EpisodeSynopsis>
            </MetaDataContainer>
        </Container>
    );
}

const EpisodeSynopsis = styled.p`
    padding: 0 1em 1em;
    margin: 0;
    color: #d2d2d2;
    font-size: 14px;
    line-height: 20px;
`;

const EpisodeTitle = styled.div`
    padding: 1em;
    padding-bottom: 0.5em;
    display: flex;
    justify-content: space-between;
`;

const MetaDataContainer = styled.div`
    min-height: 100%;
    flex: 0 0 70%;
    font-size: 1em;
`;

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    flex: 0 0 18%;
    border-radius: 4px;
`;

const EpsodeIndex = styled.div`
    font-size: 1.5em;
    color: #d2d2d2;
    display: flex;
    justify-content: center;
    flex: 0 0 7%;
`;

const Container = styled.div`
    border-top: 1px solid #404040;
    padding: 1em;
    border-radius: 0.25em;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
`;

export default Episode;