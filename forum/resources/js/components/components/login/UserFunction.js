import axios from 'axios';

import { Redirect } from 'react-router-dom';
export const login = user =>{
    var resfn="";
    axios
        .post('http://127.0.0.1:8000/api/admin/login',{
            email:user.email,
            motpass:user.motpass
        },{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            if(res.data.data!=null){
                localStorage.setItem('user_conect',JSON.stringify(res.data.data))
                window.location="/"
            }else{
                alert('information erroné')
            }
        })
        .catch(err =>{
            console.log(err)
            alert('il ya une erreur de connexion')
            return 'erreur'
        })
}
