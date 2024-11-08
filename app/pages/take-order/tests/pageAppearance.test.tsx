import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TakeOrderPage from "@/app/pages/take-order/page";

describe("The required message on the form submit", () => {
  it("should display an error message when food item is empty", async () => {
    render(<TakeOrderPage />);
    const submitButton = screen.getByTestId("foodItemList_place_order_button");
    await userEvent.click(submitButton);
    const errorMessage = screen.getByTestId("foodItemList_[0]_foodName_error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Required");
  });

  it("should display an error message when food quantity is empty", async () => {
    render(<TakeOrderPage />);
    const submitButton = screen.getByTestId("foodItemList_place_order_button");
    await userEvent.click(submitButton);
    const errorMessage = screen.getByTestId("foodItemList_[0]_quantity_error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Required");
  });

  it("should display an error message when food order from is empty", async () => {
    render(<TakeOrderPage />);
    const submitButton = screen.getByTestId("foodItemList_place_order_button");
    await userEvent.click(submitButton);
    const errorMessage = screen.getByTestId("foodItemList_[0]_orderFrom_error");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Required");
  });
});

describe("On the click of the add button add the new order row", () => {
  it("should create the new row for the user to enter the order", async () => {
    render(<TakeOrderPage />);
    const addItemButton = screen.getByTestId("add_item");
    await userEvent.click(addItemButton);
    const newFoodOrderItem = screen.getByTestId("foodItemList_[1]_foodName");
    expect(newFoodOrderItem).toBeInTheDocument();
    const newFoodOrderQuantity = screen.getByTestId(
      "foodItemList_[1]_quantity"
    );
    expect(newFoodOrderQuantity).toBeInTheDocument();
    const newFoodOrderFrom = screen.getByTestId("foodItemList_[1]_orderFrom");
    expect(newFoodOrderFrom).toBeInTheDocument();
  });
});

describe("On the click of the add button add the new order row", () => {
  it("should create the new row for the user to enter the order", async () => {
    render(<TakeOrderPage />);
    const addItemButton = screen.getByTestId("add_item");
    await userEvent.click(addItemButton);
    const newFoodOrderItem = screen.getByTestId("foodItemList_[1]_foodName");
    expect(newFoodOrderItem).toBeInTheDocument();
    const newFoodOrderQuantity = screen.getByTestId(
      "foodItemList_[1]_quantity"
    );
    expect(newFoodOrderQuantity).toBeInTheDocument();
    const newFoodOrderFrom = screen.getByTestId("foodItemList_[1]_orderFrom");
    expect(newFoodOrderFrom).toBeInTheDocument();

    const closeButton = screen.getByTestId(`foodItemList_[1]_close`);
    expect(closeButton).toBeInTheDocument();
    await userEvent.click(closeButton);

    expect(newFoodOrderItem).not.toBeInTheDocument();
    expect(newFoodOrderQuantity).not.toBeInTheDocument();
    expect(newFoodOrderFrom).not.toBeInTheDocument();
  });
});
