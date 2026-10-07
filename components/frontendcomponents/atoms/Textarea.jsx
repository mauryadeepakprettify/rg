
const Textarea = ({
    name,
    id,
    placeholder = "",
    label,
    error,
    onChange
}) => {
    return (
        <div className="form-group full">
            <textarea className="form-control" id={id} name={name} placeholder={placeholder} onChange={onChange}></textarea>
            <label htmlFor={id}>{label}</label>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Textarea