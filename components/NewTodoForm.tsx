import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm
