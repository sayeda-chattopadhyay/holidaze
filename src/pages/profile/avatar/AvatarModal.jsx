import { useState } from "react";
import { updateAvatar } from "./updateAvatar.mjs";

export default function AvatarModal() {
  const [showModal, setShowModal] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  console.log(avatarUrl);

  const handleUpdadteAvatar = async () => {
    try {
      const newUrl = await updateAvatar(avatarUrl);
      console.log("new url", newUrl);

      //   alert("Avatar updated successfully");
      //setShowModal(false);

      //   ; // this is not working
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Update Avatar
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="mb-3 pt-0">
                    <div className="mb-3 pt-0">
                      <input
                        placeholder="Enter avatar URL"
                        className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        onChange={(e) => setAvatarUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleUpdadteAvatar()}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
