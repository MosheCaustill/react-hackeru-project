const CheckBox = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-check my-1">
      <input
        type="checkbox"
        {...rest}
        id={name}
        name={name}
        className="form-check-input"
      ></input>
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>

      <span className="invalid-feedback">{error}</span>
    </div>
  );
};

export default CheckBox;
