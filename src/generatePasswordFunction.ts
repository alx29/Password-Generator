import { IPasswordState } from "./reducer";

export function generatePasswordAlgorithm(state: IPasswordState) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let validChars = '';

    if (state.includeUppercase) {
        validChars += uppercaseChars;
    }

    if (state.includeLowercase) {
        validChars += lowercaseChars;
    }

    if (state.includeNumbers) {
        validChars += numberChars;
    }

    if (state.includeSpecialChars) {
        validChars += specialChars;
    }

    // Check if at least one character set is selected
    if (validChars.length === 0) {
        return 'Select at least one character set';
    }

    let password = '';

    // Ensure at least one character from each selected character set
    if (state.includeUppercase) {
        const randomIndex = Math.floor(Math.random() * uppercaseChars.length);
        password += uppercaseChars[randomIndex];
    }

    if (state.includeLowercase) {
        const randomIndex = Math.floor(Math.random() * lowercaseChars.length);
        password += lowercaseChars[randomIndex];
    }

    if (state.includeNumbers) {
        const randomIndex = Math.floor(Math.random() * numberChars.length);
        password += numberChars[randomIndex];
    }

    if (state.includeSpecialChars) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        password += specialChars[randomIndex];
    }

    // Generate the remaining characters
    for (let i = password.length; i < state.length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    // Shuffle the password to make it more random
    password = shuffleString(password);
    console.log('###', password);
    return password;
}

// Helper function to shuffle a string
function shuffleString(input: string) {
    const array = input.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}
