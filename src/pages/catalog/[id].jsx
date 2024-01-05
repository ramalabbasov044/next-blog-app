import Data from '../../mock/data/data.json'
import { useRouter } from "next/router";
import Header from '../../shared/components/Header/index'
import styled from 'styled-components';
import { BreadCrumb } from '@/shared/components';
import Head from 'next/head';
let Product = ({ data }) => {
  const breadCrumbData = ["Home","Catalog",'Product']
  const { push , back } = useRouter();

  const addBasket = (item) => {
    let localData = localStorage.getItem("data");

    let updatedData = localData ? JSON.parse(localData) : []
    updatedData.push(item);

    localStorage.setItem("data", JSON.stringify(updatedData));

    push("/basket")
}

  
  return (
    <>
        <Head>
              <title>Product Page</title>
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
                            Product 
                        </BannerHeadTitle>

                        <BreadCrumb
                            breadCrumbData={breadCrumbData} 
                        />
                    </Banner>
                </BannerContainer>

                <AlertContainer>
                    <GoBackButton onClick={back}>
                      Back
                    </GoBackButton>
                </AlertContainer>

                <ProductContainer>
                    
                </ProductContainer>

                <CardContainer>
                    <Card>
                        <Image
                            src={data[0].image}
                        />

                        <ProductDetail>
                            <ProductName>
                                {
                                    data[0].title
                                }
                            </ProductName>

                            <ProductStockCount>
                                  There are { data[0].maxCount } products in stock
                            </ProductStockCount>

                            <ProductPrice>
                                {
                                    data[0].price
                                }
                            </ProductPrice>

                            <ProductAdd onClick={() => addBasket(data[0])}>
                                Add To Cart
                            </ProductAdd>
                        </ProductDetail>
                    </Card>
                </CardContainer>
        </main>
    </>
  );
}
export default Product

export async function getServerSideProps({ query }) {
  let id = query.id
  let data = Data.filter((item) => item.id == id)

  return {
      props: {
        data
      }
  }
};

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

const AlertContainer = styled.div`
    width: 100%;
    height: 100px;
    background: #FAF4F4;
    padding: 0px 15%;
    margin-top: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const GoBackButton = styled.p`
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
`

const CardContainer = styled.div`
    width: 100%;
    padding: 5% 16%;
`

const ProductContainer = styled.div`
  
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const Image = styled.img`
    width: 320px;
`

const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductName = styled.p`
    color: #000;
    font-family: Poppins;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
`

const ProductPrice = styled.p`
    color: #9F9F9F;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 27px
`

const ProductStockCount = styled.p`
    margin-top: 10px;
`

const ProductAdd = styled.div`
    width: 215px;
    height: 64px;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid #000;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`