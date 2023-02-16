import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
const Logout = (props) => {
    const navigate = useNavigate()
    const logout = (e) => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/register')
            }, { withCredentials: true })
            .catch(err => console.error(err));
    }

    return (
        <Button onClick={logout} sx={{flex:1, maxWidth: 100}}   color="error">Logout</Button>
    )
}

export default Logout