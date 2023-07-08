import React, { useState } from "react";
import style from "./Form.module.css"

export default function Form ({Login}) {

    const [user, setUser] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({})


    function handleSubmit(event) {
        event.preventDefault();
        Login(user)
    }

    function handleChange(event) {
        setUser({...user, [event.target.name]: event.target.value});

        setErrors(validate({...user, [event.target.name]: event.target.value}))
    }

    function validate(datos) {
        const regex = new RegExp(/^\S+@\S+\.\S+$/)

        let objIncorrect = {}
        
        if(!datos.email) {
            objIncorrect.email = "El email no puede estar vacio"
        } else if (datos.email.length > 35) {
            objIncorrect.email = "El email no puede tener mas de 35 caracteres"
        } else if (!regex.test(datos.email)) {
            objIncorrect.email = "El email no es valido"
        }

        if (!/\d/.test(datos.password)) {
            objIncorrect.password = "El password tiene que contener al menos un numero";
        } else if (datos.password.length < 6 || datos.password.length > 10) {
            objIncorrect.password = "el password debe tener al menos 6 caracteres y menos de 10"
        }

        return objIncorrect;
    }


    return (
        <div>
            <form>
                <label>Email</label>
                <input
                key="2"
                 name="email"
                 onChange={handleChange} value={user.email} type="text" placeholder="email..." />

                 {errors.email && <span style={{color: "red"}}>{errors.email}</span>}


                <label>Password</label>
                <input
                key="3"
                 name="password"
                 onChange={handleChange} value={user.password} type="Password" placeholder="password..." />

                 {errors.password && <span style={{color: "red"}}>{errors.password}</span>}


                 <button className={style.boton} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
};