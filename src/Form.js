/*import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom'
import * as yup from 'yup';

const schema = yup.object().shape({
    inputName: yup.string().required('missing credentials').min(2,'name must be at least 2 characters'),

});

function Form() {
    const [currentErrors, setCurrentErrors] = useState([]);
    const [data, setData] = useState({
    inputName: "examplegmail.com",
    specialText: "pass"
  });

  const onChange = (field, val) => {
    const newData = { ...data };
    newData[field] = val;
    setData(newData);
  };
  const onSubmit = () => {
    schema
      .validate(data, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData);
        setCurrentErrors([]);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.name); // ValidationError
        console.log(err.errors);
        setCurrentErrors(err.errors);
      });
  };

  return (
    <div>
    <div>
        name:{" "}
        <input
          value={data.email}
          onChange={(e) => onChange("name", e.target.name)}
        />
      </div>
      <div>
      current errors
      {currentErrors.map((e) => {
        return (
          <div style={{ color: "red" }} key={e}>
            {e}
          </div>
        );
      })}
    </div>
    </div>
  )
}

export default Form;
*/