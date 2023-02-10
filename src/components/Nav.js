import React from 'react';
import { navigationData } from '../helpers/data'

const Nav = () => {
    return (
        <nav>
            <ul className='flex gap-x-9 '>
                {navigationData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Nav;