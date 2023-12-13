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
    comments: false,
    candidates: false,
    offers: false,
    rbtn: "",
  });
  function handleChange(evt) {
    const { name, type, checked, value } = evt.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  }
  const submitHandler = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="w-screen h-screen">
      <form
        onSubmit={submitHandler}
        className="w-[40%] flex flex-col mx-auto gap-5 border border-black/50 p-10 rounded-md my-10"
      >
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className=" outline outline-black/50 outline-[2px] px-[5px] rounded-md placeholder:p-2 focus:outline-blue-700"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            placeholder="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            name="email"
            id="email-address"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          >
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="United states">United states</option>
            <option value="United kingdom">United kingdom</option>
            <option value="Argentina">Argentina</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="street-address">street address</label>
          <input
            type="text"
            id="street-address"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            placeholder="City"
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="state">State/Province</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            placeholder="State"
            onChange={handleChange}
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="code">ZIP/Postal code</label>
          <input
            type="text"
            name="code"
            id="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="ZIP/Postal"
            className=" outline outline-black/50 outline-[2px] rounded-md placeholder:p-2 focus:outline-blue-700 px-[5px]"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="font-bold text-[16px] font-sans">By Email</h3>
          <div className="flex gap-[2px] flex-col">
            <div className="flex flex-row-reverse justify-end gap-x-2">
              <label
                htmlFor="comments"
                className="font-bold text-[16px] font-sans"
              >
                Comments
              </label>
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={handleChange}
              />
            </div>

            <p>Get notified when someones posts a comment on posting</p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex flex-row-reverse justify-end gap-x-2">
              <label
                htmlFor="candidates"
                className="font-bold text-[16px] font-sans"
              >
                Candidates
              </label>
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={handleChange}
              />
            </div>

            <p>Get notified when a candidate applies for a job</p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex flex-row-reverse justify-end gap-x-2">
              <label
                htmlFor="offers"
                className="font-bold text-[16px] font-sans"
              >
                Offers
              </label>
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={handleChange}
              />
            </div>

            <p>Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-bold font-sans">Push Notifications</h3>
            <p>These are delivered via SMS to your mobile phone</p>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Everything">Everything</label>
              <input
                type="radio"
                name="rbtn"
                id="Everything"
                value="everything"
                checked={formData.rbtn === "everything"}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-start items-center gap-2">
              <label htmlFor="Same-email">Same as email</label>
              <input
                type="radio"
                name="rbtn"
                id="Same-email"
                value="same as email"
                checked={formData.rbtn === "same as email"}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-start items-center gap-2">
              <label htmlFor="do-push">do push notifications</label>
              <input
                type="radio"
                name="rbtn"
                id="do-push"
                value="do push"
                checked={formData.rbtn === "do push"}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className=" border self-start px-5 py-3 font-bold font-sans text-white rounded-md bg-blue-600 hover:bg-blue-500  transition-all duration-100  ">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
