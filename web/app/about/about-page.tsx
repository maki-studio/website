'use client'
import { Header, Footer, VerticalTabs } from "@/app/components";
// import Image from 'next/image';
// import Link from "next/link";

// import circleIcon from '@/app/icons/ui/circle.svg'
// import dTriangleIcon from '@/app/icons/ui/down-triangle.svg'
// import locationIcon from '@/app/icons/ui/location.svg'
// import phoneIcon from '@/app/icons/ui/phone.svg'
// import mailIcon from '@/app/icons/ui/mail.svg'
import React from 'react';
import { VerticalTab } from "../components/VerticalTabs";

import BusinessSection from "./sections/business";
import StorySection from "./sections/story";
import GoodSection from "./sections/good";
import TeamSection from "./sections/team";
import TermsSection from "./sections/terms";
import PrivacySection from "./sections/privacy";
import AffiliateSection from "./sections/affiliates";
import { useSearchParams } from "next/navigation";

const contentTabs: VerticalTab[] = [
  {
    title: "Our Story",
    element: StorySection(),
  },
  {
    title: "The Business",
    element: BusinessSection(),
  },
  {
    title: "Design For Social Good",
    element: GoodSection(),
  },
  {
    title: "Our Team",
    element: TeamSection(),
  },
  {
    title: "Affiliates",
    element: AffiliateSection(),
  },
  {
    title: "Terms and Conditions",
    element: TermsSection()
  },
  {
    title: "Privacy Policy",
    element: PrivacySection()
  },
]


export default function AboutPage() {

  const searchParams = useSearchParams();
  const search = searchParams.get('active');

  return <>
    <Header activeLink='about'></Header>
    <VerticalTabs tabs={contentTabs} activeTabTitle={search ?? ''}></VerticalTabs>
    <Footer></Footer>
  </>;
}