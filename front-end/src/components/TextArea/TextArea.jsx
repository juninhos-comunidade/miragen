function TextArea({ placeholder, variant, onChange }) {
    return (
        <textarea
            className={variant}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default TextArea;