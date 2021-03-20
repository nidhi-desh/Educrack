 export const validateUsername = (username) => {
    const re = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,12})/;
    let result = re.test(String(username).toLowerCase());
    console.log(result);
    return result;
  };
  

  export const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,12})/;
    let result = re.test(String(password));
    console.log(result);
    return result;
  };
  
  export const validateAlphabetic = (dataString) => {
    const re = /^[a-zA-Z ]*$/;
    let result = re.test(String(dataString));
    return result;
  };
  