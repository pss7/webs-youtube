import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { searchKeyword, headerMenus } from '../../data/header.js';

const Menu = () => {

    const location = useLocation();
    
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
                {/* <li className='active'>
            <a href='/'>
                <CiBaseball /> 웹스토리보이
            </a>
        </li>
        <li>
            <a href='/today'>
                <CiMoneyBill /> 추천 영상
            </a>
        </li>
        <li>
            <a href='/developer'>
                <CiCoins1 /> 추천 개발자
            </a>
        </li>
        <li>
            <a href='/webd'>
                <CiBoxes /> 웹디자인기능사
            </a>
        </li>
        <li>
            <a href='/website'>
                <CiBullhorn /> 웹표준 사이트
            </a>
        </li>
        <li>
            <a href='/gsap'>
                <CiCoffeeCup /> GSAP Parallax
            </a>
        </li>
        <li>
            <a href='/port'>
                <CiDumbbell /> 포트폴리오 사이트
            </a>
        </li>
        <li>
            <a href='/youtube'>
                <CiFries /> 유튜브 클론 사이트
            </a>
        </li> */}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, key) => (
                    <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
                {/* <li>
            <a href='/search/webstoryboy'>webstoryboy</a>
        </li>
        <li>
            <a href='/search/html'>HTML</a>
        </li>
        <li>
            <a href='/search/css'>CSS</a>
        </li>
        <li>
            <a href='/search/javascript'>JavaScript</a>
        </li>
        <li>
            <a href='/search/react.js'>React.js</a>
        </li>
        <li>
            <a href='/search/vue.js'>Vue.js</a>
        </li>
        <li>
            <a href='/search/next.js'>Next.js</a>
        </li>
        <li>
            <a href='/search/node.js'>Node.js</a>
        </li>
        <li>
            <a href='/search/sql'>SQL</a>
        </li>
        <li>
            <a href='/search/React Portfolio'>portfolio</a>
        </li>
        <li>
            <a href='/search/NewJeans'>music</a>
        </li> */}
            </ul>
        </nav>
    )
}

export default Menu