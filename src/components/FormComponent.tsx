import { MdOutlineClose } from "react-icons/md";

interface FormComponentProps {
  toggleModal: () => void;
}

const FormComponent = ({ toggleModal }: FormComponentProps) => {
  return (
    <div className="w-full h-screen bg-black/50 fixed inset-0 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white lg:w-1/2 md:w-4/5 w-[90%] py-5 md:px-10 rounded-lg">
        <div className="flex items-center justify-between m-6">
          <h1 className="text-center font-heading md:text-xl">
            Enter your information below
          </h1>
          <MdOutlineClose
            className="text-2xl hover:text-slate-800 cursor-pointer ml-4 md:ml-0"
            onClick={() => toggleModal()}
          />
        </div>
        <div className="m-6">
          <form
            className="launchlist-form"
            action="https://getlaunchlist.com/s/bVlUS5"
            method="POST"
            target="_blank"
          >
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="w-full text-left">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
				required
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                />
              </div>
              <div className="w-full mt-4 ml-0 text-left sm:mt-0 ">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Email
                </label>
                <input
				required
                  type="email"
                  placeholder="Your email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                />
              </div>
            </div>
            <div className="w-full mt-4 text-left">
              <label
                htmlFor="whichToDo"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                I am a...
              </label>
              <select
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
              >
                <option value="Producer/Farmer">Producer/Farmer</option>
                <option value="FMCG Buyer">FMCG Buyer</option>
                <option value="Commodity broker">Commodity broker</option>
                <option value="Logistics and Customs operator">Logistics and Customs operator</option>
                <option value="none">None of the above</option>
              </select>
              <textarea
                id="other-category"
                name="Other category"
                className="block p-2.5 mt-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Add your category here, if it's not included above"
              ></textarea>
            </div>

            <div className="w-full mt-4 text-left">
              <label
                htmlFor="suggestions"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                What is the biggest problem you face
              </label>
              <textarea
                id="suggestions"
                name="suggestions"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 "
                placeholder="Any suggestions"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full text-white bg-gradient-to-r from-[#2245FE] to-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
