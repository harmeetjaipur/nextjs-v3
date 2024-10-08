import { NextResponse } from 'next/server'
import db from '@/utils/db'

export const GET = async () => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.create({
    data,
  })
  return NextResponse.json({ data: todo })
}

export const DELETE = async (request: Request) => {
  const data = await request.json()
  const todo = await db.todo.delete({
    where: { id: data.id },
  })
  return NextResponse.json({ data: todo })
}
