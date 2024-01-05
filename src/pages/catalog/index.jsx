import { Header , BreadCrumb , SortInput } from '../../shared/components/index'
import styled from 'styled-components'
import Head from 'next/head'
import Data from '../../mock/data/data.json'
import Card from '@/shared/components/Card'
import { useRouter } from 'next/router'
import { Router } from '@/shared/constant/router'
import { useState } from 'react'
const Catalog = ({ data:productsData }) => {
    const [data,setData] = useState(productsData)
    const breadCrumbData = ["Home","Catalog"]
    const { push } = useRouter()
    
    const callBackId = (id) => {
        push(Router.product(id))
    }

    const callBackvalue = (param) => {
        let newData = productsData.filter((item) => item.price >= param)
        console.log("newData-",newData," param-",param)
        setData(newData)
    }

    return (
        <Wrapper>
            <Head>
                <title>
                    Catalog
                </title>
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
                            Shop
                        </BannerHeadTitle>

                        <BreadCrumb 
                            breadCrumbData={breadCrumbData} 
                        />
                    </Banner>
                </BannerContainer>

                <FilterBox>
                    <FilterLeft>
                        Filter
                    </FilterLeft>

                    <FilterRight>
                        <SortBody>
                            <SortBox>
                                <SortTitle>
                                    Price
                                </SortTitle>
                                <SortInput
                                    type={"number"}
                                    placeholder={"399"}
                                    callBackvalue={callBackvalue}
                                />
                            </SortBox>
                        </SortBody>
                    </FilterRight>
                </FilterBox>

                <CardBody>
                    {
                        data.map((item) => (
                            <Card 
                                callBackId={callBackId}
                                cardDetail={item}
                            />
                        ))
                    }
                </CardBody>
            </main>
        </Wrapper>
    ) 
}
export async function getServerSideProps() {
    try {
      return {
       props: {
          data: Data,
        },
      }; 
    } catch (err) {
      console.error(err);
    }
}

export default Catalog

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BannerContainer = styled.div`
    position: relative;
    background: #FAF4F4;
    padding: 28px 20%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 316px;
`

const BannerImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 316px;
    object-fit: cover;
`

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 2;
`

const BannerHeadTitle = styled.p`
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
`

const FilterBox = styled.div`
    width: 100%;
    height: 100px;
    background: #FAF4F4;
    padding: 0px 15%;
    margin-top: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FilterLeft = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const FilterRight = styled.div``

const SortBody = styled.div`
    display: flex;
    gap: 29px;
`

const SortBox = styled.div`
    display: flex;
    align-items: center;    
    gap: 17px;
`

const SortTitle = styled.p`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const CardBody = styled.div`
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 100px 15%;
`