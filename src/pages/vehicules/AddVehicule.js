import React from 'react'
import axios from 'axios'

const URLOWNERS = 'http://localhost:9092/query/owner/'
const URL = 'http://localhost:9092/command/vehicule'
let owners = []
axios.get(URLOWNERS).then(res => {
    owners = res.data
    console.log(owners)
}).catch(err => {
    console.log(err)
})
export default function AddVehicule() {

    const [matricule, setMatricule] = React.useState('')
    const [marque, setMarque] = React.useState('')
    const [model, setModel] = React.useState('')
    const [proprietaire, setProprietaire] = React.useState('')
    const [puissance, setPuissance] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicule = {matricule, marque, model, puissance,proprietaire}
        const data ={
            "matricule": matricule,
            "marque": marque,
            "modele": model,
            "puissance": puissance,
            "proprietaire": proprietaire
        }
        console.log(vehicule)
        axios.post(`${URL}/create`, data).then(
            res => {
                console.log(res)
                window.location = '/vehicules'
            }
        ).catch(err => {
            console.log(err)
        })
        console.log('submit')
    }

    if(owners.length === 0) return (<div>Loading...</div>)
    
  return (
    <div className='p-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            <h1 className='text-3xl font-bold mb-6'>Add vehicule</h1>
        </div>
            
        <form className='w-96' onSubmit={handleSubmit}>
        <div className="mb-6">
                <label for="matricule" className="block mb-2 text-sm font-medium text-gray-900 ">Matricule</label>
                <input type="text" name='matricule' value={matricule} onChange={e => setMatricule(e.target.value)} id="matricule" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label for="marque" className="block mb-2 text-sm font-medium text-gray-900 ">Marque</label>
                <input type="text" name='marque' value={marque} onChange={e => setMarque(e.target.value)} id="marque" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label for="model" className="block mb-2 text-sm font-medium text-gray-900 ">Modèle</label>
                <input type="text" name='model' value={model} onChange={e => setModel(e.target.value)} id="model" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label for="puissance" className="block mb-2 text-sm font-medium text-gray-900 ">Puissance</label>
                <input type="text" name='puissance' value={puissance} onChange={e => setPuissance(e.target.value)} id="puissance" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            
            <div className="mb-6">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Owner</label>
                <select name="owner" id="owner" value={proprietaire} onChange={e => setProprietaire(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                    <option> --- Choisir le proprietaire ---</option>
                    {
                        owners.map(owner => {
                            return <option value={owner.id}>{owner.name}</option>
                        })
                    }
                </select>
            </div>

            

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>
  )
}
