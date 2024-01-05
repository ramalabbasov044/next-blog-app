import styled from "styled-components";

const BreadCrumb = ({ breadCrumbData }) => {
  return (
    <div>
        <BannerBreadCrumb>
            {breadCrumbData.map((item, index) => (
                <BannerItem key={index}>
                    {item}
                    {index !== breadCrumbData.length - 1 && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
                        </svg>
                    )}
                </BannerItem>
            ))}
        </BannerBreadCrumb>
    </div>
  );
}

export default BreadCrumb;

const BannerBreadCrumb = styled.div`
    display: flex;
    gap: 6px;
`

const BannerItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`