import React from "react";
import { Mail, Phone, Pencil, Trash2, MapPin } from "lucide-react";

const UserCard = ({ users, onEdit, onDelete }) => {
    if (!users || users.length === 0) {
        return (
            <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-white p-12 text-center">
                <p className="text-sm font-medium text-zinc-500">No users found</p>
                <p className="mt-1 text-xs text-zinc-400">Click on 'Create User' to add one.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {users.map((user, index) => (
                <div key={index} className="w-80 rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    {/* Profile Image & Status */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img
                                src={user.profilePic || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"}
                                alt={user.name}
                                className="h-24 w-24 rounded-2xl object-cover ring-4 ring-zinc-50"
                            />
                            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
                        </div>

                        <h2 className="mt-4 text-base font-semibold text-zinc-900">{user.name}</h2>
                        <p className="text-xs text-zinc-400 font-medium">Frontend Developer</p>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-zinc-100" />

                    {/* Info */}
                    <div className="space-y-3.5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100/50">
                                <Mail size={13} className="text-zinc-400" strokeWidth={2} />
                            </div>
                            <span className="text-xs text-zinc-500 font-medium truncate">{user.email}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100/50">
                                <Phone size={13} className="text-zinc-400" strokeWidth={2} />
                            </div>
                            <span className="text-xs text-zinc-500 font-medium">{user.phone}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100/50">
                                <MapPin size={13} className="text-zinc-400" strokeWidth={2} />
                            </div>
                            <span className="text-xs text-zinc-500 font-medium">{user.location}</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-zinc-100" />

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => onEdit(index)}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-900 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-zinc-700 active:scale-95"
                        >
                            <Pencil size={12} />
                            Edit Profile
                        </button>

                        <button
                            onClick={() => onDelete(index)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-100 text-zinc-400 transition-all duration-300 hover:border-red-100 hover:bg-red-50 hover:text-red-400 active:scale-95"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCard;