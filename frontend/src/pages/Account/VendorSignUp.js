import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VendorSignUp = () => {
  
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [id_number, setIDNumber] = useState("");
  const [id_image, setIDImage] = useState("");
  const [address, setAddress] = useState("");
  const [pickup_address, setPickupAddress] = useState("");
  const [return_address, setReturnAddress] = useState("");
  const [profile_photo, setProfilePhoto] = useState("");
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errFirstName, setErrFirstName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errDOB, setErrDOB] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMobileNumber, setErrMobileNumber] = useState("");
  const [errIdNumber, setErrIDNumber] = useState("");
  const [errIdImage, setErrIDImage] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errPickupAddress, setErrPickupAddress] = useState("");
  const [errReturnAddress, setErrReturnAddress] = useState("");
  const [errProfilePhoto, setErrProfilePhoto] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errConfirmPassword, setErrConfirmPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
 
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setErrFirstName("");
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setErrLastName("");
  };
  const handleDOB = (e) => {
    setDOB(e.target.value);
    setErrDOB("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
    setErrMobileNumber("");
  };
  const handleIDNumber = (e) => {
    setIDNumber(e.target.value);
    setErrIDNumber("");
  };
  const handleIDImage = (e) => {
    setIDImage(e.target.value);
    setErrIDImage("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handlePickupAddress = (e) => {
    setPickupAddress(e.target.value);
    setErrPickupAddress("");
  };
  const handleReturnAddress = (e) => {
    setReturnAddress(e.target.value);
    setErrReturnAddress("");
  };
  const handleProfilePhoto = (e) => {
    setProfilePhoto(e.target.value);
    setErrProfilePhoto("");
  };
  const handleUsername = (e) => {
    setUserName(e.target.value);
    setErrUserName("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setErrConfirmPassword("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
 

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!first_name) {
        setErrFirstName("Enter your first name");
      }
      if (!last_name) {
        setErrLastName("Enter your last name");
      }
      if (!dob) {
        setErrDOB("Enter your birthday");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!mobile_number) {
        setErrMobileNumber("Enter your mobile number");
      }
      if (!id_number) {
        setErrIDNumber("Enter your ID number");
      }
      if (!id_image) {
        setErrIDImage("Select your ID Image");
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      if (!pickup_address) {
        setErrPickupAddress("Enter your pickup address");
      }
      if (!return_address) {
        setErrReturnAddress("Enter your return address");
      }
      if (!profile_photo) {
        setErrProfilePhoto("Select your profile photo");
      }
      if (!user_name) {
        setErrUserName("Enter your user name");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!confirm_password) {
        setErrConfirmPassword("Create a confirm password");
      } else {
        if (confirm_password.length < 6) {
          setErrConfirmPassword("Confirm Passwords must be at least 6 characters");
        }
      }

      if (
        first_name &&
        last_name &&
        dob &&
        email &&
        EmailValidation(email) &&
        mobile_number &&
        id_number &&
        id_image &&
        address &&
        pickup_address &&
        return_address &&
        profile_photo &&
        user_name &&
        password &&
        password.length >= 6 &&
        confirm_password &&
        confirm_password.length >= 6
      ) {
        setSuccessMsg(
          `Hello dear ${first_name} ${last_name}, Welcome you to Gravity Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        );
        setFirstName("");
        setLastName("");
        setDOB("");
        setEmail("");
        setMobileNumber("");
        setIDNumber("");
        setIDImage("");
        setAddress("");
        setPickupAddress("");
        setReturnAddress("");
        setProfilePhoto("");
        setUserName("");
        setPassword("");
        setConfirmPassword("");

        fetch("http://localhost:3001/vendorsignup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            dob,
            email,
            mobile_number,
            id_number,
            id_image,
            address,
            pickup_address,
            return_address,
            profile_photo,
            user_name,
            password,
            confirm_password,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Vendor Registration
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with Gravity
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all Gravity services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © Gravity
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    First Name
                  </p>
                  <input
                    onChange={handleFirstName}
                    value={first_name}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                  {errFirstName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errFirstName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Last Name
                  </p>
                  <input
                    onChange={handleLastName}
                    value={last_name}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Last Name"
                  />
                  {errLastName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errLastName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Date Of Birth
                  </p>
                  <input
                    onChange={handleDOB}
                    value={dob}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="date"
                    placeholder="Birth Day"
                  />
                  {errDOB && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errDOB}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Work Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="example@email.com"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Mobile Number
                  </p>
                  <input
                    onChange={handleMobileNumber}
                    value={mobile_number}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="+94778907654"
                  />
                  {errMobileNumber && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errMobileNumber}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    ID Number
                  </p>
                  <input
                    onChange={handleIDNumber}
                    value={id_number}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="ID Number"
                  />
                  {errIdNumber && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errIdNumber}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    ID Image
                  </p>
                  <input
                    onChange={handleIDImage}
                    value={id_image}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="file"
                    placeholder="ID Image"
                  />
                  {errIdImage && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errIdImage}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Address
                  </p>
                  <input
                    onChange={handleAddress}
                    value={address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="road-001, house-115, example area"
                  />
                  {errAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errAddress}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Pickup Address
                  </p>
                  <input
                    onChange={handlePickupAddress}
                    value={pickup_address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="road-001, house-115, example area"
                  />
                  {errPickupAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPickupAddress}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Return Address
                  </p>
                  <input
                    onChange={handleReturnAddress}
                    value={return_address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="road-001, house-115, example area"
                  />
                  {errReturnAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errReturnAddress}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Profile Photo
                  </p>
                  <input
                    onChange={handleProfilePhoto}
                    value={profile_photo}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="file"
                    placeholder="Profile Photo"
                  />
                  {errProfilePhoto && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errProfilePhoto}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    User Name
                  </p>
                  <input
                    onChange={handleUsername}
                    value={user_name}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="User Name"
                  />
                  {errUserName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errUserName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Password
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create password"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Confirm Password
                  </p>
                  <input
                    onChange={handleConfirmPassword}
                    value={confirm_password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Create confirm password"
                  />
                  {errConfirmPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errConfirmPassword}
                    </p>
                  )}
                </div>
   
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the Gravity Shopping{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default VendorSignUp;
