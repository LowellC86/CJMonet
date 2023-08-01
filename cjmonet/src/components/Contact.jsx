import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };
    console.log(formData);
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg p-8 rounded shadow-md">
        <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
        <p>Feel free to get in touch with me using the information below:</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1">Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1">Email:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-1">Message:</label>
            <textarea id="message" name="message" rows="4" required className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;