import { useEffect, useState } from 'react';
import { fetchTodos } from '../api/todoApi';

export const useTodos = () => {

    /*
    BUG F4
    Failure class: Runtime deterministic
    Debugging technique: Backtracking

    BUG:
    State initialized as undefined → map crashes.

    WHAT NEEDS TO BE FIXED:
    Initialize as empty array.
    */

    // ❌ BUGGY CODE
    const [todos, setTodos] = useState();

    // ✅ FIX
    // const [todos, setTodos] = useState([]);

    /*
    BUG F5
    Failure class: Runtime non-deterministic
    Debugging technique: Print statements

    BUG:
    Effect runs twice in StrictMode → duplicate fetch.

    WHAT NEEDS TO BE FIXED:
    Add guard or ref flag.
    */

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    /*
    BUG F6
    Failure class: Runtime deterministic
    Debugging technique: Static analysis

    BUG:
    Hook returns undefined before fetch completes.

    WHAT NEEDS TO BE FIXED:
    Return todos safely.
    */

    // ❌ BUGGY CODE
    return todos;

    // ✅ FIX
    // return todos || [];
};
