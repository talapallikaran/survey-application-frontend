export default function EditValidate(
  values,
  setValues,
  uploadedImage,
  setShowEdit,
  notify,
) {
  let errors = {};
  if (!values.name) {
    errors.name = "firstname is required";
  }
  if (!values.last_name) {
    errors.last_name = "lastname is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone) {
    errors.phone = "phone number is required";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone) 
  ) {
    errors.phone = "phone number is invalid";
  }
  if (!values.role_id) {
    errors.role_id = "select your supervisor or worker ";
  }
  if (!values.reporting_person_id && values.role_id == 3 ) {
    errors.reporting_person_id = "select your supervisor";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Confirm password is Not Matched with password";
  } else {
    setValues(" ");
    uploadedImage.current.src = " ";
    notify();
    setTimeout(()=>{window.location.reload()},1000)
    setShowEdit(false);
  }
  return errors;
}
