import React from 'react';

export default ({ input, label,meta }) => {
  console.log(input);
  return (
    <div>
        <label>{label}</label>
      <input {...input} />
      {meta.touched && meta.error}
    </div>
  );
};
