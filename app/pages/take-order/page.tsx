"use client";
import { InputField } from "@/app/components/input/inputField";
import { default as Style } from "./style/index.module.scss";
import { Field, FieldArray, Form, Formik } from "formik";
import { formValidation, initialValues } from "./constant";
import {FormButton} from "@/app/components/button/button";

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
                        <div className={Style.foodItemContainer} key={`foodItem__${index}`}>
                          <Field
                            name={`foodItem[${index}].foodName`}
                            render={({ field }:{field: any}) => (
                              <InputField {...field} label="Food Name" />
                            )}
                          />
                          <Field
                            name={`foodItem[${index}].quantity`}
                            render={({ field }:{field: any}) => (
                              <InputField {...field} label="Quantity" />
                            )}
                          />
                          <Field
                            name={`foodItem[${index}].from`}
                            render={({ field }:{field: any}) => (
                              <InputField {...field} label="From" />
                            )}
                          />
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
                        arrayHelpers.push({ foodName: "", quantity: "", From:"" });
                      }}
                    />
                  </>
                )}
              ></FieldArray>
            </div>
            {/* Form Submmit Button */}
            <FormButton title="Place Order" variant="contained" type="submit"/>
          </Form>
        )}
      </Formik>
    </div>
  );
}
