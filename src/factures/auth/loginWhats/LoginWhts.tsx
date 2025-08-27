import {
    Container
    , Form,
    FormSub
    , Logo,
    Btn,
    Campos,
    Erros,
    Text,
    Foooter,
    Select,
    Titulo
} from "./logwhas"
import zapdaiLogo from "../../../assets/zapdai.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type FormData = {
    tel: string;
};
//npm install react-hook-form

export const LoginWhatsComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        console.log("Dados:", data);
    };
    const navigate = useNavigate()
    const handleLoginClick = () => {
        setTimeout(() => {
            navigate("/marketPlace");
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
                        <Campos hasError={!!errors.tel}

                            type="tel" placeholder="E-mail" {...register("tel", {
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
                            }} />
                        <Erros>
                            {errors.tel && <p>{errors.tel.message}</p>}
                        </Erros>
                    </Select>
                </FormSub>
                <Btn>Entrar com Google</Btn>



            </Form>
            {/* {
                loading && <LoadingSecundary />

            } */}
            <Foooter>zapdai</Foooter>
        </Container>
    )
}