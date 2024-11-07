/*
The ui changes will come here like the color, font-size, font-weight, conditional-rendering check, 
    1.) Required Error
    2.) Add multiple Field
    3.) Remove the field when click on the close button
*/
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TakeOrderPage from "@/app/pages/take-order/page";

describe("The required message on food name on the form submit", () => {
  it("should display an error message when food item is empty", async () => {
    render(<TakeOrderPage />);

    const foodNameInput = screen.getByTestId("foodItemList_0_foodName");
    const submitButton = screen.getByTestID("foodItemList_place_order_button");
    await userEvent.click(submitButton);

    const errorMessage = screen.getByTestId("foodItemList_0_foodName_error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toBe("Required");
  });
});

// test("The required message on quantity on the form submit", () => {});

// test("The required message on from on the form submit", () => {});

// test("On add item add the following fields should be added", () => {});

// test("On click of cross the item should be removed", () => {});
