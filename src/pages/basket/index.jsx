import React, { useState, useEffect } from 'react';
import Header from '../../shared/components/Header/index';
import { BreadCrumb } from '@/shared/components';
import styled from 'styled-components';
import Head from 'next/head';

const Basket = () => {
    const breadCrumbData = ["Home", "Catalog", 'Basket'];
    const [basketData, setBasketData] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("data");
        if (data) {
            setBasketData(JSON.parse(data));
        }
    }, []);

    const handleDelete = (itemId) => {
        const updateBasket = basketData.filter(item => item.id !== itemId);
        setBasketData(updateBasket);
        localStorage.setItem("data", JSON.stringify(updateBasket));
    };

    return (
        <>
            <Head>
                <title>Basket</title>
            </Head>
            <Header />
            <main>
                <BannerContainer>
                    <BannerImage
                        alt="" 
                        src="/banner.svg" 
                    />
                    <Banner>
                        <BannerHeadTitle>
                            Basket
                        </BannerHeadTitle>
                        <BreadCrumb
                            breadCrumbData={breadCrumbData} 
                        />
                    </Banner>
                </BannerContainer>
                <Container>
                    {
                        basketData.map((item) => (
                            <BasketItem key={item.id}>
                                <BasketImage src={item.image} />
                                <BasketTitle>{item.title}</BasketTitle>
                                <BasketPrice>{item.price}</BasketPrice>
                                <DeleteButton onClick={() => handleDelete(item.id)}>
                                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#FBEBB5"/>
                                  </svg>
                                </DeleteButton>
                            </BasketItem>
                        ))
                    }
                </Container>
            </main>
        </>
    )
}

export default Basket;

// Styled Components
const BasketItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BasketImage = styled.img`
    width: 112px;
    height: 90px;
    object-fit: contain;
`;

const BasketTitle = styled.p`
    color: #9F9F9F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const BasketPrice = styled.p`
    color: #9F9F9F;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Container = styled.div`
    padding: 60px 30%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const BannerContainer = styled.div`
    position: relative;
    background: #FAF4F4;
    padding: 28px 20%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 316px;
`;

const BannerImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 316px;
    object-fit: cover;
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 2;
`;

const BannerHeadTitle = styled.p`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
`;
