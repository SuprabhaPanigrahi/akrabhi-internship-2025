import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./style.css"; 

export function UserForm() {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      users: [{ firstName: "", lastName: "", age: "", gender: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users"
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div className="user-group" key={field.id}>
            <input
              placeholder="First Name"
              {...register(`users.${index}.firstName`)}
            />
            <input
              placeholder="Last Name"
              {...register(`users.${index}.lastName`)}
            />
            <input
              type="number"
              placeholder="Age"
              {...register(`users.${index}.age`)}
            />
            <select {...register(`users.${index}.gender`)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={() => append({ firstName: "", lastName: "", age: "", gender: "" })}>
          Add User
        </button>

        <button type="submit">Submit</button>

        <button type="button" onClick={() => reset()}>
          Reset Form
        </button>
      </form>
    </div>
  ); 
}
