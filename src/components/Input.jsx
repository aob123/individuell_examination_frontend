import { useState } from "react";

const Input = () => {
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");
  const [message, setMessage] = useState({intro: "" ,encipherment: "", middle: "", value: "", end: ""});
  const [data, setData] = useState("");

  const handleEncryptChange = (e) => {
    setEncrypt(e.target.value);
  };

  const handleDecryptChange = (e) => {
    setDecrypt(e.target.value);
  };

  

  const handleSubmit = async (encipherment, string) => {

    if (string == "")
      {
        alert(`Please enter a value to ${encipherment}..`)
        return;
      }

    const url = `http://individuellexaminationcicd-env.eba-vgxyd5jp.eu-north-1.elasticbeanstalk.com/${encipherment}/${string}`;

    try {
      
      const response = await fetch(url);
      const data = await response.text();

      {encipherment == "encrypt" &&
        setMessage({intro: "The" ,encipherment: encipherment + "ed", middle: "value of", value: encrypt, end: "is:"}) 
        ||
        encipherment == "decrypt" &&
        setMessage({intro: "The", encipherment: encipherment + "ed", middle: "value of", value: decrypt, end: "is:"})
      }
    
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="form">
      <div className="inputs">
        <div className="input">
          <label>
            Encrypt:{" "}
            <input
              name="myInput"
              value={encrypt}
              onChange={handleEncryptChange}
            />
          </label>
          <button onClick={() => handleSubmit("encrypt", encrypt)}>
            Encrypt
          </button>
        </div>
        <br />
        <div className="input">
          <label>
            Decrypt:{" "}
            <input
              name="myInput"
              value={decrypt}
              onChange={handleDecryptChange}
            />
          </label>
          <button onClick={() => handleSubmit("decrypt", decrypt)}>
            Decrypt
          </button>
        </div>
      </div>
      <hr />
     
      <p>
        {message.intro} <b>{message.encipherment}</b> {message.middle}{" "}
        <b>{message.value}</b> {message.end}
      </p>
      <h1>{data}</h1>
    </div>
  );
};

export default Input;
