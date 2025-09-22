import {
    Container
    , Form,
    FormSub
    , Logo,
    Btn,
    Campos,
    Or,
    Erros,
    Text,
    Foooter,
    Select,
    Titulo
} from "./logwhas"
import zapdaiLogo from "../../../assets/zapdai.png"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../service/api"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import { notify } from "../..../../../../service/snackbarService";

type FormData = {
    number: string;
};
//npm install react-hook-form

export const LoginWhatsComponen = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { register,handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit =  async(data: FormData) => {
        const dataResposta = await Api.code(data)
         if(dataResposta.token && dataResposta.message){
            notify(dataResposta.message,"success")
            setLoading(true);
            const token = dataResposta.token;
            const params = new URLSearchParams({ token, number:data.number });
            setTimeout(() => {
                setLoading(false);
                navigate(`/code?${params.toString()}`, { replace: true, state: { refresh: Date.now() } });
            }, 1000);
         }
    };
    const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/");
        }, 1000); // 1 segundo de delay para "simular" carregamento
    };
    return (
        <Container>
            <Form>
                <Logo src={zapdaiLogo} onClick={handleLoginClick}/>
                <Text>Olá, Seja bem-vindo</Text>

                <FormSub >
                    <Titulo>Informe o numero de telefone registrado no sistema!</Titulo>
                    <Select>
                        <Campos hasError={!!errors.number}

                            type="tel" placeholder="Numero de telefone" {...register("number", {
                                required: "Número de telefone é obrigatório",
                                pattern: {
                                    value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                                    message: "Formato de telefone inválido",
                                }, minLength: {
                                    value: 10,
                                    message: "Número muito curto",
                                },
                                maxLength: {
                                    value: 15,
                                    message: "Número muito longo",
                                },
                            })} onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault(); // evita comportamento padrão
                                    handleSubmit(onSubmit)(); // dispara a validação e envio
                                }
                            
                            }} 
                            pattern="[0-9]"
                         />

                        <Erros>
                            {errors.number && <p>{errors.number.message}</p>}
                        </Erros>
                    </Select>
                </FormSub>
                <Btn onClick={()=>handleSubmit(onSubmit)()}>Solicitar</Btn>



            </Form>
            {
                loading && <LoadingSecundary />

            }
            <Foooter>zapdai</Foooter>
        </Container>
    )
}