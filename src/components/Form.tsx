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
        hasErrors={formik.touched.name && formik.errors.name}
        label="CARDHOLDER NAME"
        placeholder="e.g. Jane Appleseed"
      />
      <Input
        name="number"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.number}
        hasErrors={formik.touched.number && formik.errors.number}
        label="CARD NUMBER"
        placeholder="e.g. 1234 5678 9123 0000"
      />
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Input
            name="month"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.month}
            hasErrors={formik.touched.month && formik.errors.month}
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
            hasErrors={formik.touched.year && formik.errors.year}
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
          hasErrors={formik.touched.cvc && formik.errors.cvc}
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
