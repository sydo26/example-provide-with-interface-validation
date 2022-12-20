import { Module, Provider } from '@nestjs/common';
import {
  IMailAdapterService,
  MAIL_ADAPTER_SERVICE,
} from 'src/domain/adapters/mail.adapter';
import { MailModule } from 'src/infra/modules/mail.module';
import { OtherMailService } from 'src/infra/services/other-mail.service';
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
  imports: [
    // Use dynamic module inject custom mail service:
    // MailModule.register(OtherMailService)
    // ------------------------------
    // Use dynamic module inject default mail service:
    // MailModule,
  ],
  controllers: [AppController],
  providers: [
    // Use SMPTEmailService in provider object
    // Se usar o MailModule, não precisa usar o MailService aqui.
    MailService,
  ],
})
export class AppModule {}
