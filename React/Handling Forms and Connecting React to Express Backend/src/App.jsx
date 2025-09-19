import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  const delay = (time) =>{
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve()
      }, time*1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Form
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: {value:true,message:"*This field is required"}, pattern: /^\S+@\S+$/i })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        {errors.email && <div className='text-red-700 relative bottom-4 m-0'>{errors.email.message}</div>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {required:{value:true,message:"*This field is required"}})}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {errors.password && <div className='text-red-700 relative bottom-4 m-0'>{errors.password.message}</div>}

        <input
          type="text"
          placeholder="Your name"
          {...register("text")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-blue-300 disabled:cursor-not-allowed "
          disabled={isSubmitting}
          
        >

          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
