let main_sec = document.getElementById("main_section");
const table = document.getElementById("books_table");
const header = document.getElementById("main_header");
const ssf_btn = document.getElementById("ssf_btn");
const ssf = document.getElementById("ssf");
const filter_cards = document.getElementById("filter_cards");
const sort_cards = document.getElementById("sort_cards");
const filter = document.getElementById("filter");
const sort = document.getElementById("sort");

let counter1 = 1;
const books = [
  {
    bookName: "সিক্রটস অব জায়োনিজম",
    authorName: "ভাষান্তর :ফুয়াদ আল আজাদ",
    category: "politics & geopolitics",
    reading: "not start",
    collection: "no",
    collectionType: "null",
  },
  {
    bookName: "স্টিল লাইক এন আর্টিস্ট",
    authorName: "অস্টিন ক্লেওন",
    category: "Self-Development / Personal Growth",
    reading: "complete",
    collection: "yes",
    collectionType: "hardcopy",
  },
  {
    bookName: "আঙুলকাটা জগলু  ",
    authorName: "হুমায়ুন আহমেদ",
    category: "Literature",
    reading: "complete",
    collection: "yes",
    collectionType: "null",
  },
  {
    bookName: "ময়ূরাক্ষী ",
    authorName: "হুমায়ুন আহমেদ",
    category: "Literature",
    reading: "complete",
    collection: "no",
    collectionType: "null",
  },
  {
    bookName: "দ্য আলকেমিস্ট",
    authorName: "পাওলো কোয়েলহো",
    category: "Educational",
    reading: "complete",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "সেপিয়েন্স : এ ব্রিফ হিস্ট্রি অফ হিউম্যান কাইন্ড ",
    authorName: "",
    category: "historical",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "মুক্ত বাতাসের খোঁজে",
    authorName: "লস্ট মেজেস্টি",
    category: "Social,cultural & Contemporary",
    reading: "complete",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "যদ্যপি আমার গুরু ",
    authorName: "আহমদ ছফা",
    category: "Biography / Autobiography",
    reading: "complete",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "টুইসডেইস উইথ মোরি ",
    authorName: "মিচ অ্যালবম",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "দ্য কম্পাউন্ড ইফেক্ট ",
    authorName: "ডেররেন হারডি",
    category: "productivity",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "অ্যাস এ ম্যান থিংকেত",
    authorName: "জেমস এল্লেন",
    category: "Self-Development / Personal Growth",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "সুন্দর বক্তৃতা উপস্থাপনের প্রাথমিক ধারণা",
    authorName: "মাহবুবুল হাসান",
    category: "educational",
    reading: "not start",
    collection: "Yes",
    collectionType: "hardcopy",
  },
  {
    bookName: "বাইবেল কোরআন ও বিজ্ঞান",
    authorName: "ড. মরিস বুকাইলি",
    category: "religious",
    reading: "running",
    collection: "Yes",
    collectionType: "hardcopy",
  },
  {
    bookName: "বি স্মার্ট উইথ মুহাম্মদ (সা.)",
    authorName: "ড. হিশাম আল আওয়াদি",
    category: "Self-Development / Personal Growth",
    reading: "Complete",
    collection: "Yes",
    collectionType: "hardcopy",
  },
  {
    bookName: "সেকুলারিজম প্রশ্ন",
    authorName: "ফাহমিদ-উর-রহমান",
    category: "Ideologies",
    reading: "complete",
    collection: "Yes",
    collectionType: "pdf",
  },
  {
    bookName: "থিংকিং, ফাস্ট অ্যান্ড স্লো (ড্যান কানমান)",
    authorName: "ড্যানিয়েল কানেম্যান",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "আপনার অসীম শক্তি (অ্যাওয়েকেন দ্য জায়ান্ট উইদিন)",
    authorName: "অ্যান্থনি রবিন্স",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য সেভেন হ্যাবিটস অফ হাইলি ইফেকটিভ পিপল",
    authorName: "স্টিফেন আর. কোভি",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হাউ টু উইন ফ্রেন্ডস অ্যান্ড ইনফ্লুয়েন্স পিপল",
    authorName: "ডেল কার্নেগি",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "রিচ ড্যাড পুওর ড্যাড",
    authorName: "রবার্ট টি. কিয়োসাকি",
    category: "Business & Economics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ম্যান’স সার্চ ফর মীনিং",
    authorName: "ভিক্টর ই. ফ্র্যাঙ্কল",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য পাওয়ার অফ পজিটিভ থিংকিং",
    authorName: "নরম্যান ভিনসেন্ট পিল",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ডিপ ওয়ার্ক",
    authorName: "ক্যাল নিউপোর্ট",
    category: "Productivity",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "মহান সাফল্যের ১০টি স্বর্ণালী সূত্র",
    authorName: "ড. ইবনে জাহিদ",
    category: "Biography / Autobiography",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "থিংকিং, ফাস্ট অ্যান্ড স্লো",
    authorName: "ড্যানিয়েল কানেম্যান",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "অ্যাটোমিক হ্যাবিটস",
    authorName: "জেমস ক্লিয়ার",
    category: "Self-Development / Personal Growth",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "প্লেটো থেকে লুইথার: দর্শনের সহজ পাঠ",
    authorName: "সুলতান আহমেদ",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "বিশ্ব দর্শনের ইতিবৃত্ত",
    authorName: "ড. সৈয়দ আবদুল্লাহ",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইসলামী দর্শন ও চিন্তাধারা",
    authorName: "ড. মোহাম্মদ মনজুরে ইলাহী",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "সোফির জগৎ (সোফির্স ওয়ার্ল্ড)",
    authorName: "ইয়োস্টেইন গার্ডার",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দর্শন শাস্ত্রের সারাংশ (দ্য প্রাবলেমস অফ ফিলসফি)",
    authorName: "বার্ট্রান্ড রাসেল",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দাওয়াতে দ্বূীন  ওতার কর্মপন্থা",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "মাইলস্টোন",
    authorName: "সায়্যিদ কুত্বব",
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "তালেমে ইসলাম",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ভ্রান্তির বেড়াজালে ইসলাম",
    authorName: "মুহাম্মদ কুতুব",
    category: "Islamic",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "বিংশ শতাব্দীর জাহেলিয়াত",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "তাসাউফ ও আত্মশুদ্ধি",
    authorName: "মুফতী মুহাম্মদ তাকী উসমানী",
    category: "Islamic",
    reading: "reading",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "হায়াতুল মুসলিমিন",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "লস ইসলামিক হিস্ট্রি",
    authorName: "ফিরাস আলখাতিব",
    category: "historical",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "মুসলমানদের পতনে বিশ্ব কি হারালো",
    authorName: "সায়্যিদ আবুল হাসান আলী নাদভি",
    category: "historicalc",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইসলাম বনাম পাশ্চাত্য সভ্যতা",
    authorName: null,
    category: "Ideologies",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "চেতনার ইসতিহার",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "আমাদের জাতি সত্তার বিকাশ",
    authorName: null,
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "রিয়াদুস সালিহিন",
    authorName: "ইমাম আন-নাওয়াউই",
    category: "Hadith",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "ফয়জুল কালাম",
    authorName: null,
    category: "Hadith",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "আর রাহিকুল মাখতুম",
    authorName: "শাইখ সফিউর রহমান মুবারকপুরি",
    category: "Seerah",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "বাংলার ব্রত",
    authorName: "আবনিন্দ্রনাথ ঠাকুর",
    category: "Literature",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "থিওরি অফ পারম্যানেন্ট রেভোলিউশন",
    authorName: "লিয়ন ট্রটস্কি",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইন্ডাস্ট্রিয়াল রেভোলিউশন",
    authorName: "আর্নল্ড জে. টয়নবি",
    category: "History",
    reading: "not starte",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হিন্দু মুসলমানের সমস্যা",
    authorName: "সারাত চন্দ্র চট্টোপাধ্যায়",
    category: "Social,cultural & Contemporarye",
    reading: "not starte",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "শতাব্দীর চিঠি",
    authorName: "মুসা আল হাফিজ",
    category: "Islamic",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "ভ্রান্তিবিলাস",
    authorName: "জাকারিয়া মাসুদ",
    category: "Social,cultural & Contemporary",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "কাল থেকে ভালো হয়ে যাবো",
    authorName: "মাহিন মাহমুদ",
    category: "Islamice",
    reading: "not starte",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "আত্মার ব্যাধি ও প্রতিকার",
    authorName: "হজরত মাওলানা শাহ হাকিম মুহাম্মদ আখতার",
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইসলাম ও গণতন্ত্র",
    authorName: "মাওলানা কাশেম ওমর",
    category: "Ideologies",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "আল্লাহর ভয় যে চোর কাঁদে",
    authorName: "ড. মুহাম্মদ বিন আব্দুল রহমান আল-আরিফি",
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "নফসের বিরুদ্ধে জিহাদ",
    authorName: "মাহমুদ বিন নূর",
    category: "Self-Development / Personal Growth",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "যুগবাণী",
    authorName: "কাজী নজরুল ইসলাম",
    category: "Social,cultural & Contemporary",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইকিগাই",
    authorName: "হেক্টর গার্সিয়া, ফ্রান্সেস্ক মিরালেস",
    category: "Self-Development / Personal Growth",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "ফোর আওয়ার ওয়ার্ক উইক",
    authorName: "টিমোথি ফেরিস",
    category: "Productivity",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "বেলা ফুরাবার আগে",
    authorName: "আরিফ আজাদ",
    category: "Islamic",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "শেষ বিকালের মেয়ে",
    authorName: "জহির রায়হান",
    category: "Literature",
    reading: "complete",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "চিন্তাপরাধ",
    authorName: "আসিফ আদনান",
    category: "Social,cultural & Contemporary",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "অবক্ষয়কাল",
    authorName: "আসিফ আদনান",
    category: "Social,cultural & Contemporary",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য সাইকোলজি অফ মানি",
    authorName: "মরগান হাউসেল",
    category: "Business & Economics",
    reading: "running",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "গিট অ্যান্ড গিথাব",
    authorName: "জুনাইদ আহমেদ",
    category: "Technology",
    reading: "not start",
    collection: "yes",
    collectionType: "pdf",
  },
  {
    bookName: "দর্শনকোষ",
    authorName: "সারদার ফজলুল করিম",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName:
      "দ্য ক্ল্যাশ অফ সিভিলাইজেশন অ্যান্ড দ্য রিমেকিং অফ ওয়ার্ল্ড অর্ডার",
    authorName: "স্যামুয়েল পি. হান্টিংটন",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য আলম্যান্যাক অফ নাভাল রাভিকান্ট",
    authorName: "এরিক জর্জেনসন",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হাউ টু শো ইয়োর ওয়ার্ক",
    authorName: "অস্টিন ক্লেওন",
    category: "Productivity",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হাউ অ্যান ইকনোমি গ্রোস অ্যান্ড হু ইট ক্র্যাশেস",
    authorName: "পিটার শিফ, অ্যান্ড্রু শিফ",
    category: "Business & Economics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "প্রিজনারস অফ জিওগ্রাফি",
    authorName: "টিম মার্শাল",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য অ্যানাটমি অফ ওয়ার্ল্ড পলিটিকস",
    authorName: "মোহাম্মদ মিরাজ মিয়া",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "বিশ্ব রাজনীতির ১০০ বছর",
    authorName: "তারেক শামসুর রহমান",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "রাজনীতিকোষ",
    authorName: "হারুনুর রশীদ",
    category: "Politics",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য আর্ট অফ থিংকিং ক্লিয়ারলি",
    authorName: "রলফ ডোবেলি",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "48 ল অফ পাওয়ার",
    authorName: "রবার্ট গ্রিন",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "সুফির জগৎ",
    authorName: "ইয়ান্টেন গার্ডার",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হেমলকের নিমন্ত্রণ",
    authorName: "সুজন দেবনাথ",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "সোফির্স ওয়ার্ল্ড",
    authorName: "ইয়োস্টেইন গার্ডার",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ফিলসফি ইন দ্য ইসলামিক ওয়ার্ল্ড",
    authorName: "পিটার অ্যাডামসন",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ক্লাসিক্যাল ইন্ডিয়ান ফিলসফি",
    authorName: "পিটার অ্যাডামসন, জোনারডন গানেরি",
    category: "Philosophy",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ড্রাইভ",
    authorName: "ড্যানিয়েল পিঙ্ক",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য ল' অফ হিউম্যান নেচার",
    authorName: "রবার্ট গ্রিন",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইনফ্লুয়েন্স: দ্য ফিলসফি অফ পারসুয়েশন",
    authorName: "রবার্ট সিয়ালদিনি",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ইমোশনাল ইন্টেলিজেন্স",
    authorName: "ড্যানিয়েল গোলম্যান",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "গেমস পিপল প্লে",
    authorName: "এরিক বার্নে",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "থিংকিং, ফাস্ট অ্যান্ড স্লো",
    authorName: "ড্যানিয়েল কানেম্যান",
    category: "Psychology",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "লাভ ফর ইম্পারফেক্ট থিংস",
    authorName: "হেমিন সুনিম",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হুয়েন থিংস ডোন্ট গো ইয়োর ওয়ে",
    authorName: "হেমিন সুনিম",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "দ্য থিংস ইউ ক্যান সি অনলি হেন ইউ স্লো ডাউন",
    authorName: "অস্টিন ক্লেওন",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "হাউ টু উইন ফ্রেন্ডস অ্যান্ড ইনফ্লুয়েন্স পিপল",
    authorName: "ডেল কার্নেগি",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "নেভার স্প্লিট দ্য ডিফারেন্স",
    authorName: "ক্রিস ভস",
    category: "Self-Development / Personal Growth",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
  {
    bookName: "ডিপ ওয়ার্ক",
    authorName: "ক্যাল নিউপোর্ট",
    category: "Productivity",
    reading: "not start",
    collection: "No",
    collectionType: "null",
  },
];
function showTable(book) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  let td_no = document.createElement("td");
  tr.appendChild(td_no);

  let td_book = document.createElement("td");
  tr.appendChild(td_book);

  let td_author = document.createElement("td");
  tr.appendChild(td_author);

  td_no.innerHTML = counter1;

  td_book.innerHTML = book.bookName;

  td_author.innerHTML = book.authorName;

  counter1++;
}
function tableHeading() {
  table.innerHTML = " ";

  let tr = document.createElement("tr");
  table.appendChild(tr);

  let th_1_1 = document.createElement("th");
  tr.appendChild(th_1_1);
  th_1_1.textContent = "Sr.";

  let th_1_2 = document.createElement("th");
  tr.appendChild(th_1_2);
  th_1_2.textContent = "Book Name";

  let th_1_3 = document.createElement("th");
  tr.appendChild(th_1_3);
  th_1_3.textContent = "Author Name";
}

