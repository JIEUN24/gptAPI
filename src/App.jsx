import { useState } from 'react';
import './App.css';
import { callGPT } from './api/gpt';
import DiaryInput from './components/DiaryInput';

function App() {
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
      console.log(data);
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
      <button onClick={handleClickAPICall}>gpt 호출</button>
      <div>title: {data?.title}</div>
      <div>analysis: {data?.analysis}</div>
      <div>emotional_content: {data?.emotional_content}</div>
      <div>emotional_result: {data?.emotional_result}</div>
      <div>isLoading: {isLoading ? 'loading...' : 'done'}</div>
    </div>
  );
}

export default App;
