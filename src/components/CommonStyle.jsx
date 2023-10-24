import styled from 'styled-components';
import { Image } from 'antd';

export const StWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StbodyContent = styled.div`
  width: 90%;
`;

export const StbodyWrapper = styled.div`
  width: 100%;
`;

export const StTitle = styled.div`
  font-size: 20px;
  margin: 20px 0px;
`;

export const StDivider = styled.div`
  margin-top: 10px;
  border-bottom: 10px solid #eeeeee;
  border-radius: 10px 0px 0px 0px;
`;

export const StCardContainer = styled.div`
  width: 100%;
  min-height: 100px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  margin: 15px 0px;
`;

export const StIsLoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font-size: 12px;
    color: #b9b9b9;
    margin-bottom: 30px;
  }
`;

export const StCardTitle = styled.div`
  font-size: 15px;
  padding: 15px;
  color: #6b6b6b;
`;

export const StCardContent = styled.div`
  padding: 0px 15px 15px 15px;
  font-size: 13px;

  li {
    margin-bottom: 5px;
  }
`;

export const StThumbnailImg = styled(Image)`
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;
