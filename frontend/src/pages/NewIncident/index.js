import React,{useState} from 'react'
import './styles.css'
import LogoImg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const history = useHistory()
 

    async function handleNewIncident(e){
        e.preventDefault()
        const data ={
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data , {
                headers:{
                    Authorization: localStorage.getItem('ongId')
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar o caso, tente novamente');
        }
    } 

    return (
        <div className='newincident-container'>
        <div className='content'>
            <section>
                <img src={LogoImg} alt='Be The Hero' />
                <h1>Cadastrar novo caso</h1>
                <p>
                    Descreva o caso detalhadamente para 
                    encontrar um héroi para resolver isso.
                </p>
                <Link className='back-link' to='/profile'>
                    <FiArrowLeft size={16} color='#e02041'/>
                    Voltar para home
                </Link>
            </section>
            <form>
                <input 
                placeholder='Titulo do caso'
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
                <textarea 
                placeholder='Descrição'
                value={description}
                onChange={e=>setDescription(e.target.value)}
                />
                <input 
                placeholder = 'Valor em reais'
                value={value}
                onChange={e=>setValue(e.target.value)}
                />

            <button onClick={handleNewIncident} className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
    </div>
    )
}
