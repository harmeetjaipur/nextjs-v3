'use client'
import { useTransition } from 'react'
import { completeTodo, deleteTodo } from '@/utils/actions'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-400' : 'bg-gray-300'
      }`}
      onClick={() =>
        startTransition(() =>
          todo.completed ? deleteTodo(todo.id) : completeTodo(todo.id)
        )
      }
    >
      {todo.content}
    </div>
  )
}

export default Todo
