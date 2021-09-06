
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from  'react-icons/si'


export const SidebarDataRecruiter = [
  {
    title: 'HomePosts',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/Profile/:id',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'List of Applies',
    path: '/AppliesList',
    icon: <FaIcons.FaListAlt />,
    cName: 'nav-text'
  },
  {
    title: 'My Meeting',
    path: '/MyMeeting',
    icon: <SiIcons.SiGooglehangoutsmeet />,
    cName: 'nav-text'
  },
  
];

