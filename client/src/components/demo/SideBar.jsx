export function SideBar() {
  return (
    <>
      <div className="flex h-[100%] w-full md:min-w-[200px] flex-row justify-center md:justify-start border-e bg-gray-800 text-gray-200 md:rounded-br-3xl">
        <div className="px-4 py-6">
          <span className="grid h-10 w-full place-content-center align-middle rounded-lg bg-gray-800 text-xl font-bold text-gray-200 md:text-2xl">
            UrbanFlow
          </span>

          <ul className="md:mt-6 flex flex-row text-md md:flex-col md:text-lg gap-4 md:gap-2">
            <li>
              <a
                href="#"
                className="block rounded-lg px-0 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                General
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-0 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-0 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Prediction
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-0 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
