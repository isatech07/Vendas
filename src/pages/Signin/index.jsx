import './Signin.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup } from '../../firebase'; // Importação correta

export default function Signin() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    async function handleGoogleSignIn() {
        setLoading(true);
        setError(null);
        try {
            const userObj = await signInWithGooglePopup();
            setUser({
                name: userObj.displayName,
                email: userObj.email,
                photoURL: userObj.photoURL,
                uid: userObj.uid,
            });
            console.log('Usuário logado com sucesso:', userObj);
        } catch (err) {
            console.error('Erro ao fazer login com Google:', err);
            setError(err.message || 'Erro no login');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <div className='card'>
                <h2>Entre na sua conta e negocie com segurança!</h2>
                <p>Acesse e aproveite uma experiência segura dentro da ROTA</p>

                <div className='socialLogin'>
                    <button
                        className='google'
                        onClick={handleGoogleSignIn}
                        disabled={loading}
                        aria-label='Entrar com Google'
                    >
                        <FcGoogle size={24}/>
                    </button>
                    <button className='facebook'><FaFacebook size={24}/></button>
                </div>

                <div className='divider'>
                    <span>Ou continue com</span>
                </div>

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Digite seu email'/>

                <button className='acessarBtn'>Acessar</button>

                <p className='register'>
                    Não tem uma conta? <Link to='/signup'>Cadastre-se</Link>
                </p>
                {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
                {user && (
                    <div className='userInfo' style={{ marginTop: 16 }}>
                        <img 
                            src={user.photoURL}
                            alt={user.name}
                            style={{ width: 48, borderRadius: '50%' }}
                        />
                        <div>
                            <p>
                                <strong>{user.name}</strong>
                            </p>
                            <p style={{ fontSize: 12 }}>{user.email}</p>
                        </div>
                    </div>
                )}
            </div>

            <p className='terms'>
                Ao continuar, você concorda com os <a href='#'>Termos de Uso</a> e <a href='#'>Política de Privacidade</a> da Rota e seus parceiros, e em receber comunicações da Rota.
            </p>
        </div>
    )
}