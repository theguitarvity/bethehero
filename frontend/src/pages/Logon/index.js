import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Be the hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Sua ID"/>
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
