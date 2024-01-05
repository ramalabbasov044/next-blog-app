import { Header } from '../shared/components/index'
import styled from 'styled-components'
import Head from 'next/head'
import { BreadCrumb } from '@/shared/components';
import Data from '../mock/data/data.json'
import Card from '@/shared/components/Card'
import { useRouter } from 'next/router';
import { Router } from '@/shared/constant/router'

export default function Home({ data }) {
    const breadCrumbData = ["Main","Home"];
    const { push } = useRouter()

    const callBackId = (id) => {
        push(Router.product(id))
    }
    return (
      <Wrapper>
          <Head>
              <title>Home</title>
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
                            Home
                        </BannerHeadTitle>

                        <BreadCrumb 
                            breadCrumbData={breadCrumbData} 
                        />
                    </Banner>
                </BannerContainer>

                <CardBody>
                    {
                        data?.map((item) => (
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


const CardBody = styled.div`
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    padding: 100px 15%;
`