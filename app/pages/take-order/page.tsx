"use client";
import { InputField } from "@/app/components/input/inputField";
import { default as Style } from "./style/index.module.scss";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { formValidation, initialValues } from "./constant";
import { FormButton } from "@/app/components/button/button";
import Header from "@/app/components/header";

export default function TakeOrderPage() {
  return (
    <div className={Style.takeOrderPage}>
      <Header />
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
                                <InputField
                                  {...field}
                                  label="Food Name"
                                  data-testid={`foodItemList_[${index}]_foodName`}
                                />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <div
                                data-testid={`foodItemList_[${index}]_foodName_error`}
                              >
                                <ErrorMessage
                                  name={`foodItemList[${index}].foodName`}
                                  render={(message) => (
                                    <div
                                      data-testid={`foodItemList_[${index}]_foodName`}
                                    >
                                      {message}
                                    </div>
                                  )}
                                />
                              </div>
                            </div>
                          </div>

                          <div className={Style.fieldContainer}>
                            <Field name={`foodItemList[${index}].quantity`}>
                              {({ field }: { field: any }) => (
                                <InputField
                                  {...field}
                                  label="Quantity"
                                  data-testid={`foodItemList_[${index}]_quantity`}
                                />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <ErrorMessage
                                name={`foodItemList[${index}].quantity`}
                                render={(message) => (
                                  <div
                                    data-testid={`foodItemList_[${index}]_quantity_error`}
                                  >
                                    {message}
                                  </div>
                                )}
                              />
                            </div>
                          </div>

                          <div className={Style.fieldContainer}>
                            <Field name={`foodItemList[${index}].orderFrom`}>
                              {({ field }: { field: any }) => (
                                <InputField
                                  {...field}
                                  label="From"
                                  data-testid={`foodItemList_[${index}]_orderFrom`}
                                />
                              )}
                            </Field>
                            <div className={Style.fieldErrorMessageContainer}>
                              <ErrorMessage
                                name={`foodItemList[${index}].orderFrom`}
                                render={(message) => (
                                  <div
                                    data-testid={`foodItemList_[${index}]_orderFrom_error`}
                                  >
                                    {message}
                                  </div>
                                )}
                              />
                            </div>
                          </div>

                          {formik?.values?.foodItemList.length > 1 && (
                            <span
                              className={`${Style.closeIcon} material-symbols-outlined`}
                              data-testId={`foodItemList_[${index}]_close`}
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              close
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <FormButton
                      data-testid="add_item"
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
            <FormButton
              data-testid="foodItemList_place_order_button"
              title="Place Order"
              variant="contained"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
