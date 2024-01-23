import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mfa } from '../features/client/clientSlice';


function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUpdateDataClick = () => {
        navigate('/updateData');
      };
    
      const handleUpdatePasswordClick = () => {
        navigate('/updatePassword');
      };

      const onSubmit= (e)=>{
        e.preventDefault();

        dispatch(mfa())
      }
     
  return (
    
    <div>
      <h1>welcome to your profile</h1>
      <button type='submit' className='btn btn-bloc' onClick={handleUpdateDataClick}>update Data</button>
      <button type='submit' className='btn btn-bloc' onClick={handleUpdatePasswordClick}>update Password</button>
      <form onSubmit={onSubmit}>
      <button type='submit' className='btn btn-bloc'>MFA</button>
      </form>
    </div>

  )
}

export default Profile
