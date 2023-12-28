function Cart() {
  return (
    <>
      <div className="flex flex-col  p-6 space-y-6 sm:px-20 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-semibold">Your cart</h2>
        <div className="flex justify-between">
          <img src="/cart.jpg" alt="cart" className="rounded-lg shadow-xl" />
          <div className="w-[50%]">
            <ul className="flex flex-col divide-y dark:divide-gray-700">
              <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src="https://s3-alpha-sig.figma.com/img/7071/2aad/8154c4f72cddf1fcf7f431091f08a30c?Expires=1704672000&Signature=SgavIrSETUUzcxsRTwLEdvnWN2XOUkAaIYkesZKP3fx7ebV7o161Ebq~v7blsvB-vn2gOHOYESAqzKIAxVBdwdxOmaEzI5CVRqZpu2Q74g9sPtq3ctrTmRnGSeJoP83Q93p1gO-Kv1zH7mrSNjt916UZR~yRswfI~y--dOehjEcOsjpXFIrVNWhzvrUvx470YVwzgafE--NkBVc-SG56LVQMwSaTFqC7fwVkoH2veu8bx716gd625T7kRTG~L6tonL-3AOoUqBRAkR1gq6u4VGJ5dirAGyHNdoviVgc39zyBtUptq1B7BU2l6lE89dI8ULt8YEr-I53WLfF0ixlWuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leadi sm:pr-8">
                          Assorted Spirit
                        </h3>
                        <p className="text-sm dark:text-gray-400">Classic</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">59.99₦</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          75.50₦
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
                    src="https://s3-alpha-sig.figma.com/img/9731/266b/0e6b1539332b0d0b872c05ca560e6853?Expires=1704672000&Signature=pbnE12DvRWfLL8d8xsIYFuenySAKZNFcJXKH~WrNJfgpKtRYwHtyP7GDZ0zoC7K8j0HvO0Fxj92ufLPc07je6XE5RYXuffs75SnBg2qrsmF8e1BlgGHHlJi3J4Z9Q9zKOIrirAC4wcQgKf2mg0r1bwdIJUw2b4dcg454hLQrGTd6Uz~NMMw3T-75Sbrw-QY0lkvb4yteVvCPgw6leRGKr7Lf9lD3NouhdFruiTa4KaGCkdcOSz85ZYvNFyW1zVzlw854umMzLftG8FWRB~TYxjw4cECcuppMGDwjBdSmaxbDecqivdenYiyGh-zsCPgY~lesief1wnrPXYlBX4Ee8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leadi sm:pr-8">
                          Corona Drink
                        </h3>
                        <p className="text-sm dark:text-gray-400">White</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">99.95₦</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          150₦
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
                    src="https://s3-alpha-sig.figma.com/img/2438/62e6/926e116640ee6b332250c62e0bed2894?Expires=1704672000&Signature=m-vRF5r9Kjwh7nHWEmi4EU~d8KwmhNFBG5KgUKRDd~FBq2y6Lt6vmOqnNFOkDjfSlEQe7l19r7ikYbykVjRwogLC9lJ~KH3rwA5WH~fifK0mP4THnk4vgLm~6h6Jcrr4jsMxC8VUp7t4sVyCLvj6TXaRNQiFxA1shgLXX2FQZclAsBBlxXwa1swrFQzF1hnIDfGmgenFoGsJkwbz2CkTFjoW3v-el2G8JPXp4N7eY70jMtpTaXOqI7oJEQc6MxGIf7cGANnWGHTHQY24xeQlrgT0ycz4Ed2tqd09J25bvod4iYmavieuc4h7E6p3QKxOHJKorMC4xtdbq1X639czAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Set of travel chargers"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold leadi sm:pr-8">
                          Exotic Whine
                        </h3>
                        <p className="text-sm dark:text-gray-400">Black</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">8.99₦</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          15.99₦
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
                <span className="font-semibold">357 ₦</span>
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
                <span className="sr-only sm:not-sr-only"> to shop</span>
              </button>
              <button
                type="button"
                className="px-6 bg-[#E66B66] text-gray-100 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                <span className="sr-only sm:not-sr-only">Continue to </span>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
