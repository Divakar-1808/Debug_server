import { useTodos } from './hooks/useTodo';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


export default function App() {
    const todos = useTodos();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Debugging Lab – Todos</h1>
            <AddTodo />
            <TodoList todos={todos} />
        </div>
    );
}
