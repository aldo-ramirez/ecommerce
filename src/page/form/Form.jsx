import "./form.css";
import { useContext } from "react";
import { ShopContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

function Form() {
  const { evaluations, getOrder, values, handleChange } =
    useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div className="form-container">
      <div className="form-title">
        <h3>
          Please fill the information below so that we can send your package
        </h3>
      </div>
      <div className="form">
        <form
          action="submit"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(values);
            getOrder();
            if (
              evaluations.nameEval.test(values.name) &&
              evaluations.lastnameEval.test(values.lastName) &&
              evaluations.addressEval.test(values.address) &&
              evaluations.cityEval.test(values.city) &&
              evaluations.stateEval.test(values.state) &&
              evaluations.countryEval.test(values.country) &&
              evaluations.zipcodeEval.test(values.zipcode) &&
              evaluations.phoneEval.test(values.phone) &&
              evaluations.emailEval.test(values.email)
            ) {
              navigate("/checkout");
            } else {
              alert("Please fill all the fields");
            }
          }}
        >
          <label htmlFor="name">Name(s):</label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="lastName">Last name(s):</label>
          <input
            id="lastName"
            type="text"
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={values.address}
            name="address"
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="city">City/Town:</label>
          <input
            id="city"
            type="text"
            value={values.city}
            name="city"
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="state">State/Province/Region:</label>
          <input
            id="state"
            type="text"
            value={values.state}
            name="state"
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="zipcode">(5 digit) Postal/Zip Code:</label>
          <input
            id="zipcode"
            type="text"
            value={values.zipcode}
            name="zipcode"
            maxLength={5}
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            value={values.country}
            name="country"
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="phone">(10 digit) Phone Number:</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            name="phone"
            maxLength={10}
            onChange={handleChange}
          />
          <hr />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <hr />
          <button type="submit">Save and Continue</button>
          <button onClick={() => navigate("/shop")}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
