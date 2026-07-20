function Upload({ onChange }){

    return (
       <input
            type="file"
            accept=".pdf"
            onChange={onChange}
        /> 
    )
    
}

export default Upload