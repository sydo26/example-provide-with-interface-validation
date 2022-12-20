import { Injectable, Logger } from '@nestjs/common';
import { IMailAdapterService } from 'src/domain/adapters/mail.adapter';

@Injectable()
export class SMTPMailService implements IMailAdapterService {
  private logger = new Logger(SMTPMailService.name);

  async sendMail(): Promise<void> {
    this.logger.debug('Sending mail via SMTP...');
  }
}
