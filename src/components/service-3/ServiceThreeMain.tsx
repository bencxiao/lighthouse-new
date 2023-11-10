import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ServicesForServiceThree from './ServicesForServiceThree';
import FactArea from './FactArea';
import SkillsSection from '../home-two/SkillsSection';
import Brand from '../home/Brand';

const ServiceThreeMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Cloud Solution'/>
            <FactArea/>
            <SkillsSection/>
            <ServicesForServiceThree/>
            <Brand/>
        </>
    );
};

export default ServiceThreeMain;