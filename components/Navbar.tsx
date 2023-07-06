'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebaseConfig'

function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}


const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <Disclosure as="nav" className="bg-white shadow sticky top-0 left-0 right-0 z-20">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex px-2 lg:px-0">
                                <Link href={"/"} className="flex-shrink-0 flex items-center">
                                    <svg className='hidden md:inline-flex' width="119" height="31" viewBox="0 0 119 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.48 0.359998C28.1333 0.359998 30.96 1.01333 30.96 2.32C30.96 2.77333 30.8533 3.16 30.64 3.48C30.4533 3.8 30.1733 3.96 29.8 3.96H29.68C24.8 3.53333 21.92 3.32 21.04 3.32C20.16 3.32 19.2533 3.37333 18.32 3.48C17.5467 7.90667 16.7467 11.7067 15.92 14.88H20.32C20.88 14.88 21.16 15.32 21.16 16.2C21.16 17.0533 20.88 17.48 20.32 17.48L15.36 17.76C15.36 17.7867 15.2933 18.0267 15.16 18.48C13.96 22.6133 12.9333 25.4133 12.08 26.88C10.56 29.44 8.37333 30.72 5.52 30.72C4.48 30.72 3.42667 30.4933 2.36 30.04C1.32 29.5867 0.613333 29.0267 0.24 28.36C0.186667 28.28 0.16 28.08 0.16 27.76C0.16 27.4133 0.333333 27.0133 0.68 26.56C1.05333 26.08 1.44 25.84 1.84 25.84C1.94667 25.84 2.04 25.8667 2.12 25.92C2.22667 25.9733 2.42667 26.08 2.72 26.24L3.76 26.72C4.16 26.9333 4.72 27.04 5.44 27.04C7.01333 27.04 8.30667 26.2933 9.32 24.8C10.2 23.4667 11.04 21.12 11.84 17.76H11.24C10.0933 17.76 9.52 17.3867 9.52 16.64C9.52 15.8667 10.5067 15.36 12.48 15.12C12.6933 14.2667 13.0267 12.9733 13.48 11.24C13.9333 9.48 14.3333 7.92 14.68 6.56C15.0267 5.2 15.2667 4.26667 15.4 3.76C12.0667 4.13333 9.45333 5.13333 7.56 6.76C5.69333 8.38667 4.76 10.2667 4.76 12.4C4.76 14 5.29333 15.5067 6.36 16.92C6.44 17.0533 6.48 17.16 6.48 17.24C6.48 17.6133 5.94667 17.8 4.88 17.8C3.81333 17.8 3.06667 17.48 2.64 16.84C1.68 15.48 1.2 13.9467 1.2 12.24C1.2 9.28 2.68 6.61333 5.64 4.24C7.08 3.06667 9.01333 2.13333 11.44 1.44C13.8667 0.746665 16.5867 0.399998 19.6 0.399998L22.48 0.359998ZM26.9031 28.12C25.5698 28.12 24.5431 27.5867 23.8231 26.52C23.1031 25.4267 22.7431 23.9467 22.7431 22.08C22.7431 21.52 22.7565 21.0933 22.7831 20.8C23.1298 16.9333 24.1431 12.9067 25.8231 8.72C26.6498 6.72 27.6765 5.06667 28.9031 3.76C30.1298 2.42667 31.4231 1.76 32.7831 1.76C33.5831 1.76 34.2231 2.02667 34.7031 2.56C35.1831 3.06667 35.4231 3.70667 35.4231 4.48V4.8C35.1565 7.49333 34.0631 10.3067 32.1431 13.24C30.2231 16.1733 28.1031 18.5467 25.7831 20.36C25.6765 21.2133 25.6231 21.8667 25.6231 22.32C25.6231 24.48 26.2631 25.56 27.5431 25.56C28.8765 25.56 30.3565 24.6267 31.9831 22.76C32.1698 22.5733 32.3965 22.48 32.6631 22.48C32.9565 22.48 33.2231 22.6 33.4631 22.84C33.7298 23.0533 33.8631 23.3333 33.8631 23.68C33.8631 24 33.7031 24.3333 33.3831 24.68C31.3565 26.9733 29.1965 28.12 26.9031 28.12ZM31.7831 5.04C30.6631 5.04 29.5298 6.46667 28.3831 9.32C27.2631 12.1733 26.5031 14.88 26.1031 17.44C27.6765 15.68 29.1165 13.68 30.4231 11.44C31.7565 9.2 32.4365 7.33333 32.4631 5.84C32.4631 5.30667 32.2365 5.04 31.7831 5.04ZM31.5441 22.84C31.5441 20.8667 32.1841 19.04 33.4641 17.36C34.7707 15.6533 36.3441 14.8 38.1841 14.8C39.2774 14.8 40.1841 15.1067 40.9041 15.72C41.6241 16.3333 41.9841 17.16 41.9841 18.2C41.9841 19.6667 41.3841 20.8533 40.1841 21.76C38.9841 22.6667 37.1707 23.3733 34.7441 23.88C35.1174 25.0267 36.0774 25.6 37.6241 25.6C39.7574 25.6 41.7707 24.6933 43.6641 22.88C43.7707 22.7733 43.9307 22.72 44.1441 22.72C44.3841 22.72 44.5974 22.8133 44.7841 23C44.9974 23.1867 45.1041 23.4133 45.1041 23.68C45.1041 23.9467 45.0107 24.2133 44.8241 24.48C44.1574 25.4133 43.1041 26.28 41.6641 27.08C40.2241 27.8533 38.7174 28.24 37.1441 28.24C35.5974 28.24 34.2774 27.7867 33.1841 26.88C32.0907 25.9467 31.5441 24.6 31.5441 22.84ZM38.2241 17.4C37.3707 17.4 36.5441 17.9067 35.7441 18.92C34.9441 19.9067 34.5441 20.9733 34.5441 22.12C37.8774 20.9733 39.5441 19.7733 39.5441 18.52C39.5441 17.7733 39.1041 17.4 38.2241 17.4ZM48.3875 24.8C47.9608 25.3867 47.2675 26.4133 46.3075 27.88C46.0142 28.3333 45.6542 28.56 45.2275 28.56C44.8275 28.56 44.4675 28.3867 44.1475 28.04C43.8542 27.6933 43.7075 27.3067 43.7075 26.88C43.7075 26.4267 43.9875 26.0133 44.5475 25.64C45.1075 25.24 46.0008 24.32 47.2275 22.88C46.9075 22.3467 46.3608 21.4 45.5875 20.04C44.8408 18.68 44.2142 17.5733 43.7075 16.72C43.6008 16.4533 43.5475 16.2133 43.5475 16C43.5475 15.7867 43.7075 15.56 44.0275 15.32C44.3742 15.0533 44.6942 14.92 44.9875 14.92C45.3075 14.92 45.5075 15 45.5875 15.16C46.0942 15.9867 46.7075 17.04 47.4275 18.32C48.1475 19.5733 48.6275 20.4 48.8675 20.8L52.7075 15.92C53.4008 15.0667 54.2542 14.64 55.2675 14.64C55.8808 14.64 56.3875 14.8133 56.7875 15.16C57.2142 15.48 57.4275 15.9867 57.4275 16.68C57.4275 17.3467 57.2008 17.68 56.7475 17.68C56.6142 17.68 56.3208 17.6133 55.8675 17.48C55.4408 17.3467 55.0408 17.28 54.6675 17.28C54.2942 17.28 53.9342 17.5067 53.5875 17.96L50.0275 22.68C51.3342 24.8133 52.4542 25.88 53.3875 25.88C53.8408 25.88 54.2675 25.7467 54.6675 25.48C55.0675 25.1867 55.3742 24.8933 55.5875 24.6C55.8275 24.3067 56.1208 23.9067 56.4675 23.4C56.8142 22.8933 57.0808 22.52 57.2675 22.28C57.4542 22.04 57.6808 21.92 57.9475 21.92C58.2142 21.92 58.4142 22.0267 58.5475 22.24C58.7075 22.4533 58.7875 22.72 58.7875 23.04C58.7875 23.3333 58.7342 23.56 58.6275 23.72C58.5475 23.8533 58.3608 24.2133 58.0675 24.8C57.7742 25.36 57.3875 25.96 56.9075 26.6C56.0008 27.8 54.8942 28.4 53.5875 28.4C51.7475 28.4 50.0142 27.2 48.3875 24.8ZM56.7944 24.16C56.7944 22.9867 57.0077 21.6133 57.4344 20.04C57.861 18.44 58.2877 17.2533 58.7144 16.48C59.141 15.7067 59.501 15.2533 59.7944 15.12C60.1144 14.96 60.461 14.88 60.8344 14.88C61.2344 14.88 61.5677 14.9733 61.8344 15.16C62.1277 15.3467 62.2744 15.5467 62.2744 15.76C62.2744 15.9733 62.1144 16.3467 61.7944 16.88C61.501 17.4133 61.1144 18.4533 60.6344 20C60.1544 21.5467 59.9144 22.7867 59.9144 23.72C59.9144 24.9733 60.381 25.6 61.3144 25.6C62.4344 25.6 63.781 24.6933 65.3544 22.88C65.5677 22.6133 65.821 22.48 66.1144 22.48C66.4344 22.48 66.7144 22.6 66.9544 22.84C67.221 23.0533 67.3544 23.32 67.3544 23.64C67.3544 23.9333 67.2077 24.2667 66.9144 24.64C64.941 26.96 62.8877 28.12 60.7544 28.12C59.5544 28.12 58.5944 27.76 57.8744 27.04C57.1544 26.2933 56.7944 25.3333 56.7944 24.16ZM62.6744 12.24C61.2344 12.24 60.5144 11.6133 60.5144 10.36C60.5144 9.69333 60.741 9.17333 61.1944 8.8C61.6744 8.4 62.2744 8.2 62.9944 8.2C64.3277 8.2 64.9944 8.8 64.9944 10C64.9944 10.6933 64.781 11.24 64.3544 11.64C63.9277 12.04 63.3677 12.24 62.6744 12.24ZM70.9175 25.6C72.2775 25.6 73.2908 24.64 73.9575 22.72C73.2108 22.4 72.8375 21.8 72.8375 20.92C72.8375 20.5467 72.9842 20.1867 73.2775 19.84C73.5975 19.4933 73.9708 19.2667 74.3975 19.16V19.04C74.3975 18.48 74.2775 18.0667 74.0375 17.8C73.7975 17.5333 73.3175 17.4 72.5975 17.4C71.4775 17.4 70.5175 17.92 69.7175 18.96C68.9175 19.9733 68.5175 21.1067 68.5175 22.36C68.5175 24.52 69.3175 25.6 70.9175 25.6ZM77.6775 5.32C77.5442 6.92 76.8242 8.86667 75.5175 11.16C74.2108 13.4533 72.8908 15.12 71.5575 16.16L71.9975 15.88C72.7708 15.3467 73.7308 15.08 74.8775 15.08C75.4908 15.08 76.0775 15.4267 76.6375 16.12C77.1975 16.8133 77.4775 17.7067 77.4775 18.8C77.4775 19.52 77.4375 20.2 77.3575 20.84C78.1042 20.7333 78.9175 20.4 79.7975 19.84C80.7042 19.2533 81.1975 18.96 81.2775 18.96C81.8642 18.96 82.1575 19.3067 82.1575 20C82.1575 20.4267 81.9975 20.7867 81.6775 21.08C80.5842 22.1467 78.9975 22.7867 76.9175 23C75.8508 26.4667 73.7308 28.2 70.5575 28.2C68.9042 28.2 67.5575 27.6933 66.5175 26.68C65.4775 25.6667 64.9575 24.3333 64.9575 22.68V22.4C65.0642 19.3867 65.5442 16.32 66.3975 13.2C67.2508 10.08 68.4642 7.4 70.0375 5.16C71.6108 2.89333 73.3175 1.76 75.1575 1.76C76.0375 1.76 76.6775 2.05333 77.0775 2.64C77.5042 3.2 77.7175 3.90667 77.7175 4.76L77.6775 5.32ZM74.0775 5.04C73.3042 5.04 72.4775 5.86667 71.5975 7.52C70.7175 9.14667 69.9975 10.8933 69.4375 12.76C68.9042 14.6 68.5575 16.16 68.3975 17.44C69.0908 16.56 69.6642 15.8133 70.1175 15.2C70.2775 14.96 70.5708 14.56 70.9975 14C71.4242 13.4133 71.7308 12.9733 71.9175 12.68C72.1042 12.36 72.3708 11.9333 72.7175 11.4C73.9442 9.4 74.6108 7.69333 74.7175 6.28V5.96C74.7175 5.34667 74.5042 5.04 74.0775 5.04ZM86.23 25.6C87.59 25.6 88.6033 24.64 89.27 22.72C88.5233 22.4 88.15 21.8 88.15 20.92C88.15 20.5467 88.2967 20.1867 88.59 19.84C88.91 19.4933 89.2833 19.2667 89.71 19.16V19.04C89.71 18.48 89.59 18.0667 89.35 17.8C89.11 17.5333 88.63 17.4 87.91 17.4C86.79 17.4 85.83 17.92 85.03 18.96C84.23 19.9733 83.83 21.1067 83.83 22.36C83.83 24.52 84.63 25.6 86.23 25.6ZM92.99 5.32C92.8567 6.92 92.1367 8.86667 90.83 11.16C89.5233 13.4533 88.2033 15.12 86.87 16.16L87.31 15.88C88.0833 15.3467 89.0433 15.08 90.19 15.08C90.8033 15.08 91.39 15.4267 91.95 16.12C92.51 16.8133 92.79 17.7067 92.79 18.8C92.79 19.52 92.75 20.2 92.67 20.84C93.4167 20.7333 94.23 20.4 95.11 19.84C96.0167 19.2533 96.51 18.96 96.59 18.96C97.1767 18.96 97.47 19.3067 97.47 20C97.47 20.4267 97.31 20.7867 96.99 21.08C95.8967 22.1467 94.31 22.7867 92.23 23C91.1633 26.4667 89.0433 28.2 85.87 28.2C84.2167 28.2 82.87 27.6933 81.83 26.68C80.79 25.6667 80.27 24.3333 80.27 22.68V22.4C80.3767 19.3867 80.8567 16.32 81.71 13.2C82.5633 10.08 83.7767 7.4 85.35 5.16C86.9233 2.89333 88.63 1.76 90.47 1.76C91.35 1.76 91.99 2.05333 92.39 2.64C92.8167 3.2 93.03 3.90667 93.03 4.76L92.99 5.32ZM89.39 5.04C88.6167 5.04 87.79 5.86667 86.91 7.52C86.03 9.14667 85.31 10.8933 84.75 12.76C84.2167 14.6 83.87 16.16 83.71 17.44C84.4033 16.56 84.9767 15.8133 85.43 15.2C85.59 14.96 85.8833 14.56 86.31 14C86.7367 13.4133 87.0433 12.9733 87.23 12.68C87.4167 12.36 87.6833 11.9333 88.03 11.4C89.2567 9.4 89.9233 7.69333 90.03 6.28V5.96C90.03 5.34667 89.8167 5.04 89.39 5.04ZM100.263 28.12C98.9292 28.12 97.9025 27.5867 97.1825 26.52C96.4625 25.4267 96.1025 23.9467 96.1025 22.08C96.1025 21.52 96.1158 21.0933 96.1425 20.8C96.4892 16.9333 97.5025 12.9067 99.1825 8.72C100.009 6.72 101.036 5.06667 102.263 3.76C103.489 2.42667 104.783 1.76 106.143 1.76C106.943 1.76 107.583 2.02667 108.063 2.56C108.543 3.06667 108.783 3.70667 108.783 4.48V4.8C108.516 7.49333 107.423 10.3067 105.503 13.24C103.583 16.1733 101.463 18.5467 99.1425 20.36C99.0358 21.2133 98.9825 21.8667 98.9825 22.32C98.9825 24.48 99.6225 25.56 100.903 25.56C102.236 25.56 103.716 24.6267 105.343 22.76C105.529 22.5733 105.756 22.48 106.023 22.48C106.316 22.48 106.583 22.6 106.823 22.84C107.089 23.0533 107.223 23.3333 107.223 23.68C107.223 24 107.063 24.3333 106.743 24.68C104.716 26.9733 102.556 28.12 100.263 28.12ZM105.143 5.04C104.023 5.04 102.889 6.46667 101.743 9.32C100.623 12.1733 99.8625 14.88 99.4625 17.44C101.036 15.68 102.476 13.68 103.783 11.44C105.116 9.2 105.796 7.33333 105.822 5.84C105.822 5.30667 105.596 5.04 105.143 5.04ZM104.903 22.84C104.903 20.8667 105.543 19.04 106.823 17.36C108.13 15.6533 109.703 14.8 111.543 14.8C112.637 14.8 113.543 15.1067 114.263 15.72C114.983 16.3333 115.343 17.16 115.343 18.2C115.343 19.6667 114.743 20.8533 113.543 21.76C112.343 22.6667 110.53 23.3733 108.103 23.88C108.477 25.0267 109.437 25.6 110.983 25.6C113.117 25.6 115.13 24.6933 117.023 22.88C117.13 22.7733 117.29 22.72 117.503 22.72C117.743 22.72 117.957 22.8133 118.143 23C118.357 23.1867 118.463 23.4133 118.463 23.68C118.463 23.9467 118.37 24.2133 118.183 24.48C117.517 25.4133 116.463 26.28 115.023 27.08C113.583 27.8533 112.077 28.24 110.503 28.24C108.957 28.24 107.637 27.7867 106.543 26.88C105.45 25.9467 104.903 24.6 104.903 22.84ZM111.583 17.4C110.73 17.4 109.903 17.9067 109.103 18.92C108.303 19.9067 107.903 20.9733 107.903 22.12C111.237 20.9733 112.903 19.7733 112.903 18.52C112.903 17.7733 112.463 17.4 111.583 17.4Z" fill="black" />
                                    </svg>
                                    <img className='md:hidden w-8 h-8' src='https://promptopia.vercel.app/assets/images/logo.svg' />
                                </Link>
                                <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
                                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    <Link
                                        href="/trending"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Trending
                                    </Link>
                                    <Link
                                        href="/create-prompt"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Create prompt
                                    </Link>
                                    <Link
                                        href="/my-prompts"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        My prompts
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={async () => { await signOut() }}
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="max-w-lg w-full lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="search"
                                            name="search"
                                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            placeholder="Search prompt..."
                                            type="search"
                                        />
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
                                {user ?
                                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                                        <div>
                                            <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none">
                                                <span className="sr-only">Open user menu</span>
                                                {user && user?.photoURL && <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user?.photoURL ?? ''}
                                                    alt="" />
                                                }
                                                {user && user?.email && !user?.photoURL && (
                                                    <p className='text-gray-600 text-base font-medium'>
                                                        {user?.email?.split("@")[0].charAt(0).toUpperCase() + user?.email?.split("@")[0].slice(1)}
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
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    :
                                    <Link
                                        href="/signIn"
                                        className="sm:ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-600 focus:outline-none"
                                    >
                                        Sign In
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden shadow-sm">
                        <div className="pt-2 pb-3 space-y-1">
                            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Trending
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Create prompt
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                My prompts
                            </Disclosure.Button>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">Tom Cook</div>
                                    <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                                </div>
                            </div>
                            <div className="mt-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Your Profile
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Settings
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                                >
                                    Sign out
                                </Disclosure.Button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar