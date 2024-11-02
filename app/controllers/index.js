import Controller from '@ember/controller';

export default class IndexController extends Controller {
  get myData() {
    console.log(this);

    return `Comes from controller: ${this.model}`; // This will be the data returned from the model hook
  }
}
