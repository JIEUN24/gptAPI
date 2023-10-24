import { StTitle, StDivider, StCardContent, StCardContainer, StCardTitle, StbodyWrapper, StThumbnailImg, StIsLoadingContainer } from './CommonStyle';
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const DiaryCard = ({ isLoading, data }) => {
  return (
    <StbodyWrapper>
      <StTitle>{data.title}</StTitle>
      <StCardContainer>
        <StDivider />
        <StCardTitle>
          <CheckCircleTwoTone twoToneColor='#FF9AA2' style={{ marginRight: '6px' }} />
          요약
        </StCardTitle>
        <StCardContent>
          {isLoading ? (
            <StIsLoadingContainer>
              <LoadingOutlined />
            </StIsLoadingContainer>
          ) : data === '' ? (
            <StIsLoadingContainer>
              <span>데이터가 없습니다</span>
            </StIsLoadingContainer>
          ) : (
            data.summary
          )}
        </StCardContent>
      </StCardContainer>
      {data?.thumbnail && <StThumbnailImg src={data.thumbnail} alt='Thumbnail' />}
      <StCardContainer>
        <StDivider />
        <StCardTitle>
          <CheckCircleTwoTone twoToneColor='#ecd800' style={{ marginRight: '6px' }} />
          내가 느낀 감정
        </StCardTitle>
        <StCardContent>
          {isLoading ? (
            <StIsLoadingContainer>
              <LoadingOutlined />
            </StIsLoadingContainer>
          ) : data === '' ? (
            <StIsLoadingContainer>
              <span>데이터가 없습니다</span>
            </StIsLoadingContainer>
          ) : (
            data.emotional_content
          )}
        </StCardContent>
      </StCardContainer>
      <StCardContainer>
        <StDivider />
        <StCardTitle>
          <CheckCircleTwoTone twoToneColor='#B5EAD7' style={{ marginRight: '6px' }} />
          심리분석
        </StCardTitle>
        <StCardContent>
          {isLoading ? (
            <StIsLoadingContainer>
              <LoadingOutlined />
            </StIsLoadingContainer>
          ) : data === '' ? (
            <StIsLoadingContainer>
              <span>데이터가 없습니다</span>
            </StIsLoadingContainer>
          ) : (
            data.analysis
          )}
        </StCardContent>
      </StCardContainer>
      <StCardContainer>
        <StDivider />
        <StCardTitle>
          <CheckCircleTwoTone twoToneColor='#C7CEEA' style={{ marginRight: '6px' }} />
          GPT 조언
        </StCardTitle>
        <StCardContent>
          {isLoading ? (
            <StIsLoadingContainer>
              <LoadingOutlined />
            </StIsLoadingContainer>
          ) : data === '' ? (
            <StIsLoadingContainer>
              <span>데이터가 없습니다</span>
            </StIsLoadingContainer>
          ) : (
            <>
              {data.action_list?.map((ele, idx) => {
                return <li key={idx}>{ele}</li>;
              })}
            </>
          )}
        </StCardContent>
      </StCardContainer>
    </StbodyWrapper>
  );
};

export default DiaryCard;
