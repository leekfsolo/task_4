import { inputActionType } from "../components/Form/model/enum";
import {
  emailInvalid,
  emailRequired,
  genderRequired,
  nameRequired,
  notesRequired,
  phoneInvalid,
  phoneRequired,
} from "../utility/validationMessage";
import {
  emailInputValidator,
  emptyInputValidator,
  phoneDigitInputValidator,
  phoneLengthInputValidator,
} from "../utility/validators";

export const useInput = ({
  value,
  type,
}: {
  value: string;
  type: inputActionType;
}) => {
  switch (type) {
    case inputActionType.NAME:
      const isNameEmpty = emptyInputValidator(value);
      return { isValid: !isNameEmpty, msg: nameRequired };

    case inputActionType.EMAIL:
      const isEmailEmpty = emptyInputValidator(value);
      const isEmailValid = emailInputValidator(value);
      return isEmailEmpty
        ? { isValid: !isEmailEmpty, msg: emailRequired }
        : { isValid: isEmailValid, msg: emailInvalid };

    case inputActionType.PHONE:
      const isPhoneEmpty = emptyInputValidator(value);
      const isPhoneValid =
        phoneDigitInputValidator(value) && phoneLengthInputValidator(value);
      return isPhoneEmpty
        ? { isValid: !isPhoneEmpty, msg: phoneRequired }
        : { isValid: isPhoneValid, msg: phoneInvalid };

    case inputActionType.GENDER:
      const isGenderEmpty = emptyInputValidator(value);
      return { isValid: !isGenderEmpty, msg: genderRequired };

    case inputActionType.NOTES:
      const isNotesEmpty = emptyInputValidator(value);
      return { isValid: !isNotesEmpty, msg: notesRequired };
  }
};
