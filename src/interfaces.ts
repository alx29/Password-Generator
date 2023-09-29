interface IPasswordGenerator {
    setPasswordLength: Function;
    toggleUppercase: Function;
    toggleLowercase: Function;
    toggleNumbers: Function;
    toggleSpecialChars: Function;
    generatePassword: Function;
    length: number;
    password: string;
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSpecialChars: boolean;
}

export interface IGeneralState {
    passwordGenerator: IPasswordGenerator;
}