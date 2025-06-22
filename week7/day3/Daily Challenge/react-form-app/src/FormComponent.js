import React from "react";

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#deb887", padding: "20px" }}>
        <h2>Sample form</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />
        <label>
          Select your destination
          <br />
          <select name="destination" value={data.destination} onChange={handleChange}>
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
            <option value="Morocco">Morocco</option>
          </select>
        </label>

        <br />
        <label>
          <strong>Dietary restrictions:</strong>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isNutFree"
            checked={data.dietaryRestrictions.isNutFree}
            onChange={handleChange}
          />
          Nuts free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={data.dietaryRestrictions.isLactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={data.dietaryRestrictions.isVegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>

      <div style={{ backgroundColor: "#114b4b", color: "white", padding: "15px" }}>
        <h3>Entered information:</h3>
        <p><em>Your name:</em> {data.firstName} {data.lastName}</p>
        <p><em>Your age:</em> {data.age}</p>
        <p><em>Your gender:</em> {data.gender}</p>
        <p><em>Your destination:</em> {data.destination}</p>
        <p><em>Your dietary restrictions:</em></p>
        <p>**Nuts free : {data.dietaryRestrictions.isNutFree ? "Yes" : "No"}</p>
        <p>**Lactose free : {data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal : {data.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default FormComponent;
