import { useState } from "react";

import AddressAutocomplete from "./forms/AddressAutocomplete";

function PriceEstimator() {
  const [isError, setIsError] = useState(false);
  const [isDeliveryHintShowing, setIsDeliveryHintShowing] = useState(false);

  return (
    <>
      <form className="md:shadow-xl form-width rounded-2xl md:pl-20 md:bg-white md:mb-20 w-full lg:absolute">
        <div className="flex flex-row">
          <div className="flex-col w-10/12">
            <div className="md:block pt-16 text-2xl font-semibold text-gray-700">
              Price Estimator
            </div>
          </div>
          <div className="flex-col md:w-1/5"></div>
        </div>

        <div className="flex-row mt-10 md:mt-0">
          <div className="flex flex-col w-full md:w-11/12 pr-2 sm:pr-4 md:pr-4">
            <div className="flex-row pl-3 md:mt-10 w-full text-sm md:text-base text-gray-700">
              Pickup Location
            </div>
            <div className="flex flex-row mt-1">
              <AddressAutocomplete
                placeholder="Where do we pick your items up from?"
                className="pickup_address bg-gray-100 appearance-none border-2 border-gray-100 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 w-full py-3 px-4"
              />
            </div>
            {isError && (
              <div
                id="quoteError.pickup_address"
                className="ml-3 mt-1 text-xs text-red-600"
              >
                Error pickup location is here
              </div>
            )}

            <div className="flex-row relative w-full mb-3">
              <div className="flex-row pl-3 mt-6 w-full text-sm md:text-base text-gray-700">
                Delivery Location
              </div>
              <div className="flex flex-row mt-1 absolute w-full">
                <AddressAutocomplete
                  placeholder="Where do we pick your items up from?"
                  className="delivery_address bg-gray-100 appearance-none border-2 border-gray-100 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500 w-full py-3 px-4 z-30"
                />
              </div>

              {isDeliveryHintShowing && (
                <div
                  id="delivery_hint"
                  className="flex flex-row w-full absolute mt-10"
                >
                  <div className="relative w-full">
                    <div className="relative bg-orange-200 rounded-md w-full text-2xs md:text-xs text-orange-700 pt-4 pb-2 px-4 focus:bg-white border-gray-200 z-20">
                      <b>Disclaimer:</b>
                      We send business to business freight, not residential
                      <div className="tooltip inline-block absolute pl-4 -mb-1 inset-y-0 right-0 flex items-center text-orange-700 hover:text-orange-800">
                        <svg
                          className="fill-current w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.343 13.657A8 8 0 1113.656 2.343 8 8 0 012.343 13.657zm10.19-1.123a6.401 6.401 0 10-9.069-9.036 6.401 6.401 0 009.069 9.036zM7.199 8.801v-1.6h1.6v4.8H7.2v-3.2zm0-4.8h1.6v1.6H7.2v-1.6z" />
                        </svg>
                        <span className="tooltiptext w-56 absolute bg-gray-700 text-white rounded-md text-xs z-50 ml-3 p-2">
                          We can send the freight if there is a depot close by,
                          but you will need to arrange pickup. Please
                          <a
                            href="contact"
                            className="text-blue-400 hover:text-blue-500"
                          >
                            contact us
                          </a>
                          for more details.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                id="delivery_error"
                className="flex flex-row mt-12 pt-1 mb-5 absolute w-full"
              >
                <div
                  id="quoteError.delivery_address"
                  className="flex-row ml-5 text-xs text-red-600"
                >
                  Error
                </div>
              </div>
            </div>

            <div id="form_fields" className="container relative z-10">
              <div className="flex flex-wrap ">
                <div className="w-4/12 md:w-3/20 pt-3">
                  <div className="pl-3 mr-6 text-sm md:text-base text-gray-700 mb-1">
                    Quantity
                  </div>
                  <input
                    placeholder="eg 2"
                    id="amount"
                    className="amount form-input w-full py-3 pl-6 "
                  />
                </div>
                <div className="w-8/12 md:w-7/20 pt-2 pl-2 mt-1">
                  <div className="pl-3 text-sm md:text-base text-gray-700 inline-block mb-1">
                    Type
                  </div>
                  <div className="tooltip inline-block pl-2 text-gray-500 hover:text-blue-400 -mb-1">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.3431 13.657A8 8 0 1113.656 2.343 8 8 0 012.343 13.657zm10.19-1.123a6.401 6.401 0 10-9.069-9.036 6.401 6.401 0 009.069 9.036zM7.199 8.801v-1.6h1.6v4.8H7.2v-3.2zm0-4.8h1.6v1.6H7.2v-1.6z" />
                    </svg>
                    <span className="hidden tooltiptext bg-gray-700 text-white rounded-md text-xs z-50">
                      If your item 'Type' is different from the options listed,
                      please contact our call centre <br />
                      (09) 280-3639
                    </span>
                  </div>
                  <div id="options" className="flex flex-col w-full">
                    <div className="inline-block mr-2 options_form">
                      <a
                        href="op"
                        id="options_box"
                        className="relative option-selected block pl-6 w-full text-sm rounded-md leading-tight"
                      >
                        <div
                          id="options_value "
                          className="options_value text-gray-500"
                        ></div>

                        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            id="options_arrow"
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </a>

                      <div
                        id="dropdown"
                        className="hide rounded-md absolute z-50 w-13/20 dropdown-width pr-2 md:pr-0"
                      >
                        <a href="pal">
                          <div className="text-sm md:text-xs pl-6 py-2 md:py-1 text-gray-600 md:text-gray-500 bg-white hover:bg-gray-200 border-b border-gray-200">
                            Pallet(s)
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <input
                    name="package_type_id"
                    className="hidden"
                    id="package_type"
                  />
                </div>
                <div className="w-1/2 md:w-5/20 pt-4 md:pt-3">
                  <div
                    className="pl-3 text-sm md:text-base text-gray-700 mb-1"
                    prop="weight"
                  >
                    Weight
                  </div>
                  <div className="flex flex-col w-full relative">
                    <input
                      id="weight"
                      className="weight form-input pl-6 md:ml-0 py-3 z-20"
                      type="text"
                      placeholder="eg 2"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-400 z-30">
                      <p className="text-gray-700 font-semibold">kg</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 md:w-5/20 pt-4 md:pt-3 pl-2 md:pl-0">
                  <div className="pl-5 text-sm md:text-base text-gray-700 mb-1">
                    Volume
                  </div>
                  <div className="flex flex-col w-full relative">
                    <input
                      id="volume"
                      className="ammount form-input pl-6 md:ml-2 md:ml-0 py-3 z-20"
                      type="text"
                      placeholder="eg 2"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-400 z-30">
                      <p className="text-gray-700 font-semibold">
                        m<sup>3</sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ml-5 text-xs text-red-600"
              id="quoteError.general_message"
            >
              error
            </div>

            <div className="mt-10 text-gray-700 ml-6 md:ml-3 text-base">
              Estimated Quote
            </div>
            <div className="flex flex-row ">
              <div className="flex flex-col w-12/20 -mt-1 ml-3 md:ml-0">
                <div className="price font-semibold text-4xl text-gray-300">
                  $0
                </div>
                <div
                  id="loading-placeholder"
                  className="price font-semibold text-4xl text-gray-300"
                >
                  $0
                </div>
                <div className="price font-semibold text-2xl sm:text-4xl text-gray-700">
                  fullprice
                </div>
                <div className="text-gray-700 mt-6">
                  Please note, we've estimated the cost but not all large loose
                  items can be moved with our carriers (such as large machinery
                  or loose furniture). Please contact us to discuss before
                  booking.
                </div>

                <div>
                  <div className="modal-open text-blue-400 hover:blue-400 text-xs ml-3 md:mt-2 cursor-pointer">
                    <a href="em">
                      <u>Email this quote to me</u>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-2/20 sm:w-1/3"></div>

              <div className="flex flex-col w-9/20" type="success">
                <a
                  href="fe"
                  className="py-3 md:mt-2 w-full text-center text-xs md:text-sm rounded-full bg-blue-400 text-white hover:bg-blue-500 hover:text-white cursor-pointer"
                >
                  Fetch a price
                </a>
                <a
                  href="nul"
                  className="py-3 md:mt-2 w-full text-center text-xs md:text-sm rounded-full bg-blue-400 text-white hover:bg-blue-500 hover:text-white"
                >
                  <div className="text-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 -my-3"
                      viewBox="0 0 100 100"
                    >
                      <path
                        fill="currentColor"
                        d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="1s"
                          from="0 50 50"
                          to="360 50 50"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                </a>

                <div className="text-center text-xs text-gray-600 mt-2">
                  or
                  <a href="re">
                    <u>reset estimator</u>
                  </a>
                </div>
              </div>

              <div className="flex flex-col w-9/20">
                <a
                  href="cre"
                  className="py-3 md:mt-2 w-full text-center text-xs md:text-sm rounded-full bg-teal-400 text-white hover:bg-teal-500 hover:text-white"
                >
                  Create a booking
                </a>
                <div className="text-center text-xs text-gray-600 hover:text-600 mt-2">
                  or
                  <a href="re">
                    <u>reset estimator</u>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-xs text-center mt-10 mb-16">
              Quoted price includes everything... except GST of course
              <div
                className="mt-8 text-base text-left bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 relative"
                role="alert"
              >
                <p>Your quote has been emailed to you.</p>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-teal-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              <div
                className="mt-8 text-base text-left bg-red-100 border-l-4 border-red-500 text-red-700 p-4 relative"
                role="alert"
              >
                <p>
                  Failed to send the quote to your email, please contact
                  Freighthub.
                </p>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              <div className="text-center text-sm text-gray-700 mt-8">
                Freighthub currently only offers services for business to
                business (non-residential) palletised freight.
              </div>
              <div className="text-center text-sm text-gray-700 mt-8">
                Large loose items (such as large machinery, loose furniture,
                Trademe items or boats) cannot be moved with our carriers.
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Modal */}
      <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-40">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

        <div className="modal-container bg-white w-11/12 md:w-full mx-auto rounded-2xl shadow-lg z-50 overflow-y-auto modal-wide">
          <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
            <span className="text-sm">(Esc)</span>
          </div>

          {/* Add margin if you want to see some of the overlay behind the modal */}
          <div className="modal-content pb-16 pt-8 pl-12 pr-8 w-full">
            {/* Title */}
            <div className="flex justify-end text-right">
              <div className="modal-close text-right flex-reverse cursor-pointer z-50">
                <svg
                  className="fill-current text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            {/* Body */}
            <div className="flex justify-between items-center mt-4 pr-4">
              <form className="w-full justify-center">
                <p className="text-2xl text-center w-full">
                  Send the estimate to yourself
                </p>
                <div id="emailItem">
                  <div className="flex flex-row w-full items-center mt-6">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="w-full rounded-md text-sm text-gray-800 py-3 pl-4 focus:bg-white placeholder-gray-500 border focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div
                    id="email_error"
                    className="flex-row sm:pl-2 md:pl-0 justify-start"
                  >
                    <div className="flex flex-col w-5/20 md:w-6/20 lg:w-7/20"></div>
                    <div
                      id="emailError.address"
                      className="flex flex-col text-left ml-12 md:ml-3 w-full md:w-6/12 lg:w-5/12 text-red-500 text-xs"
                    >
                      error
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="flex justify-center mt-6 pt-2">
              <button className="w-56 px-4 bg-teal-400 p-3 rounded-full text-white hover:bg-teal-500 focus:outline-none">
                <div>Email price</div>
                <div className="justify-center pl-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 -my-3"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fill="currentColor"
                      d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceEstimator;
