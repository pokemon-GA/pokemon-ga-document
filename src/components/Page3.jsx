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
    max-width:900px;
    justify-content:center;
    margin: 53px auto 106px;
    flex-wrap:wrap;
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
                    text={'一定の条件下で最も勝率の高いじゃんけんの戦略は何かを計算する。'}
                    button={'notHidden'}
                    buttonText={'Janken Strategy'}
                    link={'https://janken.yukiosada.work/'}
                />
                <PageCard
                    title={'ES-Engine'}
                    lang={'使用言語: python'}
                    langClass={'notHidden'}
                    text={'交叉を用いず、突然変異のみを用いたプログラム。'}
                    button={'notHidden'}
                    buttonText={'ES-Engine'}
                    link={'https://es-engine.yukiosada.work/'}
                />
                <PageCard
                    title={'Pokémon-GA API'}
                    lang={'使用言語: python,Rust(友人の作成した評価関数の部分)'}
                    langClass={'notHidden'}
                    text={'Agent based modelをじゃんけんで作成。'}
                    button={'notHidden'}
                    buttonText={'Pokémon-GA-API'}
                    link={'https://pokemon-ga-api.yukiosada.work/docs#/'}
                />
                <PageCard
                    title={'Pokémon-GA API document'}
                    lang={'使用言語: Rust'}
                    langClass={'notHidden'}
                    text={'Pokémon-GA APIの説明をしているサイト。'}
                    button={'notHidden'}
                    buttonText={'Pokémon-GA API document'}
                    link={'https://myxogastria0808.github.io/pokemon-ga-api-document/'}
                />
            </FlexDiv>
        </Page1div>
    );
};

export default Page3;
