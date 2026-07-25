function Upload({ ref, variant, onChange, hidden }){

    return (
       <input
            ref={ref}
            className={`input ${variant}`}
            type="file"
            accept=".pdf"
            onChange={onChange}
            hidden={hidden}
        /> 
    )
}

export default Upload