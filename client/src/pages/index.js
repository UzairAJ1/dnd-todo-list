
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import TodoCard from '@/components/TodoCard'
import { useState } from 'react'
import NewTodo from '@/components/NewTodo'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { QueryClient, QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()
export default function Home() {
  const [newTodo, setNewTodo] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
    <>
    <Navbar />
   
    <div

      className='w-full h-screen bg-[#1C2257] flex flex-col items-center justify-center '>
        <h1 className='text-lg text-white font-bold'>My To-Do App</h1>
      <div className='w-full h-[80%] bg-[#061543] rounded-3xl overflow-y-scroll'>
        <div className='w-full text-center mt-12'>
        <h2 className='text-lg text-white font-bold'>Drag the Todos to set thier priority</h2>
        <h2 className=' text-white font-bold text-sm mt-4'>Or Drag it to left or right to Delete</h2>
        </div>
        
        <div className={newTodo ? 'hidden' : 'p-8'}>
          <TodoCard
            setNewTodo={setNewTodo} />
        </div>
        
          {newTodo &&
          <div className='z-20 absolute w-[70%] h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <NewTodo
            setNewTodo={setNewTodo}
             />
             </div>
          }
       

        {/* <Test /> */}
      </div>

    </div>
    </>
    </QueryClientProvider>
  )
}
