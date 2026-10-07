
const Input = (
    {
        name,
        id,
        type,
        placeholder = "",
        label,
        error,
        onChange
    }
) => {
    return (
        <div className="form-group">
            <input className="form-control" type={type} placeholder={placeholder} name={name}
                id={id} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Input
