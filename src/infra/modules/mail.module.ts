import { DynamicModule, Module, Type } from '@nestjs/common';
import {
  IMailAdapterService,
  MAIL_ADAPTER_SERVICE,
} from 'src/domain/adapters/mail.adapter';
import { SMTPMailService } from '../services/smtp-mail.service';

const MailService = {
  provide: MAIL_ADAPTER_SERVICE,
  useClass: SMTPMailService,
};

/**
 * Exemplo com um módulo dinâmico
 */
@Module({
  // Configuração padrão, caso não seja utilizado o .register(useClass);
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {
  static register(useClass: Type<IMailAdapterService>): DynamicModule {
    const MailService = {
      provide: MAIL_ADAPTER_SERVICE,
      useClass,
    };
    return {
      module: MailModule,
      providers: [MailService],
      exports: [MailService],
    };
  }
}
