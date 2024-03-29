import {
  IntroBox,
  FilterTag,
  MarketingDetailContainer,
  ExplBox,
  BrandImage,
  MarketingExplain,
  TagBox,
  MarketingTitle,
  DataTable,
  DataColumn,
  DataType,
  DataText,
  ImageContainer,
  MarketingTags,
  MarketingDetailTitle,
  MarketingExplainHeading2,
} from "../styles/marketingStyle";

import styled from "styled-components";
import { BrandTitleRow } from "../styles/HomeStyle";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  getMarketingDetail,
  getMarketingDetailInfo,
  getMarketingViewCount,
} from "../apis/marketing";
import { useEffect } from "react";
import { formatDate } from "../utils/dateFunction";
import NavBar from "../components/NavBar";
import BookmarkFloating from "../components/BookmarkFloating";

interface ContentBlock {
  type: string;
  heading_1?: {
    rich_text: { plain_text: string }[];
  };
  heading_2?: {
    rich_text: { plain_text: string }[];
  };
  paragraph?: {
    rich_text: { plain_text: string }[];
  };
  image?: {
    file: {
      url: string;
      expiry_time: string;
    };
    caption: string;
  };
  bookmark?: {
    url: string[];
  };
  child_database?: {};
}

const queryClient = new QueryClient();

const MarketingDetail = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const marketingId = id ? parseInt(id, 10) : 1;

  const { data: marketingDetailData } = useQuery(
    ["marketingDetail", marketingId],
    () => getMarketingDetail(marketingId),
  );
  const { data: marketingDetailInfo } = useQuery(
    ["marketingDetailInfo", marketingId],
    () => getMarketingDetailInfo(marketingId),
  );

  const { data: viewCount } = useQuery(["viewCount", marketingId], () =>
    getMarketingViewCount(marketingId),
  );

  const renderContent = (content: ContentBlock, index: number) => {
    switch (content.type) {
      case "heading_1":
        return (
          <BrandTitleRow>
            <MarketingDetailTitle key={index}>
              {content.heading_1?.rich_text[0].plain_text}
            </MarketingDetailTitle>
          </BrandTitleRow>
        );
      case "heading_2":
        return (
          <MarketingExplainHeading2 key={index}>
            ggg
            {content.heading_2?.rich_text[0].plain_text}
          </MarketingExplainHeading2>
        );
      case "paragraph":
        if (content.paragraph && content.paragraph.rich_text.length > 0) {
          return (
            <MarketingExplain key={index}>
              {content.paragraph.rich_text[0].plain_text}
            </MarketingExplain>
          );
        } else {
          return null;
          // <MarketingExplain key={index}>
          //   Paragraph 없음 = 노션에서 삭제
          // </MarketingExplain>
        }
      case "image":
        if (content.image && content.image.file && content.image.file.url) {
          // console.log("image: ", content.image.file.url);
          return (
            // <img
            //   key={index}
            //   src={content.image.file.url}
            //   width="60%"
            //   alt="브랜드 디테일 이미지"
            // />
            <BrandImage
              key={index}
              src={content.image.file.url}
              alt="브랜드 디테일 이미지"
            />
          );
        } else {
          return <div key={index}>Image 없음</div>;
        }
      case "child_database":
        return <div key={index}></div>;
      case "bookmark":
        return <div key={index}></div>;
      default:
        return null;
    }
  };

  return (
    <MarketingDetailContainer>
      <NavBar />
      <ImageContainer>
        <CoverImage imageUrl={marketingDetailInfo?.cover_url} />
        <IntroBox>
          <TagBox>
            {marketingDetailInfo?.postTags.map(
              (tag: { tag: string }, index: number) => (
                <FilterTag key={index}>{tag.tag}</FilterTag>
              ),
            )}
          </TagBox>
          <MarketingTitle>{marketingDetailInfo?.title}</MarketingTitle>
          <DataTable>
            <DataColumn>
              <DataType>작성자</DataType>
              <DataText>송채영</DataText>
            </DataColumn>
            <DataColumn>
              <DataType>읽음</DataType>
              <DataText>{marketingDetailInfo?.view_count}</DataText>
            </DataColumn>
            <DataColumn>
              <DataType>작성일자</DataType>
              <DataText>
                {formatDate(marketingDetailInfo?.notion_page_created_time)}
              </DataText>
            </DataColumn>
          </DataTable>
        </IntroBox>
      </ImageContainer>

      <ExplBox>
        <BookmarkFloating />
        {marketingDetailData?.map(
          (contentBlock: ContentBlock, index: number) => {
            const content = renderContent(contentBlock, index);
            return content;
          },
        )}
      </ExplBox>

      <MarketingTags>
        <TagBox>
          {marketingDetailInfo?.postTags.map(
            (tag: { tag: string }, index: number) => (
              <FilterTag key={index} weight={800}>
                {tag.tag}
              </FilterTag>
            ),
          )}
        </TagBox>
      </MarketingTags>

      <Footer />
    </MarketingDetailContainer>
  );
};

export default () => (
  <QueryClientProvider client={queryClient}>
    <MarketingDetail />
  </QueryClientProvider>
);

interface CoverImageProps {
  imageUrl: string;
}
const CoverImage = styled.div<CoverImageProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${(props) => props.imageUrl}) center/cover no-repeat;
`;
