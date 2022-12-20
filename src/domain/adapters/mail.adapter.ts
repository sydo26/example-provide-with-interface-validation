// Interface que define o contrato de um serviço de envio de e-mail
export interface IMailAdapterService {
  sendMail(): Promise<void>;
}

// Symbol utilizado para injeção de dependência
export const MAIL_ADAPTER_SERVICE = Symbol('MAIL_ADAPTER_SERVICE');
