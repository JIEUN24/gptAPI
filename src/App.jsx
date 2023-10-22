import { useState } from 'react';
import './App.css';
import { callGPT } from './api/gpt';

function App() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true);
      const message = await callGPT({
        prompt: `코딩 강의를 들었다. 프로젝트에 버그가 많이 나왔음. 스택오버플로에서 검색했지만 해결 안되었어.
        역시 gpt를 통해서 해결했다. 근데 이렇게 해결하는게 개발실력에 도움 될까..?`,
      });
      setData(message);
    } catch (err) {
      console.log('error: ', err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={handleClickAPICall}>gpt 호출</button>
      <div>data: {data}</div>
      <div>isLoading: {isLoading ? 'loading...' : 'done'}</div>
    </div>
  );
}

export default App;
