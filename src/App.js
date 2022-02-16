import { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Coding Test 연습',
      checked: true,
    },
    {
      id: 2,
      text: '인공지능 스터디 참여',
      checked: true,
    },
    {
      id: 3,
      text: 'React 프로젝트 참여',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
  );
};

export default App;
