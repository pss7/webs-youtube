import React from 'react'
import { snsLink } from '../../data/header.js';

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul>
                {
                    snsLink.map((sns, key) => (
                        <li key={key}>
                            <a
                                href={sns.url}
                                target='_blank'
                                rel='noopener noreferrer' aria-label={sns.title}
                            >
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))
                }
                {/* <li>
            <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                <AiFillGithub />
            </a>
        </li>
        <li>
            <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                <AiFillYoutube />
            </a>
        </li>
        <li>
            <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                <AiOutlineCodepen />
            </a>
        </li>
        <li>
            <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                <AiOutlineInstagram />
            </a>
        </li> */}
            </ul>
        </div>
    )
}

export default Sns