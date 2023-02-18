import backgroundImg from "./assets/bg-main-desktop.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { CardBack, CardFront, Form } from "./components";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      name: yup.string().required("This field is required").max(16, "Max 16 characters"),
      number: yup
        .string()
        .required("This field is required")
        .length(16, "Length must equal 16"),
      month: yup.string().required().max(2),
      year: yup.string().required().max(2),
      cvc: yup.string().required().length(3),
    }),
  });

  return (
    <div className="font-space-grotesk flex">
      <img className="h-screen w-2/6 pointer-events-none" src={backgroundImg} />
      <div className="absolute top-[50%] translate-y-[-50%] left-[10%]">
        <div className="md:w-[400px] xl:w-[500px] 2xl:w-[600px] flex flex-col gap-10 2xl:gap-16">
          <CardFront values={formik.values} />
          <CardBack cvc={formik.values.cvc} />
        </div>
      </div>
      <div className="w-4/6 flex items-center justify-center">
        <Form formik={formik} />
      </div>
    </div>
  );
}

export default App;
