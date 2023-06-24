//hooks
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
//context
import { useAuth } from '../context/AuthProvider';
//compontent
import CustomInput from '../components/CustomInput';

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { signUp } = useAuth();

  const handleRegistration = async (data) => {
    const { error } = await signUp({ ...data });
    if (error) {
      toast.error('Something went wrong!');
    } else {
      toast.success('Account created.');
      history.push('/');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="pt-10">
        <h1 className="font-bold text-4xl">Sign Up</h1>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="w-[400px] flex flex-col gap-4 pt-5 ">
            <div className="flex justify-between items-center">
              <p className="text-lg ">Email</p>
              <CustomInput name="email" type="email" register={register} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg ">Password</p>
              <CustomInput
                name="password"
                type="password"
                register={register}
              />
            </div>
            <button
              className="rounded-lg mt-4 hover:opacity-80 transition py-2 bg-[#2C2C2C]
border-[#2C2C2C]
text-white"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
