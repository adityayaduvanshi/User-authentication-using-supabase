//hooks
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
//icons
import { AiOutlineClose } from 'react-icons/ai';
//supabase
import { supabase } from '../supabase';

const ForgotPasswordModal = ({ setIsOpen }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const handleForgotPassword = async (data) => {
    const { email } = data;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.REACT_APP_BASE_URL}/reset`,
    });
    if (error) {
      toast.error('Something went wrong');
    } else {
      toast.success('Email sent. Check your email');
      history.push('/');
    }
  };
  return (
    <div className="fixed  z-50 w-[100%]  bg-slate-200 p-10 flex items-center justify-center h-[100vh] ">
      <div className="   bg-neutral-900 top-20  rounded-lg  w-[50%] h-[50%] relative  text-white border-red-950 border p-4   flex flex-col">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-2xl font-bold">Please type your email here</h1>

          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="pt-24 px-[30%] mx-auto w-full">
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            <div className="flex flex-col gap-3">
              <input
                placeholder="Type your email"
                className="py-4 px-2 text-black  font-semibold border-none outline-none rounded-lg "
                type="email"
                name="email"
                required
                {...register('email')}
              />
              <button
                className="py-4 px-6 rounded-xl bg-rose-600 text-lg font-semibold text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
