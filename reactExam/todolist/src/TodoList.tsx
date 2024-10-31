import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Time from './Time';
type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};
const TodoList: React.FC = () => {
  const title: string = '오늘 할 일';
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '공부하기', isChecked: true },
    { id: 2, text: '책읽기', isChecked: true },
    { id: 3, text: '축구하기', isChecked: true },
  ]);
  const [newTodo, setNewTodo] = useState<string>('');

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleCheckedChange = (itemId: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div>
      {title}
      <Time />
      <div>
        <input
          type="text"
          placeholder="할 일 입력"
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
        />
        <Button onClick={addTodo}>추가</Button>
      </div>
      {todos.map((todo) => (
        <div>
          <input
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => handleCheckedChange(todo.id)}
          />
          <span
            onClick={() => {
              handleTodoClick(todo);
            }}
          >
            {todo.isChecked ? <del>{todo.text}</del> : <p>{todo.text}</p>}
          </span>
          <button
            className="delbutton"
            onClick={() => {
              removeTodo(todo.id);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
