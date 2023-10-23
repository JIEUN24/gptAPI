import { Input, Button } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit }) => {
  // ✅ input 입력 데이터
  const [inputData, setInputData] = useState('');

  // ✅ input 값 저장 함수
  const handleUserInput = (e) => {
    const { value } = e.target;
    setInputData(value);
  };

  // ✅ 작성한 메세지를 상위컴포넌트로 전달
  const handleClick = () => {
    onSubmit(inputData);
  };

  return (
    <div>
      <TextArea defaultValue={inputData} onChange={handleUserInput} placeholder='오늘 일어난 일을 간단히 적어주세요.' />
      <Button loading={isLoading} onClick={handleClick}>
        GPT 회고록 작성
      </Button>
    </div>
  );
};

export default DiaryInput;
