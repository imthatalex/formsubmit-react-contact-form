# Contact Form with React & FormSubmit.co

This program demonstrates how to build a contact form using React and FormSubmit.co.

## Prerequisites

- Node.js and npm (comes with Node.js)
- A FormSubmit.co account

## Usage
1. Clone or download the repository
2. In the `src` folder of your React project, create a new file called `ContactForm.js` and copy the ContactForm component.
3. In the src/App.js file of your new project, import the ContactForm component and render it.
4. Update the FormSubmit.co email
```html
<form onSubmit={(e) => e.preventDefault()} target="_blank" action="https://formsubmit.co/example@gmail.com" method="POST">
```
5. When you submit the form, the data will be sent to your FormSubmit.co email.

