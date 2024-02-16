import React from "react";
import SwiperComponent from "./SwiperComponent";
import LoginModal from "./LoginModal";
import { showModal } from "../../utils/redux/slice/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../utils/redux/appStore";
export const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const modalState = useSelector(
    (state: RootState) => state.login.loginComponent
  );
  const handleOpenModal = () => {
    dispatch(showModal(true));
  };
  const handleCloseModal = () => {
    dispatch(showModal(false));
  };
  return (
    <div className="h-full bg-[#F5F5F5]">
      <div>
        <SwiperComponent />
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="rounded-md w-64 bg-[#133B58] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#263138] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleOpenModal}
          >
            Login
          </button>
          <LoginModal isOpen={modalState} onClose={handleCloseModal} />
          <button
            type="button"
            className="rounded-md w-64 mt-4 border border-[#133B58] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>
          <span className="ml-20 py-2.5 text-[12px] text-[#4F658E]">
            Contact Us: <span className="text-blue-600">+918793489896</span>
          </span>
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-gray-100 py-4 text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of service
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="text-blue-600 underline">
              Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
