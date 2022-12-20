import { Injectable, Logger } from '@nestjs/common';
import { IMailAdapterService } from 'src/domain/adapters/mail.adapter';

@Injectable()
export class OtherMailService implements IMailAdapterService {
  private logger = new Logger(OtherMailService.name);

  async sendMail(): Promise<void> {
    this.logger.debug('Sending mail via OTHER mail service...');
  }
}
