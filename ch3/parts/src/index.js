import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TextForm from "./text.js";
import CBoxForm from "./cbox.js";
import TextAreaForm from "./textarea.js";
import RadioForm from "./radio.js";
import SelectForm from "./select.js";

ReactDOM.render(
  <div>
    <TextForm />
    <CBoxForm />
    <TextAreaForm />
    <RadioForm items={["チョコ", "梅干し", "ラムネ"]} />
    <SelectForm items={["チョコ", "梅干し", "ラムネ"]} value="ラムネ" />
  </div>,
  document.getElementById("root")
);
