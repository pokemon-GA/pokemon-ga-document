import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Page5div = styled.div`
    background-color: #000;
    padding-bottom: 49px;

    h1 {
        line-height: 90px;
        text-align: center;
        font-weight: 900;
        font-size: 30px;
        color: rgba(255, 255, 0, 1); //非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(
            270deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 0, 1)
        ); //背景色にグラデーションを指定
        -webkit-background-clip: text; //テキストでくり抜く
        -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
        margin-bottom: 60px;
    }

    .thGeneration p {
        line-height: 115px;
        text-align: center;
        font-weight: 900;
        font-size: 25px;
        color: rgba(255, 255, 0, 1); //非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(
            270deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 0, 1)
        ); //背景色にグラデーションを指定
        -webkit-background-clip: text; //テキストでくり抜く
        -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    }

    .thGeneration > div {
        width: 90%;
        max-width: 600px;
        height: 300px;
        background-color: rgba(50, 50, 50, 1);
        border-radius: 10px;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 10px;
        color: #fff;
        overflow-y: scroll;
    }

    .thGeneration > div li {
        font-weight: 900;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
    }

    .pastGeneration p {
        line-height: 90px;
        margin: 44px 0 21px;
        text-align: center;
        font-weight: 900;
        font-size: 25px;
        color: rgba(255, 255, 0, 1); //非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(
            270deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 0, 1)
        ); //背景色にグラデーションを指定
        -webkit-background-clip: text; //テキストでくり抜く
        -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    }

    .pastGeneration input {
        width: 205px;
        height: 30px;
        background-color: rgba(217, 217, 217, 1);
        border-radius: 6px;
    }

    .pastGeneration button {
        width: 80px;
        height: 30px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 0, 1);
        background-color: #000;
        color: rgba(255, 255, 0, 1);
        display: block;
        font-weight: 900;
        font-size: 20px;
    }

    .divFlex {
        display: flex;
        gap: 11px;
        align-items: center;
        width: fit-content;
        margin: 0 auto;
    }

    .blackBox {
        max-width: 600px;
        width: 90%;
        height: 300px;
        background-color: rgba(50, 50, 50, 1);
        border-radius: 10px;
        margin: 29px auto 0;
        box-sizing: border-box;
        padding: 10px;
        overflow-y: scroll;
    }

    .blackBox li {
        font-weight: 900;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
    }

    .searchPoke p {
        line-height: 90px;
        margin: 44px 0 21px;
        text-align: center;
        font-weight: 900;
        font-size: 25px;
        color: rgba(255, 255, 0, 1); //非対応のブラウザでの文字色を設定
        background: -webkit-linear-gradient(
            270deg,
            rgba(255, 255, 255, 1),
            rgba(255, 255, 0, 1)
        ); //背景色にグラデーションを指定
        -webkit-background-clip: text; //テキストでくり抜く
        -webkit-text-fill-color: transparent; //くり抜いた部分は背景を表示
    }

    .searchPoke input {
        width: 205px;
        height: 30px;
        background-color: rgba(217, 217, 217, 1);
        border-radius: 6px;
    }

    .searchPoke button {
        width: 80px;
        height: 30px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 0, 1);
        background-color: #000;
        color: rgba(255, 255, 0, 1);
        display: block;
        font-weight: 900;
        font-size: 20px;
    }

    p.alert {
        padding: 0;
        margin: 0;
        line-height: 1.5;
        font-size: 20px;
        color: red;
        background: unset;
        -webkit-text-fill-color: unset;
    }

    @media (max-width: 768px) {
        .blackBox li {
            font-size: 16px;
        }

        .thGeneration > div li {
            font-size: 16px;
        }
    }
`;

const Page5 = () => {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    const [pokemon, setPokemon] = useState('ロトム');
    const [latestnum, setLatestnum] = useState(0);
    const [latestparty, setLatestparty] = useState([]);
    const [generation, setGeneration] = useState(1);
    const [generationParty, setgenerationParty] = useState([]);

    const [badnum, setBadnum] = useState(false);
    const [badpoke, setBadpoke] = useState(false);

    const inputNum = useRef();
    const inputPoke = useRef();

    const search = () => {
        if (
            !(Number(inputNum.current.value) >= 1 && Number(inputNum.current.value) <= latestnum) ||
            !Number.isInteger(Number(inputNum.current.value))
        ) {
            setBadnum(true);
            return;
        } else {
            setGeneration(inputNum.current.value);
            setBadnum(false);
        }
    };

    const searchPoke = () => {
        if (inputPoke.current.value === '') {
            setBadpoke(true);
            return;
        }
        setPokemon(inputPoke.current.value);
    };

    useEffect(() => {
        fetch(`https://pokemon-ga-api.yukiosada.work/pokemon/${pokemon}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data === undefined) {
                    setBadpoke(true);
                    return;
                }
                setPokemonInfo(data.data);
                console.log(data.data);
                console.log(pokemonInfo);
                setBadpoke(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [pokemon]);
    useEffect(() => {
        fetch('https://pokemon-ga-api.yukiosada.work/latest?higher=1&lower=50')
            .then((res) => res.json())
            .then((data) => {
                console.log(data.ranking);
                setLatestnum(data.generation);
                setLatestparty(data.ranking);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        fetch(`https://pokemon-ga-api.yukiosada.work/generation/${generation}?higher=1&lower=50`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.ranking);
                setgenerationParty(data.ranking);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [generation]);

    return (
        <Page5div id="pageTop">
            <h1>Application</h1>
            <div className="thGeneration">
                <p>{latestnum}th generation</p>
                <div>
                    {latestparty.map((party) => (
                        <ul key={uuidv4()}>
                            <li>rank:{party.rank}</li>
                            <li>score:{party.score}</li>
                            {party.party.map((pokemon) => (
                                <li key={uuidv4()}>
                                    {pokemon.name}
                                    {pokemon.form_name !== 'null' ? pokemon.form_name : ''}
                                </li>
                            ))}
                            <br />
                        </ul>
                    ))}
                </div>
            </div>
            <div className="pastGeneration">
                <p>Search past generations</p>
                <div className="divFlex">
                    <input ref={inputNum}></input>
                    <button onClick={search} aria-label="Search Button">
                        search
                    </button>
                </div>
                {badnum ? <p className="alert">無効な値です</p> : ''}
                <div className="blackBox">
                    {generationParty.map((party) => (
                        <ul key={uuidv4()}>
                            <li>rank:{party.rank}</li>
                            <li>score:{party.score}</li>
                            {party.party.map((pokemon) => (
                                <li key={uuidv4()}>
                                    {pokemon.name}
                                    {pokemon.form_name !== 'null' ? pokemon.form_name : ''}
                                </li>
                            ))}
                            <br />
                        </ul>
                    ))}
                </div>
            </div>

            <div className="searchPoke">
                <p>Details of pokemon</p>
                <div className="divFlex">
                    <input ref={inputPoke}></input>
                    <button onClick={searchPoke} aria-label="Search Button">
                        search
                    </button>
                </div>
                {badpoke ? <p className="alert">無効な値です</p> : ''}
                <div className="blackBox">
                    {pokemonInfo.map((info) => (
                        <ul key={uuidv4()}>
                            <li>図鑑No.{info.pokedex_no}</li>
                            <li>
                                {info.name}
                                {info.form_name !== 'null' ? info.form_name : ''}
                            </li>
                            <li>特性：{info.ability}</li>
                            <li>
                                タイプ：{info.type_1} {info.type_2 !== 'なし' ? info.type_2 : ''}
                            </li>
                            <li>テラスタイプ：{info.tera_type}</li>
                            <li>持ち物：{info.item}</li>
                            <li>
                                技：{info.move_1.name} {info.move_2.name} {info.move_3.name} {info.move_4.name}
                            </li>
                            <li>
                                個体値：H{info.individual_values_h} A{info.individual_values_a} B
                                {info.individual_values_b} C{info.individual_values_c} D{info.individual_values_d} S
                                {info.individual_values_s}
                            </li>
                            <li>
                                努力値：H{info.effort_values_h} A{info.effort_values_a} B{info.effort_values_b} C
                                {info.effort_values_c} D{info.effort_values_d} S{info.effort_values_s}
                            </li>
                            <li>
                                実数値：H
                                {Math.floor(
                                    Number(info.base_stat_h) +
                                        Number(info.individual_values_h) / 2 +
                                        Number(info.effort_values_h) / 8 +
                                        60
                                )}{' '}
                                A
                                {Math.floor(
                                    (Number(info.base_stat_a) +
                                        Number(info.individual_values_a) / 2 +
                                        Number(info.effort_values_a) / 8 +
                                        5) *
                                        (1 + info.nature_a * 0.1)
                                )}{' '}
                                B
                                {Math.floor(
                                    (Number(info.base_stat_b) +
                                        Number(info.individual_values_b) / 2 +
                                        Number(info.effort_values_b) / 8 +
                                        5) *
                                        (1 + info.nature_b * 0.1)
                                )}{' '}
                                C
                                {Math.floor(
                                    (Number(info.base_stat_c) +
                                        Number(info.individual_values_c) / 2 +
                                        Number(info.effort_values_c) / 8 +
                                        5) *
                                        (1 + info.nature_c * 0.1)
                                )}{' '}
                                D
                                {Math.floor(
                                    (Number(info.base_stat_d) +
                                        Number(info.individual_values_d) / 2 +
                                        Number(info.effort_values_d) / 8 +
                                        5) *
                                        (1 + info.nature_d * 0.1)
                                )}{' '}
                                S
                                {Math.floor(
                                    (Number(info.base_stat_s) +
                                        Number(info.individual_values_s) / 2 +
                                        Number(info.effort_values_s) / 8 +
                                        5) *
                                        (1 + info.nature_s * 0.1)
                                )}
                            </li>
                            <br />
                        </ul>
                    ))}
                </div>
            </div>
        </Page5div>
    );
};

export default Page5;
