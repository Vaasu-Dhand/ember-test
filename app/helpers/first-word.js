import { helper } from '@ember/component/helper';

export default helper(function firstWord(positional /*, named*/) {
  return String(positional).split(' ')[0];
});
