import styled from 'styled-components';

const PageTextDiv = styled.div`
    width: 820px;
    max-width: 90%;
    margin: 0 auto;

    h1 {
        font-weight: 900;
        font-size: 30px;
        color: rgba(0, 224, 255, 1);
    }

    p {
        display: block;
        width: 100%;
        height: 124px;
        border: 1px solid rgba(255, 255, 255, 1);
        margin-top: 20px;
        color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        padding: 10px;
    }
`;

const PageText = (props) => {
    return (
        <PageTextDiv>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </PageTextDiv>
    );
};

export default PageText;
