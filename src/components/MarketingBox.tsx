import styled from "styled-components";
import { colors } from "../styles/colors";
import { useNavigate } from "react-router-dom";

interface MarketingProps {
  id: number;
  imgSrc: string;
  type: string;
  title: string;
  expl: string;
  read: number;
  categories: string[];
}

export const MarketingBox = ({
  id,
  imgSrc,
  type,
  title,
  expl,
  read,
  categories,
}: MarketingProps) => {
  const nav = useNavigate();

  const goToMarketingDetail = () => {
    nav(`/marketing/detail/${id}`);
  };

  return (
    <Container onClick={goToMarketingDetail}>
      <MarketingImg src={imgSrc} />
      <TypeText>{type}</TypeText>
      <Title>{title}</Title>
      <ExpText>{expl}</ExpText>
      <CategoryContainer>
        {categories.map((category, index) => (
          <Category key={index}>{category}</Category>
        ))}
      </CategoryContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(33.333% - 1.5rem); */
  width: 20.3125rem;
  height: fit-content;
  align-items: flex-start;
  cursor: pointer;
`;

const MarketingImg = styled.img`
  display: flex;
  width: 20.3125rem;
  height: 14.75rem;
  margin-bottom: 1.5rem;
  object-fit: cover;
  object-position: center;
`;

const TypeText = styled.span`
  color: ${colors.grey_500};
  font-size: 0.875rem;
  font-weight: 500;

  letter-spacing: -0.00875rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.span`
  color: ${colors.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
  margin-bottom: 0.75rem;
`;

const ExpText = styled.span`
  color: ${colors.grey_600};
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
`;
const CategoryContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  gap: 0.34rem;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: ${colors.red};
  background-color: ${colors.light_red}; */
  color: ${colors.black_CTA};
  background-color: ${colors.tag_grey};
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;

  letter-spacing: -0.01rem;
`;
