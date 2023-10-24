import { useState } from 'react';
import { callGPT } from '../api/gpt';
import DiaryInput from '../components/DiaryInput';
import DiaryCard from '../components/DiaryCard';

const MainPage = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ✅ ChatGPT API 호출 함수
  const handleClickAPICall = async (inputData) => {
    try {
      setIsLoading(true);
      const message = await callGPT({
        prompt: inputData,
      });
      setData(message);
    } catch (err) {
      console.log('error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ 입력한 데이터 전송 함수
  const handleSubmit = (inputData) => {
    handleClickAPICall(inputData);
  };
  return (
    <div>
      <DiaryInput onSubmit={handleSubmit} isLoading={isLoading} />
      <DiaryCard isLoading={isLoading} data={data} />
    </div>
  );
};

export default MainPage;
