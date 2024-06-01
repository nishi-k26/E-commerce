import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")

    //form function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email,password,address,phone);
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