import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Styles
import "./PopupForm.css";

const PopupForm = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const captchaRef = useRef(null);

  const handleSubmit = (e) => {
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
  }


  return (
    <div className="popup-form">
      <form
        className="information"
        action="https://app.getresponse.com/add_subscriber.html"
        accept-charset="utf-8"
        method="post"
        onSubmit={handleSubmit}
      >
        <p className="policy-text">
          By logging in, you agree to our Terms. Learn how we process your data
          in our Privacy and Cookie Policy.
        </p>
        <h4 className="policy-text">
          We'll send the MP3 to your email account:
        </h4>
        <input
          className="firstname"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="hidden" name="campaign_token" value="PoXa2" />
        <input
          name="thankyou_url"
          value="https://inspiyration.com/thankyoupage/"
          type="hidden"
        />
        <input type="hidden" name="start_day" value="0" />

        <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
        <button className="popup-button" type="submit">
          Send me the MP3 Now!
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
