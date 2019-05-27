export function validate(values) {

  const errors = {};

  if (!values.card_number) {
    errors.card_number = "Please enter card number";
  }

  if (!values.user_name) {
    errors.user_name = "Please enter user name";
  }

  if (!values.expiry) {
    errors.expiry = "Please enter expiry";
  }

  if (!values.security_number) {
    errors.security_number = "Please enter security number";
  }

  return errors;
}
