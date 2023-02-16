import { Formik } from "formik";
import { User } from "../hooks/useQuery";
import Input from "./Input";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required(),
  name: yup.string().required(),
  phone: yup.string().required(),
});

export default function Form(props: {
  onSubmit: (vals: Omit<User, "id">) => Promise<any>;
}) {
  return (
    <Formik
      onSubmit={props.onSubmit}
      validationSchema={schema}
      initialValues={{
        email: "",
        name: "",
        phone: "",
      }}
    >
      {(f) => (
        <>
          <Input
            name="email"
            value={f.values.email}
            onChange={f.handleChange("email")}
          />
          <Input
            name="name"
            value={f.values.name}
            onChange={f.handleChange("name")}
          />
          <Input
            name="phone"
            value={f.values.phone}
            onChange={f.handleChange("phone")}
          />
          <button
            style={{
              margin: 5,
              padding: 10,
              flex: 1,
              border: "none",
            }}
            onClick={() => f.handleSubmit()}
          >
            Submit
          </button>
        </>
      )}
    </Formik>
  );
}
