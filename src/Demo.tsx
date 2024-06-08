import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { checkPasswordComplexity } from "check-password-complexity";

// console.log("pswd", checkPasswordComplexity("xxxxxxxxF1-=f"));
// const str = "!@#$%^&*(),.?\":{}|<>\\[\\]\\\\/`~;'_+=-";
// const str2 = "!\"#\$%&'\(\)\*\+,-\./:;<=>\?@\[\\\\\\]\^_`\{|\}~";

// console.log(new RegExp(`[${str}]`).test("="));
// console.log(new RegExp(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/).test("="));
// console.log(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/.test("="));
// console.log(new RegExp("`!@#$%^&*()_-+=[]{};':\"\\|,.<>/?~ ").test("="));

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  /**
     checkedRules: (3) ['minLength', 'lowercase', 'number']
      length: 9
      value: "medium"
   */

  console.log(checkPasswordComplexity("abcdefg.", { allowedSpecialChar: "." }));
  /**
     checkedRules: ['lowercase', 'specialCharacter']
      length: 8
      value: "weak"
   */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return <Box sx={{ width: "100%", typography: "body1" }}>coool</Box>;
}
