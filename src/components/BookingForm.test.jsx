import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";


const mockDispatch = jest.fn();

describe("BookingForm Component", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  beforeEach(() => {
    render(
      <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
    );
  });


  test("allows user to select date and time", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);

    
    fireEvent.change(dateInput, { target: { value: "2024-08-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    expect(dateInput.value).toBe("2024-08-15");
    expect(timeSelect.value).toBe("18:00");


    expect(mockDispatch).toHaveBeenCalledWith({
      type: "dateChanged",
      payload: "2024-08-15",
    });
  });

  test("submits the form with the correct data", () => {
    const submitButton = screen.getByRole("button", { name: /Make Your reservation/i });
    

    fireEvent.change(screen.getByLabelText(/Choose date/i), {
      target: { value: "2024-08-15" },
    });
    fireEvent.change(screen.getByLabelText(/Choose time/i), {
      target: { value: "19:00" },
    });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/Occasion/i), {
      target: { value: "Anniversary" },
    });


    fireEvent.click(submitButton);

    expect(screen.getByLabelText(/Choose date/i).value).toBe("2024-08-15");
    expect(screen.getByLabelText(/Choose time/i).value).toBe("19:00");
    expect(screen.getByLabelText(/Number of guests/i).value).toBe("4");
    expect(screen.getByLabelText(/Occasion/i).value).toBe("Anniversary");
  });
});
