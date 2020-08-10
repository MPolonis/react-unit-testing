import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from "enzyme";
import App from "./App";
import { ValueInput } from "./ValueInput";

Enzyme.configure({adapter: new Adapter()});

it("Generuje trzy komponenty ValueInput", () => {
    const wrapper = mount(<App />);
    const valCount = wrapper.find("input.form-control").length;
    expect(valCount).toBe(3)
});

it("Renderowanie płytkie nie generuje żadnych elementów input", () => {
    const wrapper = shallow(<App />);
    const count = wrapper.find("input.form-control").length
    expect(count).toBe(0)
})