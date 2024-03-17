import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { NextSeo } from 'next-seo'

import { BsTwitter, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlask,
  SiRedux ,
} from 'react-icons/si'
import { FaJava, FaHtml5  } from "react-icons/fa";

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import portraitImage from '@/images/avatar.png'
import { baseUrl } from '../seo.config'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          className,
          'group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'
        )}
      >
        <Icon className="mr-3 h-[1.2rem] w-[1.2rem] flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Skills({ className, icon: Icon, children }) {
  return (
    <li>
      <div className="group inline-flex items-center text-sm font-medium tracking-wide text-zinc-800 transition duration-300 hover:scale-110 dark:text-zinc-200">
        <Icon
          className={clsx(
            className,
            'mr-3 h-[1.2rem] w-[1.2rem] fill-indigo-500/70 dark:fill-indigo-300'
          )}
        />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About"
        description="I'm a front end web developer and designer. I live in India, where I break things and learn fast."
        canonical={`${baseUrl}about/`}
        openGraph={{
          url: `${baseUrl}about/`,
          title: 'About',
          description:
            "I'm a front end web developer and designer. I live in India, where I break things and learn fast.",
          images: [
            {
              url: `${baseUrl}api/og?title=About`,
              width: 1200,
              height: 600,
              alt: `Blog | Rittik Basu`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex justify-center lg:col-span-5">
            <div className="pt-2 lg:pl-10">
              <div className="max-w-xs px-2.5">
                <Image
                  src={portraitImage}
                  alt="Avatar Image of SarfRajs"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="transition duration-500 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:order-first lg:col-span-7 lg:row-span-2">
            <h1 className="font-heading text-4xl tracking-wider text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m{' '}
              <span
                className="animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-clip-text
            text-transparent dark:from-purple-400 dark:via-indigo-400
            dark:to-pink-400"
              >
                Sarf Raj Shekh.
              </span>{' '}
              <br />I live in India, where I break things & learn fast.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 md:text-justify">
              <p>
                Although I have a degree in computer science, I still consider
                myself a self taught developer. I got into coding in the second
                year of my undergrad, but I think I have always had the
                mindset of a developer.
              </p>
              <p>
                I come from Satna, a small town where my passion for coding blossomed.
                I&apos;ve been captivated by the world of programming.
                I&apos;ve delved into various languages and technologies,
                mastering JavaScript, C++, and diving deep into web development
                with frameworks like React and Next.js.
              </p>
              <p>
                Over the past 2.5 years, I&apos;ve immersed myself in the field,
                gaining hands-on experience and honing my skills through freelancing
                projects. Today, I thrive on tackling real-world problems, continuously
                learning and applying new tools and frameworks to create innovative solutions.
              </p>
              <div className="cursor-default">
                <span className="font-poppins font-bold tracking-widest underline">
                  Skills I have
                </span>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 font-poppins md:grid-cols-3"
                >
                  <Skills
                    icon={SiJavascript}
                    className="group-hover:fill-yellow-400 cursor-pointer dark:group-hover:fill-yellow-300"
                  >
                    Javascript
                  </Skills>
                  <Skills
                    icon={SiReact}
                    className="group-hover:fill-blue-400 cursor-pointer dark:group-hover:fill-blue-300"
                  >
                    React
                  </Skills>
                  <Skills
                    icon={SiNextdotjs}
                    className="group-hover:fill-black cursor-pointer dark:group-hover:fill-white"
                  >
                    Next.js
                  </Skills>
                  <Skills
                    icon={SiRedux}
                    className="group-hover:fill-black cursor-pointer dark:group-hover:fill-white"
                  >
                    Redux
                  </Skills>
                  <Skills
                    icon={SiTailwindcss}
                    className="group-hover:fill-blue-400 cursor-pointer"
                  >
                    Tailwind
                  </Skills>
                  <Skills
                    icon={FaHtml5}
                    className="group-hover:fill-blue-500 cursor-pointer"
                  >
                    HTML
                  </Skills>
                  <Skills
                    icon={FaJava}
                    className="group-hover:fill-orange-400 cursor-pointer"
                  >
                    Java
                  </Skills>
                  <Skills
                    icon={SiFirebase}
                    className="group-hover:fill-yellow-400 cursor-pointer dark:group-hover:fill-yellow-300"
                  >
                    Firebase
                  </Skills>
                </ul>
              </div>

              <div className="flex justify-center pt-8 md:hidden">
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden font-poppins lg:col-span-5 lg:block lg:pl-10">
            <div className="flex justify-center">
              <ul role="list" className="space-y-6">
                {/* <SocialLink
                  href="https://twitter.com/sarfraj"
                  icon={BsTwitter}
                  className=""
                >
                  _sarf_raj
                </SocialLink> */}
                <SocialLink
                  href="https://github.com/Sarf1234"
                  icon={BsGithub}
                  className=""
                >
                  Sarf1234
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/sarf-raj-shekh-20812b198/"
                  icon={FaLinkedinIn}
                  className=""
                >
                  sarf-raj-shekh
                </SocialLink>
                <div className="flex justify-center">
                  <div className="w-24 border-t border-zinc-300 dark:border-zinc-600/40"></div>
                </div>
                <SocialLink
                  href="mailto:sarfarajshekh69@gmail.com"
                  icon={MdEmail}
                  className=""
                >
                  sarfarajshekh69@gmail.com
                </SocialLink>
                <Button href="/projects" className="py-2">
                  See my projects
                </Button>
              </ul>
            </div>
          </div>
          <div className="lg:hidden"></div>
        </div>
      </Container>
    </>
  )
}
