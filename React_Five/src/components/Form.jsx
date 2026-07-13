import React, { useEffect } from "react";
import { User, Mail, Phone, MapPin, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";



const Form = ({ users, setUsers, setToggle, editIndex, setEditIndex }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", delayError: 500 });

  // This is for editing the user data and show in the form .

  useEffect(() => {
    if (editIndex !== null && users[editIndex]) {
      reset(users[editIndex]);
    } else {
      reset({ name: "", email: "", phone: "", location: "", profilePic: "" });
    }
  }, [editIndex, users, reset]);

// This is for submitting the form and adding the user data to the users array . 

  const formSubmit = (data) => {
    if (editIndex !== null) {
      setUsers((prev) =>
        prev.map((user, idx) => (idx === editIndex ? data : user)),
      );
      setEditIndex(null);
    } else {
      setUsers((prev) => [...prev, data]);
    }
    setToggle(true);
    reset();
  };

  // This is for canceling the form and resetting the form and closing the form . 
  
  const handleCancel = () => {
    reset();
    setEditIndex(null);
    setToggle(true);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full max-w-md rounded-2xl border border-zinc-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Title */}
      <div className="mb-7">
        <h2 className="text-base font-semibold text-zinc-900">
          {editIndex !== null ? "Update User" : "Create User"}
        </h2>
        <p className="mt-1 text-xs text-zinc-400">
          {editIndex !== null
            ? "Modify user information."
            : "Fill in the details to add a new user."}
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-500">Full Name</label>
          <div
            className={`flex items-center gap-3 rounded-xl border bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white ${errors.name ? "border-red-300 bg-red-50 focus-within:border-red-400" : "border-zinc-100 focus-within:border-zinc-300"}`}
          >
            <User
              size={14}
              className={`shrink-0 ${errors.name ? "text-red-300" : "text-zinc-300"}`}
              strokeWidth={2}
            />
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 4,
                  message: "Name must be at least 4 characters",
                },
              })}
              type="text"
              placeholder="Alex Johnson"
              className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-300 outline-none"
            />
          </div>
          {errors.name && (
            <p className="flex items-center gap-1.5 text-[11px] text-red-400">
              <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-500">
            Email Address
          </label>
          <div
            className={`flex items-center gap-3 rounded-xl border bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white ${errors.email ? "border-red-300 bg-red-50 focus-within:border-red-400" : "border-zinc-100 focus-within:border-zinc-300"}`}
          >
            <Mail
              size={14}
              className={`shrink-0 ${errors.email ? "text-red-300" : "text-zinc-300"}`}
              strokeWidth={2}
            />
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="alex@gmail.com"
              className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-300 outline-none"
            />
          </div>
          {errors.email && (
            <p className="flex items-center gap-1.5 text-[11px] text-red-400">
              <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-500">
            Phone Number
          </label>
          <div
            className={`flex items-center gap-3 rounded-xl border bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white ${errors.phone ? "border-red-300 bg-red-50 focus-within:border-red-400" : "border-zinc-100 focus-within:border-zinc-300"}`}
          >
            <Phone
              size={14}
              className={`shrink-0 ${errors.phone ? "text-red-300" : "text-zinc-300"}`}
              strokeWidth={2}
            />
            <input
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 10, message: "Must be 10 digits" },
                maxLength: { value: 10, message: "Must be 10 digits" },
              })}
              type="tel"
              placeholder="+91 9876543210"
              className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-300 outline-none"
            />
          </div>
          {errors.phone && (
            <p className="flex items-center gap-1.5 text-[11px] text-red-400">
              <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-500">Location</label>
          <div
            className={`flex items-center gap-3 rounded-xl border bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white ${errors.location ? "border-red-300 bg-red-50 focus-within:border-red-400" : "border-zinc-100 focus-within:border-zinc-300"}`}
          >
            <MapPin
              size={14}
              className={`shrink-0 ${errors.location ? "text-red-300" : "text-zinc-300"}`}
              strokeWidth={2}
            />
            <input
              {...register("location", {
                required: "Location is required",
                minLength: {
                  value: 3,
                  message: "Location must be at least 3 characters",
                },
              })}
              type="text"
              placeholder="Mumbai, India"
              className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-300 outline-none"
            />
          </div>
          {errors.location && (
            <p className="flex items-center gap-1.5 text-[11px] text-red-400">
              <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Profile Picture URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-500">
            Profile Picture URL
          </label>
          <div
            className={`flex items-center gap-3 rounded-xl border bg-zinc-50 px-4 py-3 transition-all duration-200 focus-within:bg-white ${errors.profilePic ? "border-red-300 bg-red-50 focus-within:border-red-400" : "border-zinc-100 focus-within:border-zinc-300"}`}
          >
            <ImageIcon
              size={14}
              className={`shrink-0 ${errors.profilePic ? "text-red-300" : "text-zinc-300"}`}
              strokeWidth={2}
            />
            <input
              {...register("profilePic", {
                required: "Profile picture URL is required",
                pattern: {
                  value: /^https?:\/\/.+\..+/,
                  message: "Enter a valid URL",
                },
              })}
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-300 outline-none"
            />
          </div>
          {errors.profilePic && (
            <p className="flex items-center gap-1.5 text-[11px] text-red-400">
              <span className="inline-block h-1 w-1 rounded-full bg-red-400" />
              {errors.profilePic.message}
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-zinc-100" />

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-700 active:scale-95"
        >
          {editIndex !== null ? "Update User" : "Create User"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="flex-1 rounded-xl border border-zinc-100 py-3 text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-zinc-200 hover:text-zinc-600 active:scale-95"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
