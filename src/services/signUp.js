/*import { URL_SIGN_UP_PRD } from './../constants/constants';

const signUp = (event) => {
  const {name, email, phone} = event.target.elements;
  console.log(name)
  const phoneSanitized = phone.value.replace(/-|_|\)|\(|\s/gi, "");

  let request = new Request(URL_SIGN_UP_PRD, {  
    method: 'POST', 
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      phone: phoneSanitized
    })
  });

  return fetch(request);
}

export default signUp;*/