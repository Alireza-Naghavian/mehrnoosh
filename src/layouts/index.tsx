import { ChildrenProp } from '@/_types/global.t';
import MainFooter from '@/components/footer';
import MainHeader from '@/components/header';
import React from 'react'

function MainLayout({children}:ChildrenProp) {
  return (
    <div>
      <MainHeader />
      <main className='w-full relative h-screen overflow-hidden'>{children}</main>
      <MainFooter />
    </div>
  );
}

export default MainLayout;