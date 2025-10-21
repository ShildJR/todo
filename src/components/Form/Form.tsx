import './Form.scss'
import { useState } from 'react';

export const Form = (props: {createNewTodo: Function}) => {
    const [text, setText] = useState<string>('')

    const formSubmit = () => {
        if(text) {
            props.createNewTodo(text);
            setText('')
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}