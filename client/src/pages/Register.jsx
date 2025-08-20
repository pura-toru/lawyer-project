const longText = "People who use our service may have uploaded your contact information to Lawyery. Learn more. By tapping Submit, you agree to create an account and to Lawyery's Terms, Privacy Policy and Cookies Policy. The privacy policy describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads."

const Register = () => {
  return(
    <div className="register-box">
      <h1>Get started on lawyery</h1>
      <p>We're excited to help you find a lawyer</p>
      <form>
        <label>Name:
          <input name="Name" placeholder="Name" />
        </label>
        <label>Date of birth:
          <input name="Biography" placeholder="Describe yourself" />
          <input name="Biography" placeholder="Describe yourself" />
          <input name="Biography" placeholder="Describe yourself" />
        </label>
        <label>Gender:
          <input name="Gender" placeholder="Select your gender" />
        </label>
        <label>Email:
          <input name="Email" placeholder="Your email address(ex: johndoe@gmail.com)" />
        </label>
        <label>Password:
          <input name="Password" placeholder="Password" />
        </label>
        <label>Retype Password:
          <input name="RetypePassword" placeholder="Retype your password" />
        </label>
        <p>{longText}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Register;
