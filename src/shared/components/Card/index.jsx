import styled from "styled-components";

const CardC = ({ cardDetail , callBackId }) => {
    return (
        <Card onClick={() => callBackId(cardDetail.id)}>
            <CardImage
                src={cardDetail.image}
                alt={cardDetail.id+"tapilmadi"}
            />
            <CardTitle>
                {
                    cardDetail.title
                }
            </CardTitle>
            <CardPrice>
                {
                    cardDetail.price
                } AZN
            </CardPrice>
        </Card>
    )
}

export default CardC

const Card = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

const CardImage = styled.img`
    width: 210px;
    height: 250px;
    object-fit: cover ;
`

const CardTitle = styled.p`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 6px;
`

const CardPrice = styled.p`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 8px;
`