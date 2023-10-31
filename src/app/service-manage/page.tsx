import ServiceManageMain from '@/components/service-manage/ServiceManageMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ServiceManagePage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ServiceManageMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default ServiceManagePage;