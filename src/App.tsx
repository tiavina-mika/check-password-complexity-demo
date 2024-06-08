import React, { ChangeEvent, useState } from "react";
import { checkPasswordComplexity } from "check-password-complexity";

const App = () => {
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="root">
      <div>
        <h1>Password Complexity Checker</h1>
      </div>
      <div className="card">
        <div className="form">
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={handleChange}
            placeholder="Enter the password to check its complexity"
          />
        </div>

        <div className="result">
          <label>Result:</label>
          <pre>
            {JSON.stringify(
              // here is the result
              checkPasswordComplexity(password),
              null,
              2,
            )}
          </pre>
        </div>
      </div>
      <footer>
        <div>
          <a href="https://github.com/tiavina-mika/check-password-complexity">
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/check-password-complexity">
            npm
          </a>
          <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
