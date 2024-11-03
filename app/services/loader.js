import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoaderService extends Service {
  @tracked isLoading = false;

  setIsLoading(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Value must be a boolean');
    }
    this.isLoading = value;
  }
}
