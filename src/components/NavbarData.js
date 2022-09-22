import React from "react";
import { FaBars } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillCaretRight />,
        cName: 'nav-text'
    },
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
    {
        title: 'Colaboradores',
        path: '/colaboradores',
        icon: <MdWork />,
        cName: 'nav-text'
    },
    {
        title: 'OSs',
        path: '/ordemservico',
        icon: <FaTools />,
        cName: 'nav-text'
    }
]