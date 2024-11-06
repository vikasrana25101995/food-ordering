/* TODO: 
  1.) Form validation 
  2.) Create the design
  3.) Internationalisation
*/

"use client";
import { InputField } from "@/app/components/input/inputField";
import { default as Style } from "./style/index.module.scss";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { formValidation, initialValues } from "./constant";
import { FormButton } from "@/app/components/button/button";

export default function page() {
  return (
    <div className={Style.takeOrderPage}>
      <h2>Order Food</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={formValidation}
      >
        {(formik) => (
          <Form className={Style.foodOrder}>
            <div>
              <label>Food Item List</label>
              <FieldArray
                name={"foodItemList"}
                render={(arrayHelpers) => (
                  <>
                    <div className={Style.foodItemListContainer}>
                      {formik?.values?.foodItemList?.map((foodItem, index) => (
                        <div
                          className={Style.foodItemContainer}
                          key={`foodItem__${index}`}
                        >
                          <div className={Style.fieldContainer}>
                            <Field name={`foodItemList[${index}].foodName`}>
                              {({ field }: { field: any }) => (
                                <InputField {...field} label="Food Name" />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <ErrorMessage
                                name={`foodItemList[${index}].foodName`}
                              />
                            </div>
                          </div>

                          <div className={Style.fieldContainer}>
                            <Field name={`foodItemList[${index}].quantity`}>
                              {({ field }: { field: any }) => (
                                <InputField {...field} label="Quantity" />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <ErrorMessage
                                name={`foodItemList[${index}].quantity`}
                              />
                            </div>
                          </div>

                          <div className={Style.fieldContainer}>
                            <Field name={`foodItemList[${index}].orderFrom`}>
                              {({ field }: { field: any }) => (
                                <InputField {...field} label="From" />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <ErrorMessage
                                name={`foodItemList[${index}].orderFrom`}
                              />
                            </div>
                          </div>

                          {formik?.values?.foodItemList.length > 1 && (
                            <span
                              className={`${Style.closeIcon} material-symbols-outlined`}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              close
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <FormButton
                      title="Add Item"
                      variant="contained"
                      onClick={() => {
                        arrayHelpers.push({
                          foodName: "",
                          quantity: "",
                          orderFrom: "",
                        });
                      }}
                    />
                  </>
                )}
              ></FieldArray>
            </div>
            {/* Form Submmit Button */}
            <FormButton title="Place Order" variant="contained" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
}
