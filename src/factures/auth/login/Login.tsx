import {
    Container
    , Form,
    FormSub
    , Logo,
    Btn,
    Campos,
    Or,
    BtnLogin,
    Erros,
    Text,
    Foooter,
    Select,
    EsquceuSenha,
    Google
} from "./Container"
import zapdaiLogo from "../../../assets/zapdai.png"
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
type FormData = {
    email: string;
    senha: string;
};
declare const google: any;

//npm install react-hook-form
google 
export const LoginComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        console.log("Dados:", data);
    };
    // criando loading para ir para a rota de login pelo whats
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/login-whats");
        }, 1000);
    };
    const handleMarckClick = () => {

            navigate("/");
    };


     useEffect(() => {
   google.accounts.id.initialize({
      client_id: "SEU_CLIENT_ID_AQUI",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);
   function handleCredentialResponse(response:any) {
    console.log("Encoded JWT ID token: ", response.credential);
  }
    return (
        <Container>
            <Form>
                <Logo src={zapdaiLogo} onClick={handleMarckClick}/>
                <Text>Olá, Seja bem-vindo</Text>
                <Btn onClick={handleLoginClick}>Entrar com Whatsapp</Btn>
                <Google id="googleSignInDiv"></Google>
                <Or>OR</Or>
                <FormSub onSubmit={handleSubmit(onSubmit)}>
                    <Select>
                        <Campos hasError={!!errors.email} type="email" placeholder="E-mail" {...register("email", {
                            required: "Email E obrigatorio",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Formato de e-mail inválido",

                            }
                        })} />
                        <Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Erros>
                    </Select>
                    <Select>
                        <Campos hasError={!!errors.email} placeholder="Senha" type="password"

                            {...register("senha", {
                                required: "Senha obrigatória",
                                minLength: {
                                    value: 6,
                                    message: "Mínimo 6 caracteres",
                                },
                            })}
                        />
                        <Erros>
                            {errors.senha && <p>{errors.senha.message}</p>}
                        </Erros>

                    </Select>
                    <EsquceuSenha>
                        <Link to={""} >Esqueceu a senha</Link>
                    </EsquceuSenha>
                    <BtnLogin>Entrar</BtnLogin>


                </FormSub>



            </Form>
            <Foooter>zapdai</Foooter>
             {
                loading && <LoadingSecundary />
            
            }
        </Container>
    )
}