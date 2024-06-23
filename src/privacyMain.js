// import { PrivacySection } from './privacySection.js';


// function main() {
//     const mainDiv = document.getElementById('Privacy');
//     mainDiv.appendChild(document.createElement('h1').textContent = 'Privacy Policy');
//     const sectionDiv = document.createElement('div');
//     sectionDiv.id = 'privacy-section-container';
//     const section1 = new PrivacySection('Section 1', 'Content for section 1');
//     sectionDiv.appendChild(section1.render());
//     mainDiv.appendChild(sectionDiv);
// }

// document.addEventListener('DOMContentLoaded', main);
import { PrivacySection } from './privacySection.js'; // Ensure the path is correct

function main() {
    const mainDiv = document.getElementById('Privacy');

    // Create the h1 element and set its text content
    const h1 = document.createElement('h1');
    h1.textContent = 'Privacy Policy';
    mainDiv.appendChild(h1);

    // Create the section div and add PrivacySection content
    const sectionDiv = document.createElement('div');
    sectionDiv.id = 'privacy-section-container';
    const section1 = new PrivacySection('1. Introduction', 
        'Welcome to MealVault! MealVault ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.');
    const section2 = new PrivacySection('2. Information We Collect', 'We do not collect any personal information through the MealVault App. The recipes you store in the App are saved locally on your device and synced with iCloud for backup and access across your devices.');
    const section3 = new PrivacySection('3. Support and Feedback', 'If you contact us via email for support or to provide feedback, we will have access to your email address and any other information you choose to provide. We use this information solely to respond to your inquiries and improve our services.');
    const section4 = new PrivacySection('4. Use of Your Information', 'Since we do not collect personal information through the App, our use of your information is limited to the following: \n\n Responding to your support requests and feedback emails. \nImproving our services based on the feedback you provide.');
    const section5 = new PrivacySection('5. Disclosure of Your Information', 'We do not share any information with third parties. The information you provide when contacting us for support or feedback is kept confidential and is not disclosed to any third parties.');
    const section6 = new PrivacySection('6. Security of Your Information', 'We use reasonable measures to protect the information you provide to us via email. However, please be aware that no method of data transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.');
    const section7 = new PrivacySection('7. Policy for Children', 'MealVault is not intended for use by children under the age of 13. We do not knowingly solicit information from or market to children under the age of 13. If we learn we have received personal information from a child under age 13, we will delete that information as quickly as possible. If you become aware of any data we have collected from children under age 13, please contact us at loewenDevs@gmail.com .');
    const section8 = new PrivacySection('8. Changes to This Privacy Policy', 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy.');
    const allSections = [section1, section2, section3, section4, section5, section6, section7, section8];
    allSections.forEach(section => {
        sectionDiv.appendChild(section.render());
    });
    mainDiv.appendChild(sectionDiv);
}

document.addEventListener('DOMContentLoaded', main);
