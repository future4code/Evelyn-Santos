import React from "react";
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import { goToSignUp } from "../../routes/coordinators";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "../../constants/urls"

function LoginPage() {

    const history = useHistory()

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()

    }

    const login = () => {
        axios.post (`${BASE_URL}/user/login`, form)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err, "erro"))
    }

    return (
        <ScreenContainer>
            <LogoImage src={logo}></LogoImage>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"e-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}

                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}

                    >Fazer Login</Button>


                </form>

                <SignUpButtonContainer>
                    <Button
                        onClick={()=>goToSignUp(history)}
                        type={"submit"}
                        fullWidth
                        variant={"outlined"}
                        color={"primary"}

                    >Cadastro</Button>

                </SignUpButtonContainer>


            </InputsContainer>

        </ScreenContainer>
    )

}

export default LoginPage;