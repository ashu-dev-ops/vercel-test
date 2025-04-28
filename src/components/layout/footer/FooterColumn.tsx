'use client';

import * as React from 'react';
import { FooterLinkBtn } from './FooterLinkBtn';
import { cn } from '@/lib/utils';

interface FooterColumnProps {
  title: string;
  links: Array<{ linkName: string; path: string }>;
  className?: string;
  customContent?: React.ReactNode;
}

export function FooterColumn({ title, links, className, customContent }: FooterColumnProps) {
  return (
    <div className={cn("min-w-[200px] mt-3", className)}>
      <h3 className=" text-base font-semibold text-black text-center sm:text-left ">
        {title}
      </h3>
      <ul className="pl-2">
        {links.map((link, idx) => (
          <li key={idx} className="list-none text-center sm:text-left">
            <FooterLinkBtn  text={link.linkName} path={link.path} />
          </li>
        ))}
      </ul>
      {customContent && (
        <div className="">
          {customContent}
        </div>
      )}
    </div>
  );
}
