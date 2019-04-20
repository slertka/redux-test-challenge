import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { GuessForm } from "./guess-form";
import { makeGuess } from "../actions";

describe("GuessForm", () => {
  it("Dispatches makeGuess when the form is submit", () => {
    const dispatch = jest.fn();
    const wrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = "3";
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });
});
