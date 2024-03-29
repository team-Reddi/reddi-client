import styled from "styled-components";
import { colors } from "../styles/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 449px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-top: 3.125rem;
`;

export const HomeImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const EventContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8.13rem;
  gap: 0.75rem;
`;

export const EventText = styled.span`
  color: ${colors.black};
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const EventTitle = styled.span`
  color: ${colors.white};
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 2.925rem */
  letter-spacing: -0.0225rem;
`;

export const EventContent = styled.div`
  color: #bdbdbd;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
  margin-bottom: 0.75rem;
`;

export const EventButton = styled.button`
  color: ${colors.black_CTA};
  background-color: ${colors.white};
  border: none;
  display: inline-flex;
  padding: 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.01rem;
  box-sizing: border-box;

  cursor: pointer;
`;

export const BrandLankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  margin-top: 6.25rem;
  width: fit-content;
`;

export const BrandTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.68rem;
  /* height: 4.1rem; */
`;

export const BrandTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* height: 4.1rem; */
`;

export const HomeTitleWeight = styled.div`
  color: ${colors.black};
  font-size: 3.125rem;
  font-weight: 800;
  line-height: 130%;
  width: fit-content;
  margin-right: 1.25rem;
`;

export const HomeTitle = styled.div`
  color: ${colors.black};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.015rem;
`;

export const DateText = styled.span`
  color: ${colors.grey_500};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.0125rem;
`;

export const LankBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 26.15rem;
  width: fit-content;
  align-items: flex-start;
  margin-top: 2.5rem;
`;

export const GreyLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 60.63194rem;
  height: 0.09175rem;
  background-color: #d6d7dc;
`;

export const MarketingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  width: 64rem;
  margin-top: 6.25rem;
`;

export const MarketingTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  /* height: 4.1rem; */
`;

export const MarketingCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  height: 25rem;
  gap: 2.5rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

export const MarketingLine = styled.div`
  display: flex;
  width: 64rem;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

export const Banner = styled.div`
  display: flex;
  width: 64rem;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  gap: 0.625rem;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: 6.25rem;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BannerText = styled.span`
  color: ${colors.black};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.0225rem;
  width: 100%;
`;

export const Blank = styled.div`
  display: flex;
  height: 27.7rem;
`;

export const SkeletonTitle = styled.div`
  display: flex;
  width: 33.25rem;
  height: 1.875rem;
  background-color: ${colors.background_gray};
`;

export const SkeletonContainer = styled.div`
  display: flex;
  width: 20.3125rem;
  height: 25.625rem;
  border-radius: 0.75rem;
  flex-direction: column;
`;

export const SkeletonBox = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  border-radius: 0.75rem 0.75rem 0rem 0rem;
  width: 20.3125rem;
  height: 14.75rem;
  margin-bottom: 1.5rem;
`;

export const SkeletonTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10.88rem;
  background-color: #fdfdfd;
  border-radius: 0rem 0rem 0.75rem 0.75rem;
  padding-left: 1.5rem;
`;

export const SkeletonType = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 4.625rem;
  height: 1rem;
  margin-bottom: 1.12rem;
`;

export const SkeletonExp1 = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 17.375rem;
  height: 1.5rem;
  margin-bottom: 1.13rem;
`;

export const SkeletonExp2 = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 17.375rem;
  height: 0.9375rem;
  margin-bottom: 0.75rem;
`;

export const SkeletonLine = styled.div`
  display: flex;
  width: auto;
  gap: 0.38rem;
`;

export const SkeletonExp3 = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 2.75rem;
  height: 1.75rem;
`;

export const SkeletonExp4 = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 4.6875rem;
  height: 1.75rem;
`;

export const SkeletonExp5 = styled.div`
  display: flex;
  background-color: ${colors.background_gray};
  width: 5.6875rem;
  height: 1.75rem;
`;