/* sort button, filter button এর display on off করার function নিচে রয়েছে 
  line 137 to 166 পর্যন্ত 
*/
filter_cards.style.display = "none";
sort_cards.style.display = "none";
filter.addEventListener("click", () => {
  if (filter_cards.style.display === "none") {
    filter_cards.style.display = "block";
  } else {
    filter_cards.style.display = "none";
  }
});

sort.addEventListener("click", () => {
  if (sort_cards.style.display === "none") {
    sort_cards.style.display = "block";
  } else {
    sort_cards.style.display = "none";
  }
});

/* প্রথমেই হোমস্ক্রিনে বইগুলো দেখানোর ফাংশন এখান থেকেই 
শুরু হয়  */

/* আসল sort method   এখান থেকেই শুরু হয়েছে ;Line:205 to 259 */
function sortFunction(action) {
  counter1 = 1;

  switch (action) {
    case "aToz":
      tableHeading();

      let sortBox = books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
      );

      for (let book of sortBox) {
        showTable(book);
      }

      break;
    case "zToa":
      tableHeading();

      let sortBox1 = books.sort((a, b) =>
        b.bookName.localeCompare(a.bookName, undefined, { sensitivity: "base" })
      );

      for (let book of sortBox1) {
        showTable(book);
      }
      break;

    default:
      for (let i = 0; i <= books.length; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td_no = document.createElement("td");
        tr.appendChild(td_no);

        let td_book = document.createElement("td");
        tr.appendChild(td_book);

        let td_author = document.createElement("td");
        tr.appendChild(td_author);

        td_no.innerHTML = `${i + 1}`;
        if (books[i]) {
          td_book.innerHTML = books[i].bookName;
        }
        if (books[i]) {
          td_author.innerHTML = books[i].authorName;
        }
      }
  }
}

/* ফিলটার করার ফাংশন; Line: 260 to 1 */
let filter_select = document.getElementById("filter_select");
filter_select.addEventListener("change", () => {
  let selectedCetegory = filter_select.value.trim().toLowerCase();
  console.log(selectedCetegory);
  counter1 = 1;
  // let filtering = books.filter(book => book.category.toLowerCase().includes(selectedCetegory.toLowerCase()));
  let filtering = books.filter((book) =>
    book.category.toLowerCase().includes(selectedCetegory)
  );
  tableHeading();

  if (main_sec.lastElementChild !== table) {
    removeChild();
  }

  h4.textContent = `${selectedCetegory} Books`;
  main_sec.appendChild(h4);

  let sortBox = filtering.sort((a, b) =>
    a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
  );
  for (let book of sortBox) {
    showTable(book);
  }
});

/* filter remove করার function; Line :643 to 685 */
const removefilter = document.getElementById("removeFilter");
removefilter.addEventListener("click", function () {
  if (main_sec.lastElementChild !== table) {
    removeChild();
  }
  h4.textContent = "all books";
  main_sec.appendChild(h4);

  counter1 = 1;
  tableHeading();

  sortFunction("aToz");
});

/* search করার function; Line :261 to 282 */

const search_field = document.getElementById("search_field");
let timer;
search_field.addEventListener("keyup", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    if (main_sec.lastElementChild !== table) {
      removeChild();
    }
    h4.textContent = `All Books`;
    main_sec.appendChild(h4);

    let searchValue = search_field.value;
    counter1 = 1;

    let search_filter = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchValue.toLowerCase())
    );

    tableHeading();
    let sortBox = search_filter.sort((a, b) =>
      a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
    );
    for (let book of sortBox) {
      showTable(book);
    }
  }, 300);
});

// নিচের function এর মাধ্যমে reading এর কার্যক্রম সম্পাদিত হবে :
// reading এর সকর function নিচে রয়েছে।
const reading_btn = document.getElementById("reading");
const reading_option = document.getElementById("reading_options");
reading_option.style.display = "none";
function progressTracker(want) {
  counter1 = 1;
  const filtering = books.filter((book) => book.reading.includes(want));
  let sortBox = filtering.sort((a, b) =>
    a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
  );

  let caption = document.createElement("caption");
  caption.className = "caption";

  if (want === "not start") {
    caption.textContent = "Not Started";
  } else if (want === "running") {
    caption.textContent = "In Progress";
  } else {
    caption.textContent = "Completed";
  }

  tableHeading();
  table.appendChild(caption);

  for (let book of sortBox) {
    showTable(book);
  }
}

// নিচের function এর মাধ্যমে collection  এর কার্যক্রম সম্পাদিত হবে :
let collection_option = document.getElementById("collection_options");
collection_option.style.display = "none";
let filtering;
function removeChild(event) {
  let geth4 = main_sec.lastElementChild;
  geth4.remove();
}

let h4 = document.createElement("h4");
function collectionFun(what) {
  filtering = books.filter((book) =>
    book.collection.toLowerCase().includes(what)
  );
  function collectionCollectionTypeFunction() {
    h4.style.display = "block";

    let collectionOptionTwo = document.querySelector(".optionTwo");
    table.innerHTML = " ";
    counter1 = 1;
    tableHeading();

    let sortBox = filtering.sort((a, b) =>
      a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
    );

    for (let book of sortBox) {
      showTable(book);
    }

    if (what.toLowerCase() === "yes") {
      main_sec.style.marginTop = "180px";
      if (main_sec.lastElementChild !== table) {
        removeChild();
      }
      h4.textContent = "all Collected Books";
      main_sec.appendChild(h4);

      collectionOptionTwo.style.display = "grid";
    } else {
      main_sec.style.marginTop = "120px";

      if (main_sec.lastElementChild !== table) {
        removeChild();
      }
      h4.textContent = "Not Collected Books";
      main_sec.appendChild(h4);

      collectionOptionTwo.style.display = "none";
    }
  }

  collectionCollectionTypeFunction();
}
function pdfHardcopyFunction(pdfHeader) {
  filtering = books.filter((book) =>
    book.collectionType.toLowerCase().includes(pdfHeader.toLowerCase())
  );

  table.innerHTML = " ";
  counter1 = 1;
  tableHeading();

  let sortBox = filtering.sort((a, b) =>
    a.bookName.localeCompare(b.bookName, undefined, { sensitivity: "base" })
  );

  for (let book of sortBox) {
    showTable(book);
  }

  if (pdfHeader.toLowerCase() === "pdf") {
    if (main_sec.lastElementChild !== table) {
      removeChild();
    }
    h4.textContent = "Collected Books : PDF";
    main_sec.appendChild(h4);
  } else {
    if (main_sec.lastElementChild !== table) {
      removeChild();
    }
    h4.textContent = "Collected Books : Hardcopy";
    main_sec.appendChild(h4);
  }
}

function multiSecFun(option) {
  switch (option) {
    case "home":
      collection_option.style.display = "none";
      h4.style.display = "block";
      reading_option.style.display = "none";
      //  h4.style.display = 'none';
      ssf.style.display = "block";
      main_sec.style.marginTop = "20px";
      main_sec.style.marginBottom = "70px";

      table.innerHTML = " ";
      collection_option.style.display = "none";
      reading_option.style.display = "none";
      if (main_sec.lastElementChild !== table) {
        removeChild();
      }
      h4.textContent = "all books";
      main_sec.appendChild(h4);
      homeFunction();
      break;

    case "note":
      table.innerHTML = " ";
      collection_option.style.display = "none";
      reading_option.style.display = "none";
      h4.style.display = "none";
      ssf.style.display = "none";
      break;

    case "reading":
      reading_option.style.display = "block";
      ssf.style.display = "none";
      main_sec.style.marginTop = "70px";
      main_sec.style.marginBottom = "70px";

      window.addEventListener("scroll", function () {
        if (window.scrollY >= 22) {
          reading_option.style.position = "fixed";
          reading_option.style.top = "0px";
        } else {
          reading_option.style.top = "50px";
          main_sec.style.marginBottom = "50px";
        }
      });
      progressTracker("running");

      collection_option.style.display = "none";
      h4.style.display = "none";
      break;

    case "collection":
      function collectionShow() {
        collection_option.style.display = "flex";
        collection_option.style.flexDirection = "column";
        collection_option.style.alignItems = "center";
        collection_option.style.justifyContent = "space-evenly";
      }
      collectionShow();
      function collectionOthersFunctionality() {
        ssf.style.display = "none";
        main_sec.style.marginTop = "120px";
        main_sec.style.marginBottom = "70px";
        reading_option.style.display = "none";

        window.addEventListener("scroll", function () {
          if (window.scrollY >= 22) {
            collection_option.style.position = "fixed";
            collection_option.style.top = "0px";
          } else {
            collection_option.style.top = "50px";
          }
        });
      }
      collectionOthersFunctionality();
      tableHeading();
      collectionFun("yes");
      break;

    default:
      function homeFunction() {
        main_sec.style.marginBottom = "70px";

        counter1 = 1;
        tableHeading();
        let sortBox = books.sort((a, b) =>
          a.bookName.localeCompare(b.bookName, undefined, {
            sensitivity: "base",
          })
        );
        for (let book of sortBox) {
          showTable(book);
        }
        if (main_sec.lastElementChild !== table) {
          removeChild();
        }
        h4.textContent = "all books";
        main_sec.appendChild(h4);
      }
      homeFunction();
  }
}

multiSecFun();

window.addEventListener("scroll", function () {
  if (window.scrollY >= 42) {
    ssf_btn.style.position = "fixed";
    ssf_btn.style.top = "0px";
  } else {
    ssf_btn.style.position = "static";
  }
});

// NOTE SECTION FUNCTION
