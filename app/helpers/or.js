import { helper } from '@ember/component/helper';

export default helper(function or(positional /*, named*/) {
  console.log(positional.some(Boolean));

  return positional.some(Boolean);
});
