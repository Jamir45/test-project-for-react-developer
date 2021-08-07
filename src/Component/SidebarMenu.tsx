import React from 'react';
import Link from 'next/link';
import { GoGraph } from 'react-icons/go';
import { IoDocumentTextOutline, IoHandRightOutline } from 'react-icons/io5';
import { IoIosDesktop } from 'react-icons/io';
import { BsCardList } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { styled } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';


const MenuDiv = styled('div')({
   height: '100vh',
   backgroundColor: '#663399',
   textAlign: 'center'
});

const MenuList = styled('ul')({
   margin: 0,
   listStyle: 'none',
   padding: 10,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   '& .Active': {
      borderRadius: '5px',
      background: '#7d48b1',
      '& span': {
         fontSize: '14px',
         opacity: '1'
      },
   },
});

const List = styled('li')({
   width: 90,
   padding: '8px 10px',
   margin: 10,
   transition: 'all 0.4s',
   '& a': {
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
   },
   '&:hover': {
      cursor: 'pointer',
      borderRadius: '5px',
      background: '#7d48b1',
      transition: 'all 0.4s',
      '& span': {
         fontSize: '14px',
         transition: 'all 0.4s',
         opacity: '1'
      },
   },
   '& svg': {
      fontSize: '34px',
      color: '#f1f3f4',
      paddingBottom: '5px',
      fontWeight: 'normal'
   },
   '& span': {
      fontSize: '14px',
      color: '#f1f3f4',
      transition: 'all 0.4s',
      opacity: '0'
   },
});

const MenuTitle = styled('h2')({
   color: 'white',
   padding: '15px 0px',
   fontSize: 26,
   margin: 0,
   marginBottom: 5
});


const SidebarMenu = () => {
   const { route } = useRouter()

   return (
      <MenuDiv>
         <MenuList>
            <MenuTitle>Gull</MenuTitle>
            <List
               className={route === '/' && 'Active'}
            >
               <Link href='/'>
                  <a>
                     <GoGraph />
                     <span>Dashboard</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/table' && 'Active'}
            >
               <Link href='/table'>
                  <a>
                     <IoIosDesktop />
                     <span>Table</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/files' && 'Active'}
            >
               <Link href='/files'>
                  <a>
                     <IoDocumentTextOutline />
                     <span>File</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/notes' && 'Active'}
            >
               <Link href='/notes'>
                  <a>
                     <BsCardList />
                     <span>Notes</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/works' && 'Active'}
            >
               <Link href='/works'>
                  <a>
                     <IoHandRightOutline />
                     <span>Works</span>
                  </a>
               </Link>
            </List>
            <List
               className={route === '/clients' && 'Active'}
            >
               <Link href='/clients'>
                  <a>
                     <CgProfile />
                     <span>Client</span>
                  </a>
               </Link>
            </List>
         </MenuList>
      </MenuDiv>
   );
};

export default SidebarMenu;