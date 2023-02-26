import React from 'react'
import { useForm } from "react-hook-form"

type FormValues = {
  Name : string
  Email : string
  preference1 : boolean
  preference2 : boolean
}

export default function App(){
  const { 
    register,
    handleSubmit,
    formState:{ errors }
  } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => console.log(data);

  return (
      <div className="flex items-center justify-center flex-wrap h-screen bg-gradient-to-r from-amber-300 to-amber-400 m-0 p-16">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}>
          <section>
            <h1 className="text-4xl text-white font-bold text-center">Subscribe to our newsletter !</h1>
            <p className='text-sm font-medium my-1 md:my-3'>Welcome to our Newsletter Subscription page. Sign up for daily
              newsletter form below to receive latest news and updates from PeTreats!
            </p>
          </section>
          <hr className="w-48 h-1 mx-auto my-1 bg-amber-200 border-0 rounded md:my-4" />
          <div className='flex flex-col items-center justify-center'>
            <div className='flex my-2'>
              <label className="text-white text-sm font-bold" htmlFor="name">
                Name
              </label>
              <input {...register("Name", { required: "This field is required" })}
                title="Password should be alphabets (A to z)."
                className="ml-3 rounded"
                placeholder="Full Name" id="name" />
            </div>
            <p className='text-rose-600'>{errors.Name?.message}</p>

            <div className='flex my-2'>
              <label className="text-white text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input {...register("Email", { required: "This field is required" })}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="ml-4 rounded"
                placeholder="Email" id="email" type="email"
                title="Email should follow its format (aaa@abcde.abc)." />
            </div>
            <p className='text-rose-600'>{errors.Email?.message}</p>

            <p className="text-white text-sm font-bold">Choose your preferences :</p>
            <div className='flex'>
              <div className='flex items-center m-2'>
                <input {...register("preference1")} className="cursor-pointer" placeholder="Dogs & Puppy" id="choosePreference1" type="checkbox" />
                <label className="text-sm ml-2 inline-flex items-center justify-between w-full p-5 text-slate-700 bg-white border-2 border-slate-100 rounded-2xl shadow-xl cursor-pointer hover:text-white hover:bg-amber-400" htmlFor="choosePreference1">
                  <div className="flex space-x-2">
                    <img className="mb-2 w-7 h-7" src="./catpaw.svg" />
                    <div className="w-full text-lg font-semibold">Cat & Kitten</div>
                  </div>
                </label>
              </div>
              
              <div className='flex items-center m-2'>
                  <input {...register("preference2")} className="cursor-pointer" id="choosePreference2" type="checkbox" />
                    <label className="text-sm ml-2 inline-flex items-center justify-between w-full p-5 text-slate-700 bg-white border-2 border-slate-100 rounded-2xl shadow-xl cursor-pointer hover:text-white hover:bg-amber-400" htmlFor="choosePreference2">
                    <div className="flex space-x-2">
                      <img className="mb-2 w-7 h-7" src="./dogpaw.svg"/>
                      <div className="w-full text-lg font-semibold">Dog & Puppy</div>
                    </div>
                  </label>
              </div>
            </div>

            <input type="submit" className='cursor-pointer rounded-xl shadow-xl bg-yellow-300 text-white font-semibold font-sm px-3 py-2 my-1' />
          </div>
        </form>
      </div>
  );
}