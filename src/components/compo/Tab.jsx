import React from "react";
import { Link, Outlet } from "react-router-dom";
const Tab = () => {
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label for="Tab" className="sr-only">
            Tab
          </label>

          <select id="Tab" className="w-full rounded-md border-gray-200">
            <option>Settings</option>
            <option>Messages</option>
            <option>Archive</option>
            <option select>Notifications</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <Link
                to="/about"
                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Profile
              </Link>

              <Link
                to="/about/message"
                className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Messages
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Tab;
