import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const TopDiv = styled.div`
    width: 100%;
    height: 580px;
    background-image: url('/background.webp');
    background-size: cover;
    box-sizing: border-box;
    padding-top: 180px;
    position: relative;
    margin-top: 60px;

    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        font-weight: 900;
        font-size: 60px;
        text-align: center;
        color: rgba(255, 255, 0, 1); //非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(
            270deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 0, 1)
        ); //背景色にグラデーションを指定
        -webkit-background-clip: text; //テキストでくり抜く
        -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    }

    button {
        display: block;
        width: 200px;
        height: 70px;
        box-sizing: border-box;
        border: 1px rgba(255, 255, 0, 1) solid;
        background-color: rgba(0, 0, 0, 1);
        font-weight: 900;
        font-size: 24px;
        line-height: 68px;
        border-radius: 10px;
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
    }

    button > a {
        color: rgba(255, 255, 0, 1);
        text-decoration: none;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 48px;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 40px;
        }
    }
`;

const Top = () => {
    return (
        <TopDiv id="pageTop">
            <h1>
                The pokémon battle simulator <br />
                using genetic algorithms
            </h1>
            <button aria-label="Get Started Button">
                <HashLink to="/page5">Get Started ＞</HashLink>
            </button>
        </TopDiv>
    );
};

export default Top;
