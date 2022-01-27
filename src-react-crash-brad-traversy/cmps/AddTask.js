import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (evt) => {
        evt.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text"
                placeholder='Add Task'
                value={text}
                onChange={evt =>  setText(evt.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text"
                placeholder='Date'
                value={day}
                onChange={evt =>  setDay(evt.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox"
                value={reminder}
                checked={reminder}
                onChange={evt =>  setReminder(evt.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask
