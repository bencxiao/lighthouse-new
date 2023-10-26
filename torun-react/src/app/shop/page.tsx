import ShopMain from '@/components/shop/ShopMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ShopPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ShopMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default ShopPage;