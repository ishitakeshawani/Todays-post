export const doValidate = (userData,setError,setPasswordError) => {
  if (
    !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
      userData.email
    )
  ) {
    setError("Please enter a valid email address");
    return false;
  } else {
    setError("");
  }
  if (userData.password !== userData.confirmPassword) {
    setPasswordError("Password does not match!");
    return false;
  } else {
    setPasswordError("");
  }
  return true;
};
