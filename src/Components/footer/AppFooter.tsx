import React from "react";
import { Fragment, useRef, useState } from "react";
import "../Style/Appfooter.css";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist, faThumbsUp, faX } from "@fortawesome/free-solid-svg-icons";

export default function AppFooter() {
  const [openModal, setOpenModal] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className="flex justify-center absolute left-0 right-0 p-3 bg-white bg-opacity-80">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-red-950/20 responsiveText">
          ขอให้ทุกวันเป็นวันที่ดีสำหรับทุกคนครับ &nbsp;
          <span
            className="font-semibold text-[#db2777] cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <span className="absolute inset-0" aria-hidden="true"></span>
            <span aria-hidden="true">
              <span>
                กดปุ่มนี้เพื่อท้าต่อย &nbsp;
                <FontAwesomeIcon icon={faHandFist} />
              </span>
            </span>
          </span>
        </div>
      </div>

      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationCircleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          คุณแน่ใจที่จะต่อยกับผม ?!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md text-gray-500">
                            ถ้าคุณมั่นใจที่จะต่อยกับผม โปรดอย่าลังเลที่จะกดปุ่ม
                            <span className="font-bold"> "ใช่"</span> <br />
                            แต่ถ้าคุณกลัว ไม่กล้า โปรดกดปุ่ม{" "}
                            <span className="font-bold">"ไม่เอาดีกว่า"</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <a
                      href="https://media.tenor.com/PS6medrGxqwAAAAd/cat-kiss.gif"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpenModal(false)}
                    >
                      <span>ใช่</span>
                    </a>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                      onClick={() => setOpenModal(false)}
                      ref={cancelButtonRef}
                    >
                      <span>ไม่เอาดีกว่า</span>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
