import styled from 'styled-components';
import logo from '../assets/images/logo.png';
const Header = () => {
  return (
    <StWrapper>
      <img src={logo} style={{ width: '80px', marginRight: '15px' }} alt='내 이미지' />
      <p>오늘 어땠니?</p>
      {/* <img src={logo} style={{ width: '50px', marginLeft: '15px' }} alt='내 이미지' /> */}
    </StWrapper>
  );
};

const StWrapper = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Hi Melody', sans-serif;
  font-weight: 700;
  font-size: 50px;
`;

export default Header;
