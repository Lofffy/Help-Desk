import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header({ children }) { 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    };

    return (
        <header className='header'>
            <div className="logo">
                <Link to='/dashboard'>hello</Link>
            </div>
            <ul>
                {user ? (
                    <>
                    {children} 
                        <li>
                            <Link to='/profile'>profile</Link>
                        </li>
                        <li>
                            <button className='btn' onClick={onLogout}>
                                logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;