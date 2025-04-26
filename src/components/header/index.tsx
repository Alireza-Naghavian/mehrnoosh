"use client"
import useResponsive from '@/hooks/useResponsive.hook';
import React from 'react'
import Logo from '../logo/Logo';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

function MainHeader() {
    const isDesktop = useResponsive("up","lg")
  return <>{isDesktop ? <DesktopHeader /> : <MobileHeader />}</>
}

export default MainHeader;