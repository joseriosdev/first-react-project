import Button from './Button'
import { useState } from 'react'

const Form = ({ calculate }) => {
    const [loan, setLoan] = useState('')
    const [months, setMonths] = useState('')
    const [interest, setInterest] = useState('')

    const calculateLoan = (evt) => {
        evt.preventDefault()

        if (!loan || !months || !interest) {
            alert('Por favor ingresar todos los valores')
            return
        }

        calculate(loan, months, interest)

        setLoan('')
        setMonths('')
        setInterest('')
    }

    return (
        <form className="bg-secondary p-3 rounded" onSubmit={calculateLoan}>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                    placeholder="Deuda"
                    type="number"
                    className="form-control"
                    min="1"
                    value={loan}
                    onChange={evt => setLoan(evt.target.value)}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">#</span>
                <input
                    placeholder="Meses"
                    type="number"
                    className="form-control"
                    min="1"
                    value={months}
                    onChange={evt => setMonths(evt.target.value)}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">%</span>
                <input
                    placeholder="Porcentaje Interes"
                    type="number"
                    className="form-control"
                    value={interest}
                    onChange={evt => setInterest(evt.target.value)}
                />
            </div>
            <Button txt="Calcular" color="red" type="submit" />
        </form>
    )
}

export default Form