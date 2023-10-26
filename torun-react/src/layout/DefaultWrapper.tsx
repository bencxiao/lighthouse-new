//@refresh
"use client";
import React, { useEffect } from 'react';
import { animationCreate } from '@/utils/utils';
import { usePathname } from "next/navigation";
import FooterOne from './footers/footer';
import { childrenType } from '@/interFace/interFace';
import HeaderOne from './headers/HeaderOne';
import FooterTwo from './footers/FooterTwo';
import BacktoTop from '@/utils/BacktoTop';


const Wrapper = ({ children }:childrenType) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 2000);
  }, [])

  return (
    <>
      <BacktoTop/>
      {(() => {
        switch (pathName) {
          case "/":
            return <HeaderOne/> ;
        
          default:
            return <HeaderOne/> ;
        }
      })()} 
      {children}
      {(() => {
        switch (pathName) {
          case "/home-2":
            return <FooterTwo/>;
          case "/blog":
            return <FooterTwo/>;
         
          default:
            return <FooterOne/>;
        }
      })()}
    </>
  );
};

export default Wrapper;
