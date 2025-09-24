export type PedidoPagamento = {
    numeroDoPedido: string;
    consumer: consumer,
    payments: payments[]
}

export type consumer = {
    document: string;
    type: string;
    name: string
    email: string;
    phones: phones

}



type phones = {
    mobile_phone: mobile_phone
}

type mobile_phone = {
    area_code: string,
    number: string
    country_code: string
}

export type payments = {
    payment_method: string;
    credit_card?:credit_card
}
export type credit_card = {
    statement_descriptor: string;
    installments: number;
    card_token: any
}