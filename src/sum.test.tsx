import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react'
import RenderProps from "./components/RenderProps";
import "@testing-library/jest-dom"

describe('renders a link that points to Littl taco shop', () => { 
    it("shows header", ()=> {
      render(<RenderProps />);
      expect(screen.getByText("Little Taco Shop")).toBeInTheDocument();
    })
 })