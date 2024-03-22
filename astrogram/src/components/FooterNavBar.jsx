const FooterNavBar = () => {

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-[#0F1218] fixed bottom-0 w-full">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <div
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
         md:dark:hover:text-blue-500 dark:hover:bg-gray-700
         dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              ></path>
            </svg>
          </div>
          <div
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
         md:dark:hover:text-blue-500 dark:hover:bg-gray-700
         dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2.5"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              ></path>
            </svg>
          </div>

          {/* CAMERA ICON */}
          <div
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
         md:dark:hover:text-blue-500 dark:hover:bg-gray-700
         dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={() => window.location.href = '/upload'}
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              ></path>
            </svg>
          </div>
          <div
            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
        md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
         md:dark:hover:text-blue-500 dark:hover:bg-gray-700
         dark:hover:text-white md:dark:hover:bg-transparent"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              ></path>
            </svg>
          </div>
          <a href="/Login">
            <div
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
       md:dark:hover:text-blue-500 dark:hover:bg-gray-700
       dark:hover:text-white md:dark:hover:bg-transparent"
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2.5"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </nav> 
    </>
  );
};

export default FooterNavBar;
