import { Controller, Get, Inject } from '@nestjs/common';
import {
  IMailAdapterService,
  MAIL_ADAPTER_SERVICE,
} from 'src/domain/adapters/mail.adapter';

@Controller()
export class AppController {
  constructor(
    // Injeto o serviço de email, independente da classe utilizada no module
    @Inject(MAIL_ADAPTER_SERVICE)
    private readonly mailService: IMailAdapterService,
  ) {}

  @Get('/send-mail-example')
  async sendMailExample(): Promise<any> {
    await this.mailService.sendMail();

    return {
      message: 'Mail sent!',
    };
  }
}
