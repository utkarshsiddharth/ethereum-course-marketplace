import React from "react"

const Modal = ({ isOpen, onClose, children }) => {
  const handleModalClickAway = (e) => {
    if (e.target.id === "backdrop") {
      onClose()
    }
  }
  return (
    <section>
      {/* Remove hidden to display it */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={handleModalClickAway}
          id="backdrop"
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-100/40"
        >
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {/* modal body */}
          {children}
        </div>
      </div>
    </section>
  )
}

export default Modal
