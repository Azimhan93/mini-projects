import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "./features/contactsSlice";


const schema = Yup.object({
    name: Yup.string().trim().min(2, "Min 2 chars").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function ContactForm() {
    const dispatch = useDispatch();


    return (
        <Formik
            initialValues={{ name: "", email: "" }}
            validationSchema={schema}
            onSubmit={(values, helpers) => {
            dispatch(addContact(values));
            helpers.resetForm();
        }}
        >
       {({ isValid, isSubmitting }) => (
        <Form style={{ display: "grid", gap: 10, maxWidth: 360 }}>
          <label>
            Name:
            <Field name="name" placeholder="John Doe" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "crimson" }}
            />
          </label>

          <label>
            Email:
            <Field name="email" type="email" placeholder="john@example.com" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "crimson" }}
            />
          </label>

          <button type="submit" disabled={!isValid || isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
    )
}