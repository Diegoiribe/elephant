import React from 'react'

const Contact = () => {
  return (
    <div className="w-4/5 bg-white h-[600px] rounded-3xl">
      <div
        className="w-full mac:h-2/6 phone:2/4  flex phone:flex-col mac:flex-row justify-between items-center px-10"
        style={{ background: '#1c92cc' }}
      >
        <p className="font-medium phone:text-xl mac:text-4xl overflow-hidden">
          Subscribe to our newsletter
        </p>
        <form className="flex items-center gap-1">
          <input
            type="text"
            className="h-[85px] w-[350px] rounded-s-3xl p-5 text-xl font-medium focus:outline-none"
            placeholder="Your Email"
          />
          <button className="h-[85px] w-[150px] bg-white rounded-e-3xl  text-xl font-medium hover:bg-black hover:text-white">
            Subscribe
          </button>
        </form>
      </div>
      <div className="bg-gray-100 h-4/6 w-full flex items-center p-10">
        <div className="bg-white h-5/6 w-2/5 p-10 flex items-center rounded-3xl">
          <p className="font-medium text-2xl overflow-hidden">
            Subscribe to be notified of new content on Elephant
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
