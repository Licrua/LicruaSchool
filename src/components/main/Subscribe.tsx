'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IFormInput {
  email: string;
  name: string;
}

export const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<IFormInput>({ mode: 'onChange' });

  const onSubmit = async (data: IFormInput) => {
    const formData = new FormData();
    formData.append('access_key', '89367206-309f-4284-893f-051c3e5b6f1f');
    formData.append('name', data.name);
    formData.append('email', data.email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('The data has been sent!');
        reset();
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error('Произошла ошибка при отправке данных!');
    }
  };

  return (
    <section className="flex flex-col md:flex-row px-3 my-[60px] justify-evenly items-center">
      <img src="/images/subscribe.png" alt="subscribe" />
      <div className="max-w-[500px]">
        <div className="flex flex-col mb-[20px] gap-[10px]">
          <h2 className="font-medium text-[35px] text-[#5228B6] leading-[62px]">
            Subscribe to our newsletter
          </h2>
          <p>Subscribe to us to see news of our country and so on</p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="lg:min-w-[500px] px-2 flex min-h-[50px]">
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              className={`placeholder:text-purple-500 py-3.5 px-5 h-full card-box-secondary-shadow w-full rounded-2xl ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm pl-2">
              ⚠ {errors.email.message}
            </p>
          )}

          {/* Name */}
          <label className="lg:min-w-[500px] px-2 flex min-h-[50px]">
            <input
              autoComplete="name"
              placeholder="Enter your name"
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 2, message: 'Name is too short' },
                maxLength: { value: 15, message: 'Name is too long' },
                pattern: {
                  value: /^[\p{L}]+$/u,
                  message: 'Name must contain only letters',
                },
              })}
              className={`placeholder:text-purple-500 py-3.5 px-5 h-full card-box-secondary-shadow w-full rounded-2xl ${
                errors.name ? 'border-2 border-red-500' : ''
              }`}
            />
          </label>
          {errors.name && touchedFields.name && (
            <p className="text-red-500 text-sm pl-2">⚠ {errors.name.message}</p>
          )}

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="w-[30%] mb-8 disabled:bg-gray-400 disabled:text-amber-100 flex self-center justify-center rounded-2xl py-3 bg-[#5228B6] text-white"
            type="submit"
          >
            {isSubmitting ? 'Sending' : 'Join Now'}
          </button>
        </form>
      </div>
    </section>
  );
};
