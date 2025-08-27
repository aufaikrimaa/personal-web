import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Quote } from '../Quote';
import React from 'react';

//TODO: improve types here, cleanup the code
type Props = {
  block: any;
};

export const NotionBlockRenderer = ({ block }: Props) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <NotionText textItems={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1>
          <NotionText textItems={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2>
          <NotionText textItems={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3>
          <NotionText textItems={value.rich_text} />
        </h3>
      );
    case 'bulleted_list':
      return (
        <ul className="list-outside list-disc">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ul>
      );
    case 'numbered_list':
      return (
        <ol className="list-outside list-decimal">
          {value.children.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </ol>
      );
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className="pl-0">
          <NotionText textItems={value.rich_text} />
          {!!value.children &&
            value.children.map((block: any) => (
              <NotionBlockRenderer key={block.id} block={block} />
            ))}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <NotionText textItems={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <NotionText textItems={value.rich_text} />
          </summary>
          {value.children?.map((block: any) => (
            <NotionBlockRenderer key={block.id} block={block} />
          ))}
        </details>
      );
    case 'child_page':
      return <p>{value.title}</p>;
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <Image
            className="object-cover"
            src={src}
            alt={caption}
            width={value.size?.width || 800} // fallback default
            height={value.size?.height || 600}
          />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );

    // ✅ Tambahan untuk handle video
    case 'video':
      const videoSrc = value.type === 'external' ? value.external.url : value.file.url;
      if (
        videoSrc.includes('youtube.com') ||
        videoSrc.includes('youtu.be') ||
        videoSrc.includes('vimeo.com')
      ) {
        const embedUrl = videoSrc
          .replace('watch?v=', 'embed/')
          .replace('youtu.be/', 'youtube.com/embed/');
        return (
          <iframe
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', height: '400px' }}
          />
        );
      }
      return <video controls src={videoSrc} style={{ maxWidth: '100%' }} />;

    // ✅ Tambahan untuk handle embed block Notion
    case 'embed':
      return (
        <iframe
          src={value.url}
          frameBorder="0"
          allowFullScreen
          style={{ width: '100%', height: '400px' }}
        />
      );

    case 'divider':
      return <hr key={id} />;
    case 'quote':
      return <Quote key={id} quote={value.rich_text[0].plain_text} />;
    case 'code':
      return (
        <pre className={`language-${value.language}`}>
          <code key={id}>{value.rich_text[0].plain_text}</code>
        </pre>
      );
    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div>
            📎{' '}
            <Link href={src_file} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank">
          {href}
        </a>
      );

    case 'column_list':
      return (
        <div className="flex gap-4">
          {block.children?.map((child: any) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </div>
      );

    case 'column':
      return (
        <div className="flex-1">
          {block.children?.map((child: any) => (
            <NotionBlockRenderer key={child.id} block={child} />
          ))}
        </div>
      );
    case 'callout':
      return (
        <div className="p-3 my-2 bg-zinc-100 border-l-2 border-zinc-300 rounded-md">
          <div className="text-sm">
            {(() => {
              // Pecah rich_text jadi baris-baris
              const lines: TextRichTextItemResponse[][] = [];
              let currentLine: TextRichTextItemResponse[] = [];

              value.rich_text.forEach((t: TextRichTextItemResponse) => {
                // kalau ada newline di dalam text
                const parts = t.plain_text.split('\n');

                parts.forEach((part, idx) => {
                  if (idx > 0) {
                    // push line sebelumnya, mulai line baru
                    lines.push(currentLine);
                    currentLine = [];
                  }
                  if (part.length > 0) {
                    currentLine.push({
                      ...t,
                      text: { ...t.text, content: part },
                      plain_text: part,
                    });
                  }
                });
              });

              if (currentLine.length > 0) lines.push(currentLine);

              return lines.map((line, i) => {
                // gabung isi plain_text buat cari posisi `:`
                const fullLine = line.map((t) => t.plain_text).join('');
                const colonPos = fullLine.indexOf(':');

                if (colonPos === -1) {
                  return (
                    <div key={i} className="grid grid-cols-[120px_1fr] gap-x-2">
                      <span className="col-span-2">
                        <NotionText textItems={line} />
                      </span>
                    </div>
                  );
                }

                // split jadi label & content berdasarkan posisi colon
                let currentCount = 0;
                const label: TextRichTextItemResponse[] = [];
                const content: TextRichTextItemResponse[] = [];

                line.forEach((t) => {
                  const len = t.plain_text.length;
                  if (currentCount + len <= colonPos) {
                    label.push(t);
                  } else if (currentCount >= colonPos + 1) {
                    content.push(t);
                  } else {
                    const cutIndex = colonPos - currentCount;
                    if (cutIndex > 0) {
                      label.push({
                        ...t,
                        text: { ...t.text, content: t.text.content.slice(0, cutIndex) },
                        plain_text: t.plain_text.slice(0, cutIndex),
                      });
                    }
                    if (cutIndex + 1 < len) {
                      content.push({
                        ...t,
                        text: { ...t.text, content: t.text.content.slice(cutIndex + 1) },
                        plain_text: t.plain_text.slice(cutIndex + 1),
                      });
                    }
                  }
                  currentCount += len;
                });

                return (
                  <div key={i} className="grid grid-cols-[120px_1fr] gap-x-2">
                    <span className="text-xs font-medium whitespace-nowrap">
                      <NotionText textItems={label} />
                    </span>
                    <span className="text-xs">
                      <NotionText textItems={content} />
                    </span>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      );

    default:
      return (
        <>❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})</>
      );
  }
};

const NotionText = ({ textItems }: { textItems: TextRichTextItemResponse[] }) => {
  if (!textItems) {
    return null;
  }

  return (
    <>
      {textItems.map((textItem) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = textItem;
        return (
          <span
            key={text.content}
            className={clsx({
              'font-bold': bold,
              'font-mono font-semibold bg-zinc-600 text-zinc-200 px-1 py-0.5 m-1 rounded-md': code,
              italic: italic,
              'line-through': strikethrough,
              underline: underline,
            })}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
          </span>
        );
      })}
    </>
  );
};
