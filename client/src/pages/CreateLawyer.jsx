import React, { useState, useEffect } from 'react';
import '../styles/CreateLawyer.css'; 

const CreateLawyer= () => {

  return (
    <div className="lawyer-form">
      <form>
        <label>Name:
          <input name="Name" placeholder="Name" />
        </label>
        <label>Biography:
          <input name="Biography" placeholder="Describe yourself" />
        </label>
        <label>Location:
          <input name="Location" placeholder="Where do you practice?" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLawyer;
