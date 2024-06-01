import React,{useState} from 'react';
import Layout from './../../components/Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const navigate = useNavigate();
    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address});
            if(res.data.success){
                toast.success(res.data.message);
                navigate('/login')
            }
            else{
                toast.error(res.data.message);
            }
        }
        catch (error) {
            console.log(error)
            toast.error('Something went wrong!')
        }
    }
  return (
    <Layout title='Register'>
        <div className="register">
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>

            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" required/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" required/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            
            </form>
        </div>
    </Layout>
  )
}

export default Register