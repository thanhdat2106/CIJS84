import CustomInput from "./CustomInput.js";
import RadioInput from "./RadioInput.js";
import TextArea from "./TextArea.js";
import Select from "./Select.js";
import Button from "./Button.js";

const dataRadio = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];
const dataOption = [
  { name: "Option 1" },
  { name: "Option 2" },
  { name: "Option 3" },
  { name: "Option 4" },
];

function Register() {
  return (
    <div className="form_register">
      <h2>Student Registration Form</h2>
      <hr />
      <form className="form">
        <CustomInput
          title="First Name"
          className="form_input-first-name"
          type="text"
          placeholder="First Name"
        />
        <br />
        <CustomInput
          title="Middle Name"
          className="form_input-middle-name"
          type="text"
          placeholder="Middle Name"
        />
        <br />
        <CustomInput
          title="Last Name"
          className="form_input-last-name"
          type="text"
          placeholder="Last Name"
        />
        <br />
        <Select title="Course" dataOption={dataOption} />
        <br />
        <RadioInput title="Gender" name="Sex" dataRadio={dataRadio} />
        <br />
        <CustomInput
          title="Phone"
          className="form_input-phone"
          type="tel"
          placeholder="Phone no"
        />
        <br />
        <TextArea title="Current Address" placeholder="Current Address" />
        <br />
        <CustomInput
          title="Email"
          className="form_input-email"
          type="email"
          placeholder="Enter Email"
        />
        <br />
        <CustomInput
          title="Password"
          className="form_input-password"
          type="password"
          placeholder="Enter Password"
        />
        <br />
        <CustomInput
          title="Re-type Password"
          className="form_input-re-password"
          type="password"
          placeholder="Re-type Password"
        />
        <br />
        <Button type="submit" nameBtn="Register" />
      </form>
    </div>
  );
}

export default Register;
