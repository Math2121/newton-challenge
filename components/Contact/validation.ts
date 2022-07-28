import * as Yup from 'yup';
export const validationSchema = Yup.object({
    nome:Yup.string().required('Nome e obrigatório'),
    email:Yup.string().required('Email e obrigatório').email('Email inválido'),
    assunto:Yup.string().required('Assunto e obrigatório'),
    mensagem:Yup.string().required('Mensagem e obrigatório'),
})