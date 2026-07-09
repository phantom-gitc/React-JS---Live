import React, { useState } from "react";

const Web = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [submitData, setSubmitData] = useState({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitData(formData);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                    Create Account
                </h1>

                <p className="text-gray-500 mb-8">
                    Fill in your details to continue.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 outline-none focus:border-black focus:bg-white transition"
                    />

                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 outline-none focus:border-black focus:bg-white transition"
                    />

                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 outline-none focus:border-black focus:bg-white transition"
                    />

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-8 border-t pt-6 space-y-2">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Preview
                    </h2>

                    <p className="text-gray-700">
                        <span className="font-medium">Name: {submitData.name}</span>
                    </p>

                    <p className="text-gray-700">
                        <span className="font-medium">Email: {submitData.email}</span>
                    </p>

                    <p className="text-gray-700">
                        <span className="font-medium">Password: {submitData.password}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Web;