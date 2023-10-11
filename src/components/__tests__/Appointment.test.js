import React from "react";
import Appointment from "components/Appointment";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";




describe("Appointment", () => {
    it("renders without crashing", () => {
      render(<Appointment />);
    });

    it("changes the schedule when a new day is selected", async () => {
      const { getByText } = render(<Application />);
    
      await waitForElement(() => getByText("Monday"));
    
      fireEvent.click(getByText("Tuesday"));
    
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  
    it("defaults to Monday and changes the schedule when a new day is selected", () => {
      const { getByText } = render(<Application />);
    
      return waitForElement(() => getByText("Monday")).then(() => {
        fireEvent.click(getByText("Tuesday"));
        expect(getByText("Leopold Silvers")).toBeInTheDocument();
      });
    });
    

  });