function Checkout() {
  return (
    <>
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://s3-alpha-sig.figma.com/img/bc3c/a273/83db0a289f0504457e532bb4fc23a2a6?Expires=1703462400&Signature=DcjyDohf8LD831WVyxICbmYc~5oBrP9qDTcHPKEJGNN-osi7s7JW57kVM5QHNJOiTSVOSnNJoC-16JByIwSRzptxqmSoLW0pg3lynyyGyo9ErYkczPUSG03IDJHHKeNrn919WVkk6PWE1kGmGcGIbeutij5uVvMTl2XA1ORLl~4QGq0nZ5zmAXaCnMbQfZFWb8hiJJp93Myn42vr32L6T6CcO6HWgE8I~enwDqxnwgdDzFTMyZE3cvB2D1SVldzt3BOpYrwy04eLN5RwDBiJljj87peHeVbyqsR7n8tgkG~EwbCI9Apg~SGPz6mJG9bwvBFsbNEwfDjtA2a86zN2Gw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      Polaroid camera
                    </h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">59.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      75.50€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://s3-alpha-sig.figma.com/img/9731/266b/0e6b1539332b0d0b872c05ca560e6853?Expires=1703462400&Signature=hB6DgHQP4AfSnWITddlDvrjdNmjIOB-nlqA1Iv6X9PoahGDNR4V1SsPwbA8Ylncrqp7NsTKZePXI2tw1aOIui~Jfnq40TehcZFzYWn3tB5e8KwSoFH~IoCITJwwq0HeXBfLoyj0HKyamR9bHmmdStIjumR2cuvH-gGRM9jvdaSo0gmmV~WQHKjGioIQ1hmu1hzvXzb-6Esaeb3Tvk~2xZfIdjVD-bSdF2I7VxBxp4rL2GaRSNPPbKIMttGNvRj2mfLmznSE7OlPHQQb4FpCGIJWjXeAc-2hoq0JqqoYVPnI1LT6ejcafRNy~zqf5JgK4QKz8Jcpxc~p-PNKpEf91xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      Replica headphones
                    </h3>
                    <p className="text-sm dark:text-gray-400">White</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">99.95€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      150€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://s3-alpha-sig.figma.com/img/2438/62e6/926e116640ee6b332250c62e0bed2894?Expires=1703462400&Signature=jU3Pi88JiFeomDOgbNtRYfKhkzC3tDUiW-trwsiIcjE7jjY~u0wzQBIzhFDPwNwBwIFwbhq6JxifhUxuGbMwL4QBMNZ8AwKBgIYaliNfaoWdK4~2nz2jNpXMECMAtkm0LY9rBpfKQSgws7GvEXYF7cD8ZOz1ndpZeceuuG520fn9xbVfpd0DjN8YPPvIx5VdXLMrdsRAqR-w5h0bykjvP6357rQJhWxtXMRcXUYlcRA8Q0eDM0Z0VxfgLQhOQada668oQhZWcz~61~ZsKTh2C2BCXiEEqHwW4o5BSf7ZSJb-uZeTWAYy9v4eUFMoXO5ZDwnThzAUkpbKfkTNnKBO-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="Set of travel chargers"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      Set of travel chargers
                    </h3>
                    <p className="text-sm dark:text-gray-400">Black</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">8.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">
                      15.99€
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center px-2 py-1 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current">
                      <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                    </svg>
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">357 €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 bg-[#E66B66] text-gray-100 py-2 border rounded-md dark:border-violet-400">
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
          <button
            type="button"
            className="px-6 bg-[#E66B66] text-gray-100 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
