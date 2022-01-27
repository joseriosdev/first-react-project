const Resultado = ({ total, porcentaje }) => {
    return (
        <div className="mt-3 p-3 bg-white">
            <div className="input-group mb-3">
                <span className="input-group-text">Total A Pagar $</span>
                <input
                    placeholder={total}
                    type="number"
                    className="form-control"
                    disabled={true}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Porcentaje Global %</span>
                <input
                    placeholder={porcentaje}
                    type="number"
                    className="form-control"
                    disabled={true}
                />
            </div>
        </div>
    )
}

Resultado.defaultProps = {
    total: 0,
    porcentaje: 0
}

export default Resultado