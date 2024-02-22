import PageTitle from './PageTitle';
import PageCard from './PageCard';
import styled from 'styled-components';

const Page1div = styled.div`
    background-color: #000;
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
        gap: 106px;
    }
`;
const CardDiv = styled.div`
    margin: 0 auto;
    width: fit-content;
    padding-bottom: 247px;
`;

const Page4 = () => {
    return (
        <Page1div id="pageTop4">
            <PageTitle title={'Rust vs python'} />
            <FlexDiv>
                <PageCard
                    title={'Pokemon_1'}
                    lang={'使用言語:python'}
                    langClass={'notHidden'}
                    text={'同じ技を打ち続ける前提の評価関数。テラスタルの有無を考慮。未最適化。'}
                    button={'hidden'}
                    buttonText={''}
                />
                <PageCard
                    title={'Pokemon_2'}
                    lang={'使用言語:python'}
                    langClass={'notHidden'}
                    text={'色々な技を打つことを考慮。テラスタルの有無は非考慮。Pythonの範囲で可能な限り最適化。'}
                    button={'hidden'}
                    buttonText={''}
                />
            </FlexDiv>
            <CardDiv>
                <PageCard
                    title={'Pokemon_3'}
                    lang={'使用言語:Rust'}
                    langClass={'notHidden'}
                    text={'色々な技を打つことを考慮。テラスタルのオウムは非考慮。Pokemon_2より高速化。'}
                    button={'hidden'}
                    buttonText={''}
                />
            </CardDiv>
        </Page1div>
    );
};

export default Page4;
