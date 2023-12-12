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
    comments: "",
    candidates: "",
    offers: "",
  });
  function handleChange(evt) {
    const { name, type, checked, value } = evt.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
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
        <div>
          <h3>By Email</h3>
          <div>
            <label htmlFor="comments">Comments</label>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.isChecked}
              onChange={handleChange}
            />
            <p>Get notified when someones posts a comment on posting</p>
          </div>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.isChecked}
              onChange={handleChange}
            />
            <p>Get notified when a candidate applies for a job</p>
          </div>
          <div>
            <label htmlFor="offers">Offers</label>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.isChecked}
              onChange={handleChange}
            />
            <p>Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
