/*
  secret-config.example.js

  Copy this file to `secret-config.js` in the project root and fill the values.
  The real `secret-config.js` is ignored by .gitignore so it will remain local and
  won't be pushed to the repository.

  Example contents (replace the placeholders with your EmailJS credentials):
*/

window.SECRET_CONFIG = {
  EMAILJS: {
    SERVICE_ID: 'Your_Service_ID_Here',
    TEMPLATE_ID: 'Your_Template_ID_Here',
    PUBLIC_KEY: 'Your_Public_Key_Here',
  },

  //set a default send delay (milliseconds).
  DEFAULT_SEND_DELAY_MS: 1000, //You can adjust this value as needed
};
