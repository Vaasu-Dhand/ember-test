// app/validations/number.js
import { validateNumber } from 'ember-changeset-validations/validators';

export default {
  value: [
    validateNumber({
      allowString: true,
      integer: true,
      gt: 0, // greater than 0 (no negative values or zero)
      lte: 50, // less than or equal to 50
    }),
  ],
};
