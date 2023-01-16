# Contact Form with React & FormSubmit.co

## Usage
1. Clone or Download the Repo.
2. In the `src` folder of your React project, create a new file called `ContactForm.js` and copy the [ContactForm Component](/src/App.js).
3. In the src/App.js file of your new project, import the ContactForm component and render it.
4. Update the FormSubmit.co E-Mail
```html
<form onSubmit={(e) => e.preventDefault()} target="_blank" action="https://formsubmit.co/example@gmail.com" method="POST">
```
5. When you Submit the Form, the Data will be sent to your E-Mail.

