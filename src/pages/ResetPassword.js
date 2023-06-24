//hooks
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
//components
import { supabase } from '../supabase';

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const handleUpdatePassword = async (data) => {
    const { error } = await supabase.auth.updateUser({
      ...data,
    });
    if (error) {
      toast.error('Something went wrong');
      console.log(error);
    } else {
      toast.success('Password Changed successfully.');
      history.push('/');
    }
  };

  return (
    <>
      <div className="p-10 flex flex-col  gap-40">
        <div>
          <h1 className="text-4xl font-bold">Type your new password</h1>
        </div>

        <form onSubmit={handleSubmit(handleUpdatePassword)}>
          <div className="flex mx-auto  w-[30%] flex-col gap-4">
            <input
              placeholder="Your new password"
              className="py-4 px-2 text-black font-semibold border-black border-[1px] outline-none rounded-lg "
              type="password"
              name="password"
              required
              {...register('password')}
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
    </>
  );
};

export default ResetPassword;
