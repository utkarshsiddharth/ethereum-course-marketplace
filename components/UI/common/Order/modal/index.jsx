import React, { useEffect, useState } from "react"
import { Button, Modal } from "@components/UI/common"
import { useEthPrice } from "@components/hooks"

const OrderModal = ({ course, onClose }) => {
  const [enablePrice, setEnablePrice] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const {
    eth: { priceItem: price },
  } = useEthPrice()
  const defaultOrder = {
    price: "",
    email: "",
    confirmEmail: "",
    tos: false,
  }
  const [order, setOrder] = useState(defaultOrder)
  const handleOrderCancel = () => {
    // @todo: order cancel
    setIsOpen(false)
    setOrder(defaultOrder)
    onClose()
  }

  const handleOrderConfirm = () => {
    // @todo: order confirm

    if (!order.tos) {
      alert("Please agree to the TOS to purchase the course!")
    } else if (!order.price || !order.email || !order.confirmEmail) {
      alert("Please fill all the fields!")
    } else if (order.email !== order.confirmEmail) {
      alert("The emails does not match!")
    } else {
      setIsOpen(false)
      setOrder(defaultOrder)
      onClose()
      alert(JSON.stringify(order))
    }
  }

  useEffect(() => {
    if (!!course) {
      setIsOpen(true)
      setOrder({
        ...defaultOrder,
        price,
      })
    }
  }, [course])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="mb-7 text-lg font-bold leading-6 text-gray-900"
                id="modal-title"
              >
                {course?.title || "Course Title"}
              </h3>
              <div className="mt-1 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Price(eth)</label>
                  <div className="text-xs text-gray-700 flex">
                    <label className="flex items-center mr-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={enablePrice}
                        onChange={({ target: { checked } }) => {
                          setOrder({
                            ...order,
                            price: checked ? order.price : price,
                          })
                          setEnablePrice(!enablePrice)
                        }}
                      />
                    </label>
                    <span>
                      Adjust Price - only when the price is not correct
                    </span>
                  </div>
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={order.price}
                  onChange={({ target: { value } }) => {
                    if (isNaN(value)) {
                      return
                    }

                    if (enablePrice) {
                      setOrder({
                        ...order,
                        price: value,
                      })
                    }
                  }}
                  className="disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                />
                <p className="text-xs text-gray-700">
                  Price will be verified at the time of the order. If the price
                  will be lower, order can be declined (+- 2% slipage is
                  allowed)
                </p>
              </div>
              <div className="mt-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={order.email}
                  onChange={({ target: { value } }) => {
                    setOrder({ ...order, email: value.trim() })
                  }}
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="x@y.com"
                />
                <p className="text-xs text-gray-700 mt-1">
                  It&apos;s important to fill a correct email, otherwise the
                  order cannot be verified. We are not storing your email
                  anywhere
                </p>
              </div>
              <div className="my-2 relative rounded-md">
                <div className="mb-1">
                  <label className="mb-2 font-bold">Repeat Email</label>
                </div>
                <input
                  type="email"
                  name="confirmationEmail"
                  id="confirmationEmail"
                  value={order.confirmEmail}
                  onChange={({ target: { value } }) => {
                    setOrder({ ...order, confirmEmail: value.trim() })
                  }}
                  className="w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                  placeholder="x@y.com"
                />
              </div>
              <div className="text-xs text-gray-700 flex">
                <label className="flex items-center mr-2">
                  <input
                    onChange={() => {
                      setOrder({ ...order, tos: !order.tos })
                    }}
                    type="checkbox"
                    className="form-checkbox"
                  />
                </label>
                <span>
                  I accept Eincode &apos;terms of service&apos; and I agree that
                  my order can be rejected in the case data provided above are
                  not correct
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex md:px-8 lg:px-10">
          <Button
            onClick={handleOrderCancel}
            classNames="bg-red-600 hover:bg-red-700 text-white outline-2 outline-offset-1"
          >
            Cancel
          </Button>
          <Button onClick={handleOrderConfirm}>Submit</Button>
        </div>
      </div>
    </Modal>
  )
}

export default OrderModal
