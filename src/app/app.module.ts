import { Module, Provider } from '@nestjs/common';
import {
  IMailAdapterService,
  MAIL_ADAPTER_SERVICE,
} from 'src/domain/adapters/mail.adapter';
import { SMTPMailService } from 'src/infra/services/smtp-mail.service';
import { AppController } from './app.controller';

// Você pode salvar este objeto em outro local se preferir.
const MailService: Provider<IMailAdapterService> = {
  // Aqui usei um Symbol criado especificamente para o MailService
  provide: MAIL_ADAPTER_SERVICE,

  /**
   * A classe do serviço a ser utilizado nessa situação, caso seja
   * necessário trocar o serviço de envio de e-mail, basta trocar
   * esta classe por uma que também possua a interface IMailAdapterService.
   */
  useClass: SMTPMailService,
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MailService],
})
export class AppModule {}
