import styled from 'styled-components';

const PageTitleH1 = styled.h1`
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgba(0, 224, 255, 0.25); //非対応のブラウザでの文字色を設定
    background: -webkit-linear-gradient(
        270deg,
        rgba(255, 255, 255, 1),
        rgba(0, 224, 255, 0.25)
    ); //背景色にグラデーションを指定
    -webkit-background-clip: text; //テキストでくり抜く
    -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    line-height: 90px;
`;

const PageTitle = (props) => {
    return <PageTitleH1>{props.title}</PageTitleH1>;
};

export default PageTitle;
