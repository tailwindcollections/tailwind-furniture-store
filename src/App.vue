<template>
  <div class="font-sans text-gray-900">
    <header class="flex items-center border-b border-gray-900/20">
      <div class="flex items-center justify-between flex-1 pl-20 pr-4">
        <a href="#">
          <Logo />
        </a>
        <nav
          class="flex items-center space-x-10 text-sm font-medium text-gray-900 uppercase"
        >
          <a
            v-for="item in menu"
            class="py-1 hover:border-b hover:border-gray-900"
            href="#"
          >
            {{ item }}
          </a>
        </nav>
        <div class="flex items-center">
          <button class="h-16 px-6">
            <MenuIcon />
          </button>
          <button class="h-16 px-6">
            <SearchIcon />
          </button>
        </div>
      </div>
      <button
        class="flex items-center justify-center h-16 px-6 border-l border-gray-900/20"
      >
        <CartIcon />
      </button>
    </header>
    <main class="pt-10 pb-12 pl-20">
      <button>
        <ArrowLeftIcon />
      </button>
      <div class="flex">
        <div class="flex flex-col w-1/2">
          <div class="max-w-md">
            <div class="flex items-center text-sm pt-9">
              <span class="text-gray-900/40">Chair&nbsp;</span>
              <span>/ Meryl Lounge Chair</span>
            </div>
            <div class="pt-10">
              <h1 class="text-4xl font-bold tracking-wide">Meryl Lounge Chair</h1>
            </div>
            <div class="flex items-center justify-between pt-4">
              <span class="text-3xl">$149.99</span>
              <div class="flex items-center">
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5" />
                </div>
                <div class="pl-2 leading-none">
                  4.6 / 5.0 <span class="text-gray-900/40"> (556)</span>
                </div>
              </div>
            </div>
            <p class="pt-8 leading-relaxed">
              The gently curved lines accentuated by sewn details are kind to your body
              and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism
              that’s built to outlast years of ups and downs.
            </p>
            <div class="flex pt-8 space-x-4">
              <button
                class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                class="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                class="w-5 h-5 rounded-full bg-[#CBA5A5] hover:ring-4 hover:ring-gray-900/20"
              />
            </div>
            <div class="flex space-x-6 pt-9">
              <div class="flex items-center border rounded-sm border-gray-900/30">
                <button class="p-4" @click="count--">
                  <MinusIcon />
                </button>
                <input
                  v-model="count"
                  type="text"
                  class="w-16 h-full text-center outline-none"
                />
                <button class="p-4" @click="count++">
                  <PlusIcon />
                </button>
              </div>
              <button
                class="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
              >
                Add to cart
              </button>
            </div>
            <div class="pt-8">
              Free 2-5 day shipping • Tool-free assembly • 30-day trial
            </div>
            <div class="flex items-center justify-between pt-12">
              <button
                class="flex items-center px-4 py-2 space-x-2 text-teal-500 hover:text-teal-600"
              >
                <HeartIcon class="stroke-current" />
                <span>Add to Wishlist</span>
              </button>
              <div class="flex items-center space-x-6">
                <button><FacebookIcon class="w-5 h-5" /></button>
                <button><TwitterIcon class="w-5 h-5" /></button>
                <button><PinterestIcon class="w-5 h-5" /></button>
                <button><InstagramIcon class="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex flex-col items-end w-1/2">
          <div class="flex items-start pr-20 space-x-2">
            <span class="text-3xl font-bold leading-tight">01 </span>
            <span class="text-xl">/ 05</span>
          </div>
          <div class="flex pr-10 space-x-16">
            <button class="p-3"><ChevronLeftIcon /></button>
            <button class="p-3"><ChevronRightIcon /></button>
          </div>
          <img src="/img/product-1.png" alt="" />
          <div
            class="absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent to-teal-600/20 top-24 right-0"
          />
          <div class="flex pr-20 space-x-4">
            <div
              v-for="i in 5"
              class="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-teal-500"
            >
              <img :src="`/img/product-${i + 1}.png`" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

import Logo from "./icons/logo.svg";
import MenuIcon from "./icons/menu.svg";
import SearchIcon from "./icons/search.svg";
import CartIcon from "./icons/cart.svg";
import ArrowLeftIcon from "./icons/arrow-left.svg";
import StarIcon from "./icons/star.svg";
import MinusIcon from "./icons/minus.svg";
import PlusIcon from "./icons/plus.svg";
import HeartIcon from "./icons/heart.svg";
import FacebookIcon from "./icons/facebook.svg";
import TwitterIcon from "./icons/twitter.svg";
import PinterestIcon from "./icons/pinterest.svg";
import InstagramIcon from "./icons/instagram.svg";
import ChevronLeftIcon from "./icons/chevron-left.svg";
import ChevronRightIcon from "./icons/chevron-right.svg";

const menu = ["Shop", "Collective", "Designer", "About us", "Contact"];
const count = ref(1);
</script>
