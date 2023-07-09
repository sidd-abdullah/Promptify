"use client";
import { FormEvent, Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
  return classes?.filter(Boolean)?.join(" ");
}

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handelSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!search || !search?.trim()) return; // If the search input is empty or contains only whitespace, return without performing the search
    router.push(`/results?search_query=${search}`); // Perform the search by navigating to the results page with the search query
  };

  // Trigger the search when the Enter key is pressed
  const handleKeyDown = (e: any) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      handelSearch(e);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow sticky top-0 left-0 right-0 z-20"
    >
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <Link href={"/"} className="flex-shrink-0 flex items-center ">
                  <h1 className="hidden md:inline-flex text-2xl font-bold text-black bg-gradient-to-r from-purple-500 via-pink-600 to-rose-500 bg-clip-text text-transparent text-center">
                    Promptify
                  </h1>
                  <img className="md:hidden w-8 h-8" src="/favicon.ico" />
                </Link>
                <div className="hidden lg:ml-5 lg:flex lg:space-x-8 pt-1">
                  <Link
                    href="/trending"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium"
                  >
                    Trending
                  </Link>
                  {user && (
                    <Link
                      href="/create-prompt"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Create prompt
                    </Link>
                  )}
                  {user && (
                    <Link
                      href="/my-prompts"
                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      My prompts
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
                      <MagnifyingGlassIcon
                        onClick={handelSearch}
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      value={search}
                      onChange={(e) => setsearch(e.target.value)}
                      onKeyDown={handleKeyDown}
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Search prompt..."
                    />
                    {search && (
                      <button
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={() => setsearch("")}
                      >
                        <XMarkIcon className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                {user ? (
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none">
                        <span className="sr-only">Open user menu</span>
                        {user && user?.photoURL && (
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user?.photoURL ?? ""}
                            alt=""
                          />
                        )}
                        {user && user?.email && !user?.photoURL && (
                          <p className="text-gray-600 text-base font-medium">
                            {user?.email
                              ?.split("@")[0]
                              .charAt(0)
                              .toUpperCase() +
                              user?.email?.split("@")[0].slice(1)}
                          </p>
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/my-profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={async () => {
                                await signOut();
                              }}
                              className={classNames(
                                active ? "bg-gray-100 w-full text-left" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link
                    href="/signIn"
                    className="sm:ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-700 focus:outline-none"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden shadow-sm">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/trending"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Trending
              </Link>
              <Link
                href="/create-prompt"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Create Prompt
              </Link>

              <Link
                href="/my-prompt"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                My Prompt
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.photoURL ?? ""}
                    alt="profile-photo"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-md font-medium text-gray-500">
                    {user?.displayName}
                  </div>
                </div>
                {user && user?.email && !user?.photoURL && (
                  <p className="text-md font-medium text-gray-500">
                    {user?.email?.split("@")[0].charAt(0).toUpperCase() +
                      user?.email?.split("@")[0].slice(1)}
                  </p>
                )}
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  href="/my-profile"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Link>
                <button
                  onClick={async () => {
                    await signOut();
                  }}
                  className=" px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 flex w-full"
                >
                  Sign out
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
