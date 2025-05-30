function Input(props: any) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}

      //   ou {...props} se quiser passar todas as props
    />
  );
}

export default Input;
