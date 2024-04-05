import React from 'react'

const Contact = () => {
  return (
    <div className="mac:w-4/5 phone:w-[90%] bg-white phone:h-[360px] mac:h-[600px] rounded-3xl">
      <div
        className="w-full mac:h-2/6 phone:h-2/4  flex phone:flex-col mac:flex-row phone:justify-center mac:justify-between items-center phone:px-5 mac:px-10 phone:gap-5 mac:gap-0"
        style={{ background: '#1c92cc' }}
      >
        <p className="font-medium phone:text-[20px] mac:text-4xl overflow-hidden">
          Subscribe to our newsletter
        </p>
        <form className="flex items-center gap-1">
          <input
            type="text"
            className="phone:h-[60px] phone:w-[165px] mac:h-[85px] mac:w-[350px] mac:rounded-s-3xl phone:rounded-s-xl  p-5 text-xl font-medium focus:outline-none phone:text-lg mac:text-xl"
            placeholder="Your Email"
          />
          <button className="mac:h-[85px] mac:w-[150px] phone:h-[60px] phone:w-[100px] bg-white mac:rounded-e-3xl phone:rounded-e-xl phone:text-lg  mac:text-xl font-medium hover:bg-black hover:text-white">
            Subscribe
          </button>
        </form>
      </div>
      <div className="bg-gray-100 phone:h-2/4 mac:h-4/6 w-full flex items-center mac:p-10 phone:p-5">
        <div className="bg-white mac:h-5/6 mac:w-2/5 phone:h-full phone:w-full phone:p-5 mac:p-10 flex items-center phone:rounded-xl mac:rounded-3xl">
          <p className="font-medium phone:text-[16px] mac:text-2xl overflow-hidden">
            Subscribe to be notified of new content on Elephant
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
