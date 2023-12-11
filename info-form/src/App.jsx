import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    code: "",
  });
  function handleChange(evt) {
    setFormData((prev) => {
      return { ...prev, [evt.target.name]: evt.target.value };
    });
    console.log(formData);
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            name="email"
            id="email-address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="United states">United states</option>
            <option value="United kingdom">United kingdom</option>
            <option value="Argentina">Argentina</option>
          </select>
        </div>
        <div>
          <label htmlFor="street-address">street address</label>
          <input
            type="text"
            id="street-address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State/Province</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="code">ZIP/Postal code</label>
          <input
            type="text"
            name="code"
            id="code"
            value={formData.code}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
