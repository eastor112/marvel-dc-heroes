import { useState } from "react";

const useForm = (initialFields) => {

  const [formValues, setFormValues] = useState(initialFields);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const reset = () => {
    setFormValues(initialFields);
  }


  return {
    handleChange,
    formValues,
    reset
  };
}

export default useForm;
