import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

// Map Portable Text blocks to Tailwind typography classes
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden shadow-md">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );
    },
  },
  block: {
    // Customize rendering of various heading styles
    h1: ({ children }) => <h1 className="text-4xl font-bold text-deep-navy mt-10 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-deep-navy mt-10 mb-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-deep-navy mt-8 mb-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-deep-navy mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-slate-600 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-fresh-green bg-light-blue p-6 italic text-deep-navy my-8 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside ml-6 mb-6 text-slate-600 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside ml-6 mb-6 text-slate-600 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : undefined}
          className="text-corporate-blue hover:text-fresh-green underline decoration-corporate-blue/30 hover:decoration-fresh-green transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold text-deep-navy">{children}</strong>,
  },
};

export default function PortableTextRenderer({ content }) {
  if (!content) return null;
  return <PortableText value={content} components={components} />;
}
