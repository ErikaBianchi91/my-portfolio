import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
  {
    title: 'Home',
    path: '/my-portfolio',
    icon: <AiIcons.AiFillHome color="#8caba8" />,
    cName: 'nav-text',
  },
  {
    title: 'Erfahrung',
    path: '/Erfahrung',
    icon: <IoIcons.IoIosPaper color="#8caba8" />,
    cName: 'nav-text',
  },
  {
    title: 'Projekte',
    path: '/Projekte',
    icon: <IoIcons.IoIosCode color="#8caba8" />,
    cName: 'nav-text',
  },
]
