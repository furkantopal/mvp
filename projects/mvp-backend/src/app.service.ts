import { Injectable } from '@nestjs/common';
import _ from 'lodash';

import { QueryPayload } from 'mvp-shared-data';

@Injectable()
export class AppService {
  getInfo(): QueryPayload {
    return { payload: _.snakeCase('MVP Backend Started!') };
  }
}
