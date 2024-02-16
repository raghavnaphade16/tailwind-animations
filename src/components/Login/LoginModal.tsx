import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailFocused(true);
    // console.log(`${e.target.value}  ${emailFocused}`);
    console.log(`${password ? "ptrue" : "pfalse"}`);
    console.log(`${passwordFocused ? "pftrue" : "pffalse"}`);

    console.log(`${email ? "etrue" : "efalse"}`);
    console.log(`${emailFocused ? "eftrue" : "effalse"}`);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e);
    console.log("email click");
    setEmailFocused(true);
    // console.log(`${e.target.value}  ${emailFocused}`);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordFocused(true);
    // console.log(`${password}  ${passwordFocused} ${emailFocused}`);
    console.log(`${password ? "ptrue" : "pfalse"}`);
    console.log(`${passwordFocused ? "pftrue" : "pffalse"}`);

    console.log(`${email ? "etrue" : "efalse"}`);
    console.log(`${emailFocused ? "eftrue" : "effalse"}`);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed z-10 inset-0 ">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-950 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white py-5 rounded-lg text-left overflow-hidden shadow-xl transform transition-all duration-300
            sm:my-8 sm:align-middle w-2/6"
            >
              <form onSubmit={handleSubmit}>
                <div
                  className={` transition-all duration-300 bg-white px-4  pb-4 sm:p-6 sm:pb-4 sm:pt-12
                  `}
                >
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      {email && password ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-10`}
                        >
                          Login
                        </h3>
                      ) : email && !password && passwordFocused ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-10`}
                        >
                          Login
                        </h3>
                      ) : password && !email && emailFocused ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-10`}
                        >
                          Login
                        </h3>
                      ) : email && !password ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-5`}
                        >
                          Login
                        </h3>
                      ) : emailFocused || email ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-5`}
                        >
                          Login
                        </h3>
                      ) : passwordFocused || password ? (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 -translate-y-5`}
                        >
                          Login
                        </h3>
                      ) : (
                        <h3
                          className={`text-[28px] leading-6 font-medium text-gray-900 transition-transform duration-300 pb-2 `}
                        >
                          Login
                        </h3>
                      )}

                      {/* email */}

                      <div
                        className={`mt-2 relative transition-transform duration-300 ${
                          password || passwordFocused ? "-translate-y-6" : ""
                        }`}
                      >
                        <label
                          className={`text-gray-500  absolute transition-all duration-300 origin-top-left z-10 font-sans ${
                            emailFocused || email
                              ? "text-xs -top-6 font-bold"
                              : "left-2 text-[15px] top-3"
                          }`}
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className={`w-full border border-gray-300 outline-2 p-2 rounded-md focus:border-[#133B58] focus:outline-double relative z-0 `}
                          value={email}
                          onChange={handleEmailChange}
                          onFocus={() => setEmailFocused(true)}
                          onBlur={() => setEmailFocused(false)}
                          onClick={handleEmailClick}
                        />
                      </div>

                      <div className="mt-2 relative">
                        <label
                          className={`text-gray-500 absolute transition-all duration-300 origin-top-left z-10 ${
                            passwordFocused || password
                              ? "text-xs -top-6 font-bold"
                              : "left-2 text-[15px] top-3"
                          }`}
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          required
                          className={`w-full border border-gray-300  outline-2 p-2 rounded-md focus:border-[#133B58] focus:outline-double relative z-0 `}
                          value={password}
                          onChange={handlePasswordChange}
                          onFocus={() => setPasswordFocused(true)}
                          onBlur={() => setPasswordFocused(false)}
                          onClick={() => setPasswordFocused(true)}
                        />
                      </div>
                      <div className="mt-2 ml-2 self-center text-right">
                        <span className="text-[15px] text-[#133B58] cursor-pointer">
                          Login Using OTP
                        </span>
                      </div>
                      <div className="ml-2 self-center text-right">
                        <span className="text-[15px] text-[#133B58] cursor-pointer">
                          Forgot Password?
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#133B58] text-base font-medium text-white
                     hover:bg-[#263138] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#263138] sm:ml-3 sm:w-auto sm:text-[17px]"
                  >
                    Login
                  </button>
                  <button
                    onClick={onClose}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium
                     text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-[17px]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
