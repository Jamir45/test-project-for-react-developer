import React from 'react';
import Head from 'next/head'
import { styled } from '@material-ui/core/styles';
import SidebarMenu from './SidebarMenu';
import home from '../../styles/Home.module.css'
import SearchAppBar from './Header';
import theme from '../theme'

const HomeDiv = styled('div')({
   display: 'grid',
   gridTemplateColumns: '90px auto',
   [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '100px auto',
   },
   [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '110px auto',
   },
});

const ContentDiv = styled('div')({
   height: '100vh',
   backgroundColor: '#f1f3f4',
})

const ChildDiv = styled('div')({
   padding: '15px 25px'
})


const Layout = ({ title, children }) => {
   return (
      <div className={home.container}>
         <Head><title>{title}</title></Head>
         <HomeDiv>
            <SidebarMenu />
            <ContentDiv>
               <SearchAppBar />
               <ChildDiv>
                  {children}
               </ChildDiv>
            </ContentDiv>
         </HomeDiv>
      </div>
   );
};

export default Layout;