import axios from 'axios'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

export default function NewToDo() {
  const { addToDo } = useGlobalContext()
  const [content, setContent] = useState('')

  const onSubmit = e => {
    e.preventDefault()

    axios.post('/api/todos/new', { content }).then(res => {
      setContent('')
      addToDo(res.data)
    })
  }

  return (
    <form className="new" onSubmit={onSubmit}>
      <input
        type="text"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className="btn" type="submit" disabled={content.length == 0}>
        Add
      </button>
    </form>
  )
}
