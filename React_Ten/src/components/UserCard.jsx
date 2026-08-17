import React, { useState } from "react";
import { toast } from "react-toastify";

const UserCard = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!user) return null;

  const { id, name, username, email, phone, password, address } = user;
  const firstName = name?.firstname || "";
  const lastName = name?.lastname || "";
  const fullName = `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${
    lastName.charAt(0).toUpperCase() + lastName.slice(1)
  }`.trim();

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() || "U";

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`, { autoClose: 1500 });
  };

  const mapUrl = address?.geolocation?.lat && address?.geolocation?.long
    ? `https://www.google.com/maps?q=${address.geolocation.lat},${address.geolocation.long}`
    : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Header: Avatar, Name, Username, ID */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-800 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              {initials}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-indigo-600 transition-colors">
                {fullName || "Anonymous User"}
              </h3>
              <p className="text-xs text-slate-400 font-medium">@{username}</p>
            </div>
          </div>
          <span className="px-2.5 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-lg border border-indigo-100/60 shrink-0">
            ID: #{id}
          </span>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-2.5 mb-5 text-xs">
          {/* Email */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/70 hover:bg-slate-50 transition-colors group/item">
            <div className="flex items-center gap-2.5 min-w-0 text-slate-600">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate font-medium text-slate-700">{email}</span>
            </div>
            <button
              onClick={() => handleCopy(email, "Email")}
              className="opacity-0 group-hover/item:opacity-100 p-1 text-slate-400 hover:text-indigo-600 transition-all cursor-pointer"
              title="Copy Email"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/70 hover:bg-slate-50 transition-colors group/item">
            <div className="flex items-center gap-2.5 text-slate-600">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium text-slate-700">{phone}</span>
            </div>
            <button
              onClick={() => handleCopy(phone, "Phone")}
              className="opacity-0 group-hover/item:opacity-100 p-1 text-slate-400 hover:text-indigo-600 transition-all cursor-pointer"
              title="Copy Phone"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50/70 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2.5 text-slate-600">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-mono text-slate-700 tracking-wider">
                {showPassword ? password : "••••••••"}
              </span>
            </div>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer text-xs font-semibold"
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.016 10.016 0 013.682-.863c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-6.386 1.488A3.001 3.001 0 019.5 12a3 3 0 014.243-4.243m1.06 1.060a3 3 0 01-.001 4.243" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Address Card Block */}
        {address && (
          <div className="rounded-xl border border-slate-100 bg-slate-50/40 p-3.5 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Address Details
              </span>
              <span className="capitalize font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-[10px]">
                {address.city}
              </span>
            </div>

            <div className="text-slate-700 space-y-0.5 pl-5 border-l-2 border-slate-200">
              <p className="font-semibold text-slate-900 capitalize">
                {address.number} {address.street}
              </p>
              <p className="text-slate-500 capitalize">
                {address.city}, {address.zipcode}
              </p>
            </div>

            {/* Geolocation */}
            {address.geolocation && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div className="font-mono text-[10px]">
                  <span>Lat: {address.geolocation.lat}</span>
                  <span className="mx-1 text-slate-300">•</span>
                  <span>Long: {address.geolocation.long}</span>
                </div>
                {mapUrl && (
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-0.5 transition-colors"
                  >
                    Maps
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
