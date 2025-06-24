// js
// react
import { useState } from 'react'
// third
// own
import { mockTodos } from './mocks/todos'
import { TODO_FILTERS } from './consts/consts';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<typeof TODO_FILTERS[keyof typeof TODO_FILTERS]>(TODO_FILTERS.ALL);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const handleCompleted = (id: string, completed: boolean): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const handleFilterChange = (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]): void => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  const handleAddTodo = (title: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  return (
    <div
      className='todoapp'
    >
      <Header
        saveTodo={handleAddTodo}
      />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

// exports.
export default App