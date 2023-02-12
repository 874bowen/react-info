import {describe, expect, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react'
import RenderProps from "./components/RenderProps";
import "@testing-library/jest-dom"
import FeedbackForm from './components/FeedbackForm';

describe('renders a link that points to Littl taco shop', () => { 
    it("shows header", ()=> {
      render(<RenderProps />);
      expect(screen.getByText("Little Taco Shop")).toBeInTheDocument();
    })
 })

 describe("Feedback Form", () => {
  test("Submission is disabled if score is lower than  5 and there is no feedback", () => {
    const handleSubmit = vi.fn()
    render(<FeedbackForm onSubmit={handleSubmit} />)
    const rangeInput = screen.getByLabelText(/Score:/)
    fireEvent.change(rangeInput, {target: {value: "4"}})

    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled")
  })
 })