import React from 'react';

const Footer = () => {
    return (


        <footer class="p-4 bg-gray-900 rounded-lg shadow md:px-6 md:py-8 ">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-stone-300">Duffer Fitness</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 text-stone-300 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 text-stone-300">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 text-stone-300">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline text-stone-300">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class=" text-stone-300 block text-sm sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline text-stone-300">Duffer Fitness</a>. All Rights Reserved.
            </span>
        </footer>


    );
};

export default Footer;