import { helper } from '@ember/component/helper';

// Generates a random number between 1 - 10
export default helper(function randomNumber(/*, named*/) {
  return Math.floor(Math.random() * 10) + 1;
});
