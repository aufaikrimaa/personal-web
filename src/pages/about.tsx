import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';

import AvatarImage from '../../public/assets/blog/authors/aufa.jpg';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { PageTitle } from '../components/PageTitle';
import { Quote } from '../components/Quote';
import { Section } from '../components/Section';
import { SocialLink } from '../components/SocialLink';
import {
  AboutExtended,
  Blogs,
  Books,
  PeopleWorthFollowingOnTwitter,
  Podcasts,
  Quotes,
  SocialMedia,
  VideosWorthWatching,
} from '../data/lifeApi';

const seoTitle = `About`;
const seoDescription = `A few words about me.`;

export default function AboutMe() {
  const randomQuote = useMemo(() => Quotes[Math.floor(Math.random() * Quotes.length)], []);

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}/about`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={AvatarImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <PageTitle>Hi, I&apos;m Aufa Ikrimah.</PageTitle>
            <div className="mt-6 text-base">{AboutExtended}</div>
            <div className="mt-6 flex gap-6">
              {SocialMedia.map((socialProfile) => (
                <SocialLink
                  key={socialProfile.name}
                  aria-label={`Follow on ${socialProfile.name}`}
                  href={socialProfile.link}
                  icon={socialProfile.icon}
                />
              ))}
            </div>

            <Section>
              <Section.Title as="h2">Work</Section.Title>
              <Section.Content>
                I&apos;m a software engineer with experience in building web applications using
                JavaScript, TypeScript, React.js, Next.js, Svelte, Express.js, and Nest.js. My
                journey in web development began at the Perempuan Inovasi 2023 Bootcamp, where I led
                a team to develop SheTalk, a web app that won 2nd place for Best Innovation.
                <br />
                <br /> I’ve worked remotely as a Frontend Developer at Chup Online (Malaysia),
                focusing on building and optimizing user interfaces with React.js and TypeScript.
                During my time there, I also contributed to developing internal tools, integrating
                APIs, and enhancing the overall user experience.
                <br />
                <br /> Currently, I’m a Product Engineer at Systeric, where I develop modern web
                applications with Next.js, Svelte, Express.js, and Nest.js. I focus on writing
                clean, maintainable code and delivering features that are both functional and
                user-friendly.
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Books worth re-reading</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Books.map((book) => (
                    <li key={book.name}>
                      <ExternalLink href={book.link}>{book.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Podcasts I listen to</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Podcasts.map((podcast) => (
                    <li key={podcast.name}>
                      <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            {/* <Section>
              <Section.Title as="h2">Blogs I read</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Blogs.map((blog) => (
                    <li key={blog.name}>
                      <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section> */}
            <Section>
              <Section.Title as="h2">Videos worth watching</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {VideosWorthWatching.map((video) => (
                    <li key={video.name}>
                      <ExternalLink href={video.link}>{video.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
            {/* <Section>
              <Section.Title as="h2">People with unique perspective I follow</Section.Title>
              <Section.Content>
                {PeopleWorthFollowingOnTwitter.map<React.ReactNode>((personOnTwitter) => (
                  <ExternalLink key={personOnTwitter.name} href={personOnTwitter.link}>
                    {personOnTwitter.name}
                  </ExternalLink>
                )).reduce((prev, curr) => [prev, ', ', curr])}
                .
              </Section.Content>
            </Section>
            <Section>
              <Section.Title as="h2">Quote worth thinking about</Section.Title>
              <Section.Content>
                <div className="mt-8">
                  <Quote quote={randomQuote.content} author={randomQuote.author} />
                </div>
              </Section.Content>
            </Section> */}
          </div>
        </div>
      </Container>
    </>
  );
}
