import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Auth } from '../context/Authcontext'

const RegisterPage = () => {

  const {registerUser , setRegisterUser} = useContext(Auth) ;

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log('Register Form Data:', data);
    
    // Check if user already exists
    const userExists = registerUser.find((u) => u.email === data.email);
    if (userExists) {
      toast.error("User with this email already exists!");
      return;
    }

    const updatedUsers = [...registerUser, data];
    setRegisterUser(updatedUsers);
    localStorage.setItem("registerUser", JSON.stringify(updatedUsers));

    toast.success("User Registered Successfully!");
    reset();
    navigate('/login');
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F9FAFB] px-4 py-12">
      {/* Background soft glow decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
        {/* Brand Logo Placeholder */}
        <div className="flex justify-center mb-6">
          <div className="h-11 w-11 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-md">
            S
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-1.5 mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create an account
          </h1>
          <p className="text-sm text-slate-500">
            Get started by entering your details below
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register('name', {
                required: 'Full name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters'
                }
              })}
              className={`w-full px-4 py-3 bg-slate-50 border ${
                errors.name ? 'border-red-500' : 'border-slate-200'
              } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all duration-200`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`w-full px-4 py-3 bg-slate-50 border ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all duration-200`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
              className={`w-full px-4 py-3 bg-slate-50 border ${
                errors.password ? 'border-red-500' : 'border-slate-200'
              } rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all duration-200`}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200"
          >
            Create account
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="font-semibold text-slate-900 hover:underline underline-offset-4 cursor-pointer transition-all bg-transparent border-0 p-0"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage



