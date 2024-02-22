import styled from 'styled-components';

const CardDiv = styled.div`
    width: 340px;
    height: 250px;
    padding: 2px;
    box-sizing: border-box;
    background: linear-gradient(135deg, rgba(255, 255, 0, 0.7), rgba(255, 255, 0, 0));
    border-radius: 10px;

    div {
        width: 336px;
        height: 246px;
        display: block;
        background-color: #000;
        border-radius: 9px;
        box-sizing: border-box;
        padding-left: 25px;
        padding-right: 25px;
    }

    h1 {
        color: rgba(255, 255, 0, 1);
        font-weight: 900;
        font-size: 20px;
        text-align: center;
        padding: 0;
        line-height: 62px;
    }

    p {
        color: rgba(236, 236, 236, 1);
    }

    @media (max-width: 768px) {
        width: 300px;

        div {
            width: 296px;
        }
    }
`;

const Card = (props) => {
    return (
        <CardDiv>
            <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </CardDiv>
    );
};

export default Card;
