import Card from './Card';
import styled from 'styled-components';

const ContentDiv = styled.div`
    background-color: rgba(0, 0, 0, 1);
    padding-bottom: 75px;

    span {
        display: none;
    }

    @media (max-width: 768px) {
        span {
            display: inline;
        }
    }
`;

const InnerDiv = styled.div`
    display: flex;
    gap: 140px;
    width: fit-content;
    margin: 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

const InnerH1 = styled.div`
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    color: rgba(255, 255, 0, 1);
    padding: 150px 0 48px;
`;

const Content = () => {
    return (
        <ContentDiv>
            <InnerH1>
                ヘイラッシャの上に
                <span>
                    <br />
                </span>
                立つシャリタツ
            </InnerH1>
            <InnerDiv>
                <Card
                    title={'Genetic Algorithms'}
                    content={
                        'このポケモンバトルシミュレータは、遺伝的アルゴリズムによって、オールラウンダーなポケモンのパーティを出力結果として得ることを目的としている。遺伝的アルゴリズムの特異な性質をぜひ体験していただきたい。'
                    }
                />
                <Card
                    title={'Player Experience'}
                    content={
                        'このポケモンバトルシミュレータは、ポケモンに精通している2人のポケモンのゲームプレイヤーによって、環境を限定している。環境を限定することにより、演算長を減少させ、よりよい結果が出力されることを目指している。'
                    }
                />
            </InnerDiv>
        </ContentDiv>
    );
};

export default Content;
