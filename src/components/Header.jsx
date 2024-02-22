import styled from 'styled-components';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const HeaderDiv = styled.div`
    width: 100%;
    height: 60px;
    background-color: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 10;
    top: 0;
    h1 > a {
        color: rgba(255, 255, 0, 1);
        font-weight: 400;
        font-size: 25px;
        font-family: 'Quantico', sans-serif;
        line-height: 60px;
        padding-left: 100px;
        text-decoration: none;
    }

    .headerUl {
        display: flex;
        gap: 30px;
    }

    .headerUl a {
        font-weight: 400;
        font-size: 20px;
        line-height: 60px;
        color: rgba(236, 236, 236, 1);
        text-decoration: none;
    }

    li:nth-of-type(3) {
        padding-right: 100px;
    }

    /*==================================================
5-2-1 3本線が×に
===================================*/
    /*ボタン外側※レイアウトによってpositionや形状は適宜変更してください*/
    .openbtn1 {
        position: absolute; /*ボタン内側の基点となるためrelativeを指定*/
        background: #fff;
        top: 80px;
        right: 20px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        border: none;
        z-index: 5;
    }

    /*ボタン内側*/
    .openbtn1 span {
        display: inline-block;
        transition: all 0.4s; /*アニメーションの設定*/
        position: absolute;
        left: 14px;
        height: 3px;
        border-radius: 2px;
        background: #000;
        width: 45%;
    }

    .openbtn1 span:nth-of-type(1) {
        top: 15px;
    }

    .openbtn1 span:nth-of-type(2) {
        top: 23px;
    }

    .openbtn1 span:nth-of-type(3) {
        top: 31px;
    }

    /*activeクラスが付与されると線が回転して×に*/

    .openbtn1[open] span:nth-of-type(1) {
        top: 18px;
        left: 18px;
        transform: translate(-5px, 6px) rotate(-45deg);
        width: 50%;
    }

    .openbtn1[open] span:nth-of-type(2) {
        opacity: 0; /*真ん中の線は透過*/
    }

    .openbtn1[open] span:nth-of-type(3) {
        top: 30px;
        left: 18px;
        transform: translate(-5px, -6px) rotate(45deg);
        width: 50%;
    }

    nav {
        display: block;
        height: 100vh;
        width: 300px;
        background-color: #fff;
        position: fixed;
        left: -300px;
        transition: all 0.4s;
        top: 60px;
        z-index: 4;
        padding-top: 20px;
    }

    nav[open] {
        transform: translateX(300px);
    }

    .bulr {
        position: fixed;
        top: 60px;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 3;
    }

    .bulr[open] {
        display: block;
    }

    nav > ul > li > a {
        font-size: 20px;
        color: #000;
        text-decoration: none;
        line-height: 3;
        border-bottom: 1px #000 solid;
        display: block;
        width: 200px;
        margin-left: 20px;
    }

    /*========= レイアウトのためのCSS ===============*/

    @media (max-width: 1024px) {
        .headerUl {
            display: none;
        }

        h1 > a {
            padding-left: 20px;
        }

        .openbtn1 {
            display: block;
        }
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);

    const buttonClick = () => {
        setOpen(!open);
    };

    return (
        <HeaderDiv>
            <h1>
                <HashLink to="/#pageTop">Pokémon-GA</HashLink>
            </h1>
            <ul className="headerUl">
                <li>
                    <HashLink to="/page2#pageTop2">About this website</HashLink>
                </li>
                <li>
                    <HashLink to="/page3#pageTop3">Agent Based Model</HashLink>
                </li>
                <li>
                    <HashLink to="/page4#pageTop4">Rust vs python</HashLink>
                </li>
            </ul>
            <button className="openbtn1" onClick={buttonClick} open={open} aria-label="Hamburger Menu Button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav open={open} onClick={buttonClick}>
                <ul>
                    <li>
                        <HashLink to="/page2#pageTop2">About this website</HashLink>
                    </li>
                    <li>
                        <HashLink to="/page3#pageTop3">Agent Based Model</HashLink>
                    </li>
                    <li>
                        <HashLink to="/page4#pageTop4">Rust vs python</HashLink>
                    </li>
                </ul>
            </nav>
            <div className="bulr" open={open}></div>
        </HeaderDiv>
    );
};

export default Header;
