function Input(props) {
  const {
    value,
    onChange,
    type = "text",
    placeholder = "",
    required = false,
    label,
    id,
    name,
  } = props;
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        className={inputClass}
      />
      <label htmlFor={id} className={lableClass}>
        {label}
      </label>
    </div>
  );
}
