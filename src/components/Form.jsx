import React from "react";

const Form = ({ index, formData, handleChange, removeForm, errors }) => {
  return (
    <form className="mb-2">
      <label
        htmlFor={`name-${index}`}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        Full Name:
      </label>
      <input
        id={`name-${index}`}
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleChange(e, index)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      {errors[index]?.name && (
        <p className="text-red-500 text-sm">{errors[index].name}</p>
      )}

      <label
        htmlFor={`age-${index}`}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        Age:
      </label>
      <input
        id={`age-${index}`}
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => handleChange(e, index)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      {errors[index]?.age && (
        <p className="text-red-500 text-sm">{errors[index].age}</p>
      )}

      <label
        htmlFor={`gender-${index}`}
        className="block text-sm font-bold text-gray-700 mb-1"
      >
        Gender:
      </label>
      <select
        id={`gender-${index}`}
        name="gender"
        value={formData.gender}
        onChange={(e) => handleChange(e, index)}
        className="w-full mb-6 p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors[index]?.gender && (
        <p className="text-red-500 text-sm">{errors[index].gender}</p>
      )}

      <button
        type="button"
        className="p-3 flex justify-center self-center bg-red-500 text-white text-2xl font-bold rounded-lg hover:bg-red-600 transition duration-200 absolute right-5"
        onClick={() => removeForm(index)}
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <div className="w-[100%] h-1 mt-12 bg-blue-300"></div>
    </form>
  );
};

export default Form;
