import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9092/command/owner'
export default function AddOwner() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [dateOfBirth, setDateOfBirth] = React.useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={
            "name": name,
            "dateOfBirth": dateOfBirth,
            "email": email
        }
        console.log(data)
        axios.post(`${URL}/create`, data).then(
            res => {
                console.log(res)
                window.location = '/owners'
            }
        ).catch(err => {
            console.log(err)
        })
        console.log('submit')
    }
    
  return (
    <div className='p-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            <h1 className='text-3xl font-bold mb-6'>Add Owner</h1>
        </div>
            
        <form className='w-96' onSubmit={handleSubmit}>
            <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">E-mail</label>
                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label for="dateOfBirth" className="block mb-2 text-sm font-medium text-gray-900 ">Date of birth</label>
                <input type="date" name='dateOfBirth' value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} id="dateOfBirth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>
  )
}
