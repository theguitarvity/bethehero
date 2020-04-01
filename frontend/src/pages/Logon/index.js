import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import Swal from 'sweetalert2'
export default function Logon(){
    const [id, setId] = useState()
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        try {
            const response = await api.post('session', {id})
            Swal.fire(
                'Login realizado com sucesso!',
                `Seu nome: ${response.data.name}`,
                'success'                
            )
            localStorage.setItem('ongId', response.data.id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Erro no login, tente novamente!'
            })
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be the hero"/>
                <form onSubmit={ handleLogin }>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size="16"color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={ heroesImg } alt="Heroes"/>
        </div>
    )
}
