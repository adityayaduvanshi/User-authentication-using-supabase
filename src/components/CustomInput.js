//custom input component

const CustomInput = ({ name, register, type }) => {
  return (
    <input
      className="pt-2 font-light bg-white border-2 w-[250px] rounded-md outline-none transition disabled:opacity-70
  disabled:cursor-not-allowed"
      name={name}
      {...register(name)}
      type={type}
      required
    />
  );
};

export default CustomInput;
