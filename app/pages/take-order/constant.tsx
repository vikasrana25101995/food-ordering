import * as Yup from "yup";
import { takeOrderFormValueType } from "./page.d.ts";

export const initialValues: {
  foodType: string;
  foodItemList: takeOrderFormValueType[];
} = {
  foodType: "",
  foodItemList: [
    {
      foodName: "",
      quantity: "",
      from: "",
    },
  ],
};

export const formValidation = Yup.object().shape({
  foodType: Yup.string().required("Required"),
  foodItemList: Yup.array().of(
    Yup.object().shape({
      foodName: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      from: Yup.string().required("Required"),
    })
  ),
});
