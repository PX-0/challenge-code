import useInput from "../../hooks/use-input";
import Company from "../../model/Company";
import { CompaniesContext } from "../../store/companies-context";
import MyButton from "./MyButton";
import Xmark from "./icons/Xmark";
import { FormEvent, useContext } from "react";

interface props {
  onClick: () => void;
}

export default function Offcanvas(props: props) {
  const ccx = useContext(CompaniesContext);

  const regEx = new RegExp("[3-9]{3}-[0-9]{3}-[0-9]{4}");

  const {
    enteredValue: enteredNameCompany,
    valueIsValid: nameIsValid,
    onChangeValueHandler: onChangeHandlerNameCompany,
    hasError: nameCompanyHasError,
    onBlurInputHandler: onBlurNameCompanyHandler,
  } = useInput((value: string) => value.trim().length > 3);

  const {
    enteredValue: enteredPhoneCompany,
    valueIsValid: phoneIsValid,
    onChangeValueHandler: onChangeHandlerPhoneCompany,
    hasError: phoneCompanyHasError,
    onBlurInputHandler: onBlurPhoneCompanyHandler,
  } = useInput((value: string) => regEx.test(value));

  const {
    enteredValue: enteredAddressCompany,
    valueIsValid: addressIsValid,
    onChangeValueHandler: onChangeHandlerAddressCompany,
    hasError: addressCompanyHasError,
    onBlurInputHandler: onBlurAddressCompanyHandler,
  } = useInput((value: string) => value.trim() !== "");

  const {
    enteredValue: enteredRevenueCompany,
    valueIsValid:revenueIsValid,
    onChangeValueHandler: onChangeHandlerRevenueCompany,
    hasError: revenueCompanyHasError,
    onBlurInputHandler: onBlurRevenueCompanyHandler,
  } = useInput((value: string) => value.trim().length > 1);

  const formValid = phoneIsValid&&addressIsValid&&revenueIsValid&&nameIsValid;

  function onClickHandler() {
    props.onClick();
  }

  function onSubmitHandler(event: FormEvent) {
    event.preventDefault();

    if (formValid) {
      const newComp = new Company(
        enteredNameCompany,
        enteredAddressCompany,
        enteredPhoneCompany,
        enteredRevenueCompany
      );
      ccx.addComp(newComp);
      props.onClick();
    } else {
      return;
    }
  }

  return (
    <div
      className="z-10 offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-dark bg-clip-padding shadow-xl shadow-cyan-900 outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-l border-slate-600 md:w-1/3 w-full"
      tabIndex={-1}
    >
      <div className="offcanvas-header flex items-center justify-between p-4 border-b border-cyan-600">
        <p
          className="offcanvas-title mb-0 leading-normal font-semibold text-cyan-700"
          id="offcanvasRightLabel"
        >
          New Company
        </p>
        <button type="button" onClick={onClickHandler}>
          <Xmark className="w-4 h-5 stroke-white hover:stroke-cyan-600" />
        </button>
      </div>
      <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-6 items-center pt-8"
        >
          <div>
            <label
              htmlFor="nameCompany"
              className="pl-2 block text-lg text-cyan-600 font-medium"
            >
              {" "}
              Name Company
            </label>
            <input
              required
              className={"pl-3 pr-4 py-1 rounded-3xl"}
              type="text"
              id="nameCompany"
              placeholder="Company"
              onChange={onChangeHandlerNameCompany}
              onBlur={onBlurNameCompanyHandler}
              value={enteredNameCompany}
            />
            {nameCompanyHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter a valid name
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="AddressCompany"
              className="pl-2 block text-lg text-cyan-600 font-medium"
            >
              {" "}
              Address Company
            </label>
            <input
            required
              className={"pl-3 pr-3 py-1 rounded-3xl"}
              type="text"
              id="AddressCompany"
              placeholder="Via Mar Glaciale, 123"
              onChange={onChangeHandlerAddressCompany}
              onBlur={onBlurAddressCompanyHandler}
              value={enteredAddressCompany}
            />
            {addressCompanyHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter a valid address
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="PhoneCompany"
              className="pl-2 block text-lg text-cyan-600 font-medium"
            >
              {" "}
              Phone Company
            </label>
            <input
              required
              className={"pl-3 pr-4 py-1 rounded-3xl"}
              type="text"
              id="PhoneCompany"
              placeholder="333-666-4444"
              onChange={onChangeHandlerPhoneCompany}
              onBlur={onBlurPhoneCompanyHandler}
              value={enteredPhoneCompany}
            />
            {phoneCompanyHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter a valid phone
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="RevenueCompany"
              className="pl-2 block text-lg text-cyan-600 font-medium"
            >
              {" "}
              Revenue Company
            </label>
            <input
              required
              className={"pl-3 pr-4 py-1 rounded-3xl"}
              type="number"
              step={1}
              min={0}
              id="RevenueCompany"
              placeholder="10"
              onChange={onChangeHandlerRevenueCompany}
              onBlur={onBlurRevenueCompanyHandler}
              value={enteredRevenueCompany}
            />
            {revenueCompanyHasError && (
              <p className="text-red-700 font-jp font-semibold text-sm pl-2">
                Please enter a valid revenue
              </p>
            )}
          </div>
          <MyButton
          disabled={false}
          onClick={undefined}
            classname="bg-cyan-500 mt-2 px-2 hover:ease-in duration-200 py-2 w-28 text-xs font-semibold rounded-lg font-jp hover:text-white hover:bg-cyan-900"
          >
            ADD COMPANY
          </MyButton>
        </form>
      </div>
    </div>
  );
}
