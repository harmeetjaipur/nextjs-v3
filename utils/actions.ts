'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (formData: FormData) => {
  const content = formData.get('content')
  if (!content || typeof content !== 'string') {
    throw new Error('Content is required')
  }
  await db.todo.create({
    data: { content },
  })
  revalidatePath('/todos')
}

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: { completed: true },
  })
  revalidatePath('/todos')
}

export const deleteTodo = async (id: string) => {
  await db.todo.delete({
    where: { id },
  })
  revalidatePath('/todos')
}
