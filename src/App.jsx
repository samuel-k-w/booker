import { useState } from "react";
import Form from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
import CustomToast from "./components/CustumToast";

const App = () => {
  const [forms, setForms] = useState([{ name: "", age: "", gender: "" }]);
  const [errors, setErrors] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const addForm = () => {
    setForms([...forms, { name: "", age: "", gender: "" }]);
  };

  const removeForm = (index) => {
    if (forms.length > 1) {
      setForms(forms.filter((_, i) => i !== index));
      setErrors(errors.filter((_, i) => i !== index));
      setShowToast(true);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newForms = [...forms];
    newForms[index][name] = value;
    setForms(newForms);
  };

  const validate = () => {
    const newErrors = forms.map((form) => ({ name: "", age: "", gender: "" }));

    forms.forEach((form, index) => {
      if (!form.name.trim()) {
        newErrors[index].name = "Name is required";
      }

      if (!form.age) {
        newErrors[index].age = "Age is required";
      } else if (isNaN(form.age) || form.age < 0) {
        newErrors[index].age = "Age must be a positive number";
      }

      if (!form.gender) {
        newErrors[index].gender = "Gender is required";
      }
    });

    setErrors(newErrors);
    return newErrors.every((error) => !Object.values(error).some((e) => e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setShowToast(true);
      console.log("Form data:", forms);
      removeForm(1);

      // Proceed with form submission logic
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen w-full">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[40%] my-4 min-h-full min-w-[450px] relative">
        <h2 className="text-green-500 text-2xl font-bold mb-6">
          Airplane Booker Form
        </h2>
        {forms.map((form, index) => (
          <Form
            key={index}
            index={index}
            formData={form}
            handleChange={handleChange}
            removeForm={removeForm}
            errors={errors}
          />
        ))}
        <div className="mt-4">
          <button
            className="p-3 flex justify-center self-center text-2xl bg-green-500 text-white font-bold rounded-lg
        hover:bg-green-600 transition duration-200 absolute right-5"
            onClick={addForm}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>

          <button
            className="py-3 px-8 bg-blue-500 text-white font-bold rounded-lg
        hover:bg-blue-600 transition duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-32 text-green-5000">
        {showToast && <CustomToast closeToast={closeToast} color={"green"} />}
      </div>
    </div>
  );
};

export default App;
