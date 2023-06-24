//hooks
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
//context
import { useAuth } from '../context/AuthProvider';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import ForgotPasswordModal from '../components/ForgotPasswordModal';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  // Get signIn function from the auth context
  const { signInWithPassword } = useAuth();

  const history = useHistory();
  const handleSignIn = async (data) => {
    const { error } = await signInWithPassword({ ...data });
    if (error) {
      toast.error('Something went wrong');
    } else {
      toast.success('Welcome back');
      history.push('/');
    }
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="pt-10">
          <h1 className="font-bold text-4xl">Log in</h1>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="w-[400px] flex flex-col gap-4 pt-5 ">
              <div className="flex justify-between items-center">
                <p className="text-lg">Email</p>
                <CustomInput name="email" type="email" register={register} />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg">Password</p>
                <CustomInput
                  type="password"
                  name="password"
                  register={register}
                />
              </div>
              <button
                className="rounded-lg mt-4 hover:opacity-80 transition py-2 bg-[#2C2C2C] border-[#2C2C2C] text-white"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <button className="my-4" onClick={() => setIsOpen(!isOpen)}>
            <p>Forgotten Password?</p>
          </button>
          <div className=" bg-neutral-500  h-[1px] w-full" />
          <p className="mt-5 underline">
            Dont have an account? <Link to="/signup">Create an account</Link>
          </p>
        </div>
        {isOpen && <ForgotPasswordModal setIsOpen={setIsOpen} />}
      </div>
    </>
  );
}
