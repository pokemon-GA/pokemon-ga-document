import styled from 'styled-components';

const PageCardDiv = styled.div`
    width: 340px;
    height: 250px;
    background: linear-gradient(135deg, rgba(0, 224, 255, 0.7), rgba(255, 255, 0, 0));
    box-sizing: border-box;
    padding: 2px;
    border-radius: 10px;

    div {
        width: 336px;
        height: 246px;
        background-color: #000;
        border-radius: 9px;
        box-sizing: border-box;
    }

    h1 {
        font-weight: 900;
        font-size: 20px;
        text-align: center;
        line-height: 62px;
        color: rgba(0, 224, 255, 1);
    }

    button {
        width: 208px;
        height: 34px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 224, 255, 1);
        border-radius: 10px;
        display: block;
        background-color: #000;
        color: rgba(0, 224, 255, 1);
        margin: 0 auto;
    }

    .hidden {
        display: none;
    }

    @media (max-width: 768px) {
        width: 300px;

        div {
            width: 296px;
        }
    }
`;

const Lang = styled.p`
    padding-bottom: 8px;
    color: rgba(236, 236, 236, 1);
    padding: 0 55px;
`;
const Text = styled.p`
    color: rgba(236, 236, 236, 1);
    font-size: 16px;
    padding: 0 55px;
    padding-bottom: 40px;
`;

const PageCard = (props) => {
    return (
        <PageCardDiv>
            <div>
                <h1>{props.title}</h1>
                <Lang className={props.langClass}>{props.lang}</Lang>
                <Text>{props.text}</Text>
                <button className={props.button} aria-label="Card Button">
                    {props.buttonText}
                </button>
            </div>
        </PageCardDiv>
    );
};

export default PageCard;
