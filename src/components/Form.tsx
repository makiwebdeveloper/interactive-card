import Input from "./Input";

const Form = ({ formik }: any) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[350px] 2xl:w-[450px] flex flex-col gap-5"
    >
      <Input
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        errors={formik.errors.name}
        touched={formik.touched.name}
        label="CARDHOLDER NAME"
        placeholder="e.g. Jane Appleseed"
        showError
      />
      <Input
        name="number"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
        errors={formik.errors.number}
        touched={formik.touched.number}
        label="CARD NUMBER"
        placeholder="e.g. 1234 5678 9123 0000"
        showError
      />
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Input
            name="month"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.month}
            errors={formik.errors.month}
            touched={formik.touched.month}
            placeholder="MM"
            label="MM"
            restStyles="w-[80px] 2xl:w-[100px]"
          />
          <Input
            name="year"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            errors={formik.errors.year}
            touched={formik.touched.year}
            placeholder="YY"
            label="YY"
            restStyles="w-[80px] 2xl:w-[100px]"
          />
        </div>
        <Input
          name="cvc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cvc}
          errors={formik.errors.cvc}
          touched={formik.touched.cvc}
          placeholder="e.g. 123"
          label="CVC"
          restStyles="w-[150px] 2xl:w-[200px]"
        />
      </div>
      <button
        className="bg-indigo-900 transition hover:bg-indigo-800 text-white py-2 rounded-lg 2xl:py-3 2xl:text-2xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
