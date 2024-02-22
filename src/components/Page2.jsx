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
                <PageCard lang={''} langClass={'hidden'} title={''} text={''} button={'hidden'} buttonText={''} />
                <PageCard lang={''} langClass={'hidden'} title={''} text={''} button={'hidden'} buttonText={''} />
            </FlexDiv>
        </Page1div>
    );
};

export default Page2;
