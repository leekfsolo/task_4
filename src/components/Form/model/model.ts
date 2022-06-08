export interface InputData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  notes: string;
}

export type InputElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export const initInput = {
  name: "John Wick",
  email: "donottake@gmail.com",
  phone: "0123456789",
  gender: "Male",
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
