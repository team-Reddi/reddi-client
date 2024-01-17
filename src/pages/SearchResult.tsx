import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  BrandResultBox,
  BrandsBox,
  MarketingResultBox,
  MarketingsBox,
  ResultBox,
  ResultContainer,
  ResultText,
  ResultTitle,
} from "../styles/searchStyle";
import { MarketingBox } from "../components/MarketingBox";
import { BrandBox } from "../components/BrandBox";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const inputValue = params.get("input");

  return (
    <ResultContainer>
      <NavBar />
      <ResultBox>
        <ResultTitle>'{inputValue}' 검색 결과</ResultTitle>
        <MarketingResultBox>
          <ResultText>
            ‘{inputValue}’이(가) 본문/제목에 언급된 마케팅 콘텐츠입니다. (3)
          </ResultText>
          <MarketingsBox>
            <MarketingBox
              imgSrc="../assets/images/exemple.png"
              type="PLACE"
              title="더 현대를 밝히는 ‘해리의 꿈의 상점’"
              expl="유럽 어느 골목을 들어와있는 듯한 착각"
              read={727}
            />
            <MarketingBox
              imgSrc="../assets/images/exemple.png"
              type="PLACE"
              title="신세계 백화점의 ‘MAGIC WINTER FANTASY’"
              expl="3분을 위한 9개월의 여정"
              read={1928}
            />
            <MarketingBox
              imgSrc="../assets/images/exemple.png"
              type="PLACE"
              title="시몬스테라스의 ‘크리스마스 일루미네이션"
              expl="동화 속 마을로 단장한 시몬스"
              read={567}
            />
          </MarketingsBox>
        </MarketingResultBox>
        <BrandResultBox>
          <ResultText>
            ‘{inputValue}’이(가) 본문/제목에 언급된 브랜드입니다. (4)
          </ResultText>
          <BrandsBox>
            <BrandBox
              imgSrc=""
              brandName="토스증권"
              location="대기업, 서울"
              tag="IT/금융"
            />
            <BrandBox
              imgSrc=""
              brandName="토스증권"
              location="대기업, 서울"
              tag="IT/금융"
            />
            <BrandBox
              imgSrc=""
              brandName="토스증권"
              location="대기업, 서울"
              tag="IT/금융"
            />
            <BrandBox
              imgSrc=""
              brandName="토스증권"
              location="대기업, 서울"
              tag="IT/금융"
            />
          </BrandsBox>
        </BrandResultBox>
      </ResultBox>
      <Footer />
    </ResultContainer>
  );
};

export default SearchResult;
