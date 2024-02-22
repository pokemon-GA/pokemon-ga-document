import PageTitle from './PageTitle';
import PageCard from './PageCard';
import styled from 'styled-components';

const Page1div = styled.div`
    background-color: #000;
    padding-bottom: 603px;
    margin-top: -100px;
    padding-top: 100px;
`;
const FlexDiv = styled.div`
    display: flex;
    gap: 140px;
    width: fit-content;
    margin: 53px auto 106px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;
const Page3 = () => {
    return (
        <Page1div id="pageTop3">
            <PageTitle title={'Agent Based Model'} />
            <FlexDiv>
                <PageCard
                    title={'Janken Strategy'}
                    lang={'使用言語: R言語, typescript'}
                    langClass={'notHidden'}
                    text={'Agent based modelをじゃんけんで作成。'}
                    button={'notHidden'}
                    buttonText={'About G.A. Sample'}
                />
                <PageCard
                    title={'genetic algorithms Sample'}
                    lang={'使用言語: python'}
                    langClass={'notHidden'}
                    text={'遺伝的アルゴリズムのサンプルを作成'}
                    button={'notHidden'}
                    buttonText={'About evaluation function'}
                />
            </FlexDiv>
        </Page1div>
    );
};

export default Page3;
