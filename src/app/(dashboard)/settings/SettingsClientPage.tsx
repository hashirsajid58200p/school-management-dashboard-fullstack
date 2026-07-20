"use client";

import React, { useState, useEffect } from "react";

type SettingsTab = "profile" | "preferences" | "notifications" | "security";

interface SettingsClientPageProps {
  initialUser: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    img: string | null;
    publicMetadata: {
      role: string;
    };
  } | null;
}

const SettingsClientPage: React.FC<SettingsClientPageProps> = ({ initialUser }) => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  
  // Settings Form States
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("light");
  const [calendarView, setCalendarView] = useState("work_week");
  
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [messageAlert, setMessageAlert] = useState(true);
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Initialize values when initialUser loads
  useEffect(() => {
    if (initialUser) {
      setEmail(`${initialUser.username}@school.com`);
      setPhone("+1 (555) 019-2834");
      setAddress("123 Academy Drive, Suite 100");
    }
  }, [initialUser]);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePreferencesSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleNotificationsSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSecuritySave = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMsg("New passwords do not match!");
      return;
    }
    setErrorMsg("");
    setSaveSuccess(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const displayName = initialUser ? `${initialUser.firstName} ${initialUser.lastName}` : "Guest User";
  const displayRole = initialUser?.publicMetadata?.role || "guest";

  return (
    <div className="flex-grow p-6 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">Settings</h1>
        <p className="text-xs text-slate-400 font-medium mt-1">
          Manage your portal configurations, preferences, and account security.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row overflow-hidden min-h-[550px] flex-grow">
        {/* LEFT COLUMN: TABS */}
        <div className="w-full md:w-64 bg-slate-50/50 border-r border-slate-100 p-4 flex flex-col gap-1.5 shrink-0">
          <div className="px-4 py-3 border-b border-slate-100 mb-2">
            <div className="text-xs font-bold text-slate-800 truncate">{displayName}</div>
            <div className="text-[10px] text-slate-400 font-medium capitalize mt-0.5">{displayRole} Portal Settings</div>
          </div>

          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
              activeTab === "profile"
                ? "bg-hsSky text-sky-800 shadow-sm border border-sky-200/50"
                : "text-slate-600 hover:bg-slate-100/60"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4.5 h-4.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Profile Information
          </button>

          <button
            onClick={() => setActiveTab("preferences")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
              activeTab === "preferences"
                ? "bg-hsSky text-sky-800 shadow-sm border border-sky-200/50"
                : "text-slate-600 hover:bg-slate-100/60"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4.5 h-4.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            System Preferences
          </button>

          <button
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
              activeTab === "notifications"
                ? "bg-hsSky text-sky-800 shadow-sm border border-sky-200/50"
                : "text-slate-600 hover:bg-slate-100/60"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4.5 h-4.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            Notifications Configuration
          </button>

          <button
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold tracking-wide transition-all ${
              activeTab === "security"
                ? "bg-hsSky text-sky-800 shadow-sm border border-sky-200/50"
                : "text-slate-600 hover:bg-slate-100/60"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4.5 h-4.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z" />
            </svg>
            Security & Authentication
          </button>
        </div>

        {/* RIGHT COLUMN: ACTIVE PANEL */}
        <div className="flex-grow p-6 flex flex-col gap-6 max-w-2xl justify-between">
          <div className="flex flex-col gap-4">
            {/* SUCCESS FEEDBACK */}
            {saveSuccess && (
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-emerald-800 font-semibold shadow-sm animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Configurations updated successfully!
              </div>
            )}

            {/* ERROR FEEDBACK */}
            {errorMsg && (
              <div className="bg-red-50 border border-red-200/80 rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-red-800 font-semibold shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4.5 h-4.5 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                {errorMsg}
              </div>
            )}

            {/* PROFILE TAB */}
            {activeTab === "profile" && (
              <form onSubmit={handleProfileSave} className="flex flex-col gap-4.5">
                <h2 className="text-md font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Phone Number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-semibold text-slate-500">Residential Address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all"
                  >
                    Save Profile Changes
                  </button>
                </div>
              </form>
            )}

            {/* PREFERENCES TAB */}
            {activeTab === "preferences" && (
              <form onSubmit={handlePreferencesSave} className="flex flex-col gap-5">
                <h2 className="text-md font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">System Preferences</h2>
                
                {/* Language Select */}
                <div className="flex flex-col gap-1.5 max-w-xs">
                  <label className="text-xs font-semibold text-slate-500">Portal Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full cursor-pointer"
                  >
                    <option value="english">English (US)</option>
                    <option value="urdu">Urdu (اردو)</option>
                    <option value="spanish">Spanish (Español)</option>
                    <option value="arabic">Arabic (العربية)</option>
                  </select>
                </div>

                {/* Calendar Layout */}
                <div className="flex flex-col gap-1.5 max-w-xs">
                  <label className="text-xs font-semibold text-slate-500">Default Calendar Scope</label>
                  <select
                    value={calendarView}
                    onChange={(e) => setCalendarView(e.target.value)}
                    className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full cursor-pointer"
                  >
                    <option value="work_week">Work Week (Mon - Fri)</option>
                    <option value="month">Full Month Calendar</option>
                  </select>
                </div>

                {/* Visual Theme Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-500">Color Layout Theme</label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTheme("light")}
                      className={`flex-1 p-4 rounded-xl border text-center transition-all ${
                        theme === "light"
                          ? "bg-hsSky/30 border-sky-400 shadow-sm"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100/50"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-700">Light Mode</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Classic clean pastel layout</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTheme("dark")}
                      className={`flex-1 p-4 rounded-xl border text-center transition-all ${
                        theme === "dark"
                          ? "bg-hsPurpleLight border-purple-400 shadow-sm"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100/50"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-700">Dark Mode</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-medium">Eye-relaxing dark dashboard</div>
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all"
                  >
                    Save Preferences
                  </button>
                </div>
              </form>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === "notifications" && (
              <form onSubmit={handleNotificationsSave} className="flex flex-col gap-4.5">
                <h2 className="text-md font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">Notification Configuration</h2>
                
                <div className="flex flex-col gap-4">
                  {/* Email Toggle */}
                  <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                    <div>
                      <div className="text-xs font-bold text-slate-700">Email Notifications</div>
                      <div className="text-[10px] text-slate-400 font-medium">Receive weekly schedule digests & class alerts</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={emailNotif}
                        onChange={() => setEmailNotif(!emailNotif)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>

                  {/* SMS Alerts Toggle */}
                  <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                    <div>
                      <div className="text-xs font-bold text-slate-700">SMS Urgent Alerts</div>
                      <div className="text-[10px] text-slate-400 font-medium">Receive instant mobile text warnings on announcements</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={smsNotif}
                        onChange={() => setSmsNotif(!smsNotif)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>

                  {/* Push Notifications Toggle */}
                  <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                    <div>
                      <div className="text-xs font-bold text-slate-700">Web Push Notifications</div>
                      <div className="text-[10px] text-slate-400 font-medium">Pop alerts inside your active web browser context</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={pushNotif}
                        onChange={() => setPushNotif(!pushNotif)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>

                  {/* Messages Alerts Toggle */}
                  <div className="flex items-center justify-between p-3 bg-slate-50/50 border border-slate-100 rounded-xl">
                    <div>
                      <div className="text-xs font-bold text-slate-700">Instant Message Sound</div>
                      <div className="text-[10px] text-slate-400 font-medium">Play standard alert sound when new message arrives</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={messageAlert}
                        onChange={() => setMessageAlert(!messageAlert)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all"
                  >
                    Save Preferences
                  </button>
                </div>
              </form>
            )}

            {/* SECURITY TAB */}
            {activeTab === "security" && (
              <form onSubmit={handleSecuritySave} className="flex flex-col gap-4.5">
                <h2 className="text-md font-bold text-slate-800 border-b border-slate-100 pb-2 mb-2">Security Settings</h2>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Current Password</label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-sky-400 focus:bg-white transition-all w-full"
                      required
                    />
                  </div>

                  {/* 2FA Toggle Switch */}
                  <div className="flex items-center justify-between p-3.5 bg-amber-50/50 border border-amber-200/60 rounded-xl mt-2">
                    <div>
                      <div className="text-xs font-bold text-amber-900">Two-Factor Authentication (2FA)</div>
                      <div className="text-[10px] text-amber-700 font-medium">Add an extra layer of defense using verification codes</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={twoFactor}
                        onChange={() => setTwoFactor(!twoFactor)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl shadow-sm hover:shadow transition-all"
                  >
                    Change Security Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsClientPage;
