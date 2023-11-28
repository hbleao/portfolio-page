import { FormProps } from "./types"

export const Form = ({
  state,
  setState,
  handleSubmit
}: FormProps) => {
  return (
    <section className='mt-28 bg-slate-800 py-10'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-4/12 mx-auto text-black'>
          <h2 className='text-5xl text-white'>Contact me</h2>
          <input 
            type="text" 
            placeholder='Name' 
            className='p-2' 
            value={state.name} 
            onChange={e => setState({ ...state, name: e.target.value })} 
          />
          <input 
            type="email" 
            placeholder='Email' 
            className='p-2' 
            value={state.email} 
            onChange={e => setState({ ...state, email: e.target.value })} 
          />
          <input 
            type="text" 
            placeholder='Type of enquiry' 
            className='p-2' 
            value={state.enquiry} 
            onChange={e => setState({ ...state, enquiry: e.target.value })} 
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className='p-2'
            value={state.message}
            onChange={e => setState({ ...state, message: e.target.value })}
          />
          <button type='submit' className='bg-black p-2 rounded-md text-white'>
            Submit
          </button>
      </form>
    </section>
  )
}
