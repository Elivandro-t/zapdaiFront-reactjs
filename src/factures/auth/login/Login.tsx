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
    Img,
    Select,
    EsquceuSenha,
    Google
} from "./Container"
import zapdaiLogo from "../../../assets/zapdai.png"
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import salve from "../../../service/localStorage/service-localStorage"
import Api from "../../../service/api"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
type FormData = {
    email: string;
    password: string;
};
declare const google: any;

// //npm install react-hook-form
google
export const LoginComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = async (data: FormData) => {
        const resposta = await Api.login(data)
        if (resposta && resposta.acessToken) {
            salve.salva_token(resposta.acessToken)
            setTimeout(() => {
                setLoading(false);
                navigate("/", { replace: true, state: { refresh: Date.now() } });

            }, 1000);

        }

    };
    // criando loading para ir para a rota de login pelo whats
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/login-whats");
        }, 1000);
    };
    const handleMarckClick = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation(); // só pra garantir que o clique não dispare em outro lugar
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/marketPlace", { replace: true, state: { refresh: Date.now() } });
        }, 2000);
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
    function handleCredentialResponse(response: any) {
        console.log("Encoded JWT ID token: ", response.credential);
    }
const senhaRef = useRef<HTMLInputElement>(null);
    const focus = (
        event: React.KeyboardEvent<HTMLInputElement>,
        nextRef?: React.RefObject<HTMLInputElement|null>
    ) => {
        if (event.key === "Enter") {
            // event.preventDefault();
            nextRef?.current?.focus();
        }
    };
    return (
        <Container>
            <Form>
                <Logo src={zapdaiLogo} onClick={handleMarckClick} />
                <Text>Olá, Seja bem-vindo</Text>
                <Btn onClick={handleLoginClick}>
                    <Img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="50"/>

                    Entrar com Whatsapp</Btn>
                <Google id="googleSignInDiv"></Google>
                <Or>OR</Or>
                <FormSub onSubmit={handleSubmit(onSubmit)}>
                    <Select>
                        <Campos
                            hasError={!!errors.email} type="email"
                            autoComplete="current-password"
                            placeholder="E-mail"

                            {...register("email", {
                                required: "Email E obrigatorio",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Formato de e-mail inválido",

                                }
                            })}
                            onKeyDown={(e) => focus(e,senhaRef)}
                        />
                        <Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Erros>
                    </Select>
                    <Select>
                        <Campos hasError={!!errors.email} placeholder="Senha" type="password"
                            autoComplete="current-password"
                            {...register("password", {
                                required: "Senha obrigatória",
                                minLength: {
                                    value: 6,
                                    message: "Mínimo 6 caracteres",
                                },
                            })}
                            onKeyDown={(e) => focus(e)}

                        />
                        <Erros>
                            {errors.password && <p>{errors.password.message}</p>}
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