import React from 'react'
import {useState , useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner';
import { assignRole , reset} from '../features/admin/adminSlice';

function AssignRole() {

    const [formData , setFormData] = useState({
        email:'',
        role:''
    })

    const { email ,role } = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user , isLoading , isError ,isSuccess , message} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError)
            toast.error(message)
        if(isSuccess || user)
           

        dispatch(reset())

    },[user , isError , isSuccess , message , navigate , dispatch])


    const onChange= (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
    const onSubmit= (e)=>{
        e.preventDefault();

        const userData = {
            email,
            role
        }

        dispatch(assignRole(userData))
    }

    if(isLoading)
        return <Spinner />

  return (
        <>
            <section className="heading">
            <h1>Assign Role</h1>
        
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input type="email" className="form-control" id='email' name='email' value={email} placeholder='email' onChange={onChange}/>
                <input type="text" className="form-control" id='role' name='role' value={role} placeholder='role' onChange={onChange}/>

                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-bloc'>submit</button>
                </div>         
            </form>
        </section>
        </>
  )
}

export default AssignRole
