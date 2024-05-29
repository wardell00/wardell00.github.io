import { SupportText } from './supportpage/SupportText.js';
import { SupportPicker } from './supportpage/Picker.js';
import { TextArea } from './supportpage/TextArea.js';
import { SubmitButton } from './supportpage/SubmitButton.js';
import { EmailTextField } from './supportpage/EmailTextField.js';
import { pickerLogic } from './supportpage/Picker.js';
import { submitButtonFunc } from './supportpage/SubmitButton.js';

function main() {
    
    const supportText = new SupportText();
    supportText.init();
    const pickerDiv = SupportPicker();
    document.getElementById('Support').appendChild(pickerDiv);
    const emailTextField = new EmailTextField();
    emailTextField.init();
    const textArea = new TextArea();
    const submitButton = new SubmitButton();
    textArea.init();
    submitButton.init(); 
    pickerLogic(); 
    document.getElementById('submitButton').addEventListener('click', submitButtonFunc); 
 
}

document.addEventListener('DOMContentLoaded', main);