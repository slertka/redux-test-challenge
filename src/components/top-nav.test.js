import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import { restartGame, generateAuralStatus } from "../actions";
import { TopNav } from "./top-nav";

describe("TopNav", () => {
  it("Dispatches restartGame", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".new");
    link.simulate("click", { preventDeafult() {} });
    expect(dispatch).toHaveBeenCalled();
  });

  it("Dispatches generateAuralStatus", () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find(".status-link");
    link.simulate("click", { preventDeafult() {} });
    expect(dispatch).toHaveBeenCalled();
  });
});
