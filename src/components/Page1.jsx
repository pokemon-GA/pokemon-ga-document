import PageTitle from './PageTitle';
import PageCard from './PageCard';
import PageText from './PageText';
import styled from 'styled-components';

const Page1div = styled.div`
    background-color: #000;
    padding-bottom: 600px;

    #ev {
        padding-top: 70px;
    }
`;

const FlexDiv = styled.div`
    display: flex;
    gap: 140px;
    width: fit-content;
    margin: 53px auto 106px;

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 106px;
    }
`;
const CardDiv = styled.div`
    margin: 0 auto 168px;
    width: fit-content;
`;

const PageTextDiv = styled.div`
    padding: 58px 0 61px;
`;

const Page1 = () => {
    return (
        <Page1div>
            <PageTitle title={'The pokémon-GA project'} />
            <FlexDiv>
                <PageCard
                    title={'Evaluation Function'}
                    text={'対戦した際のポケモンの評価を計算する関数の作成'}
                    button={'notHidden'}
                    buttonText={'About evaluation function'}
                    link={'/#ev'}
                />
                <PageCard
                    title={'Web Application'}
                    text={
                        'オールラウンダーなポケモンのパーティを生成し、ユーザに表示することができるウェブアプリの作成'
                    }
                    button={'hidden'}
                    buttonText={''}
                />
            </FlexDiv>
            <CardDiv>
                <PageCard
                    title={'Quest'}
                    lang={''}
                    langClass={'hidden'}
                    text={'妥当な環境の制限を探求する。'}
                    button={'notHidden'}
                    buttonText={'About Quest'}
                    link={'/#qu'}
                />
            </CardDiv>
            <div id="ev">
                <PageText
                    title={'Evaluation Function'}
                    lang={''}
                    langClass={'hidden'}
                    text={
                        'ポケモン１対１を、技選択の探索によって評価。その評価をベースに、３体選出ルールを考慮した評価値を算出。'
                    }
                />
            </div>
            <PageTextDiv id="qu">
                <PageText
                    title={'Quest'}
                    lang={''}
                    langClass={'hidden'}
                    text={
                        'svシーズン1の使用率top100のポケモンのみで構成された環境になっている。ポケモンの型は、ポケモン対戦にある程度知見がある2人が、育成論の記事を読んでメジャーであると感じたものを独断と偏見で採用。'
                    }
                />
            </PageTextDiv>
        </Page1div>
    );
};

export default Page1;
