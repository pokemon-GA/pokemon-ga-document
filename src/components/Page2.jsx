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

const Page2 = () => {
    return (
        <Page1div id="pageTop2">
            <PageTitle title={'About this website'} />
            <FlexDiv>
                <PageCard
                    title={'React'}
                    lang={''}
                    langClass={'hidden'}
                    text={
                        'このサイトはReactを用いて作られています。コンポーネントに分割することで、効率的に開発できるだけでなく、変更や修正に強いコードを実現しています。'
                    }
                    button={'hidden'}
                    buttonText={''}
                    link={''}
                />
                <PageCard
                    title={'SPA'}
                    lang={''}
                    langClass={'hidden'}
                    text={
                        'このサイトはSPI(Single Page Application)と呼ばれるもので、ブラウザによるページ遷移を行わず、単一のページでコンテンツを切り替えています。'
                    }
                    button={'hidden'}
                    buttonText={''}
                    link={''}
                />
            </FlexDiv>
        </Page1div>
    );
};

export default Page2;
