import Image from 'next/image';
import Link from 'next/link';
import classes from './Button.module.scss';
export const WhatAppButton = ({ contact }: { contact: string }) => {
  return (
    <div className={classes['btnWhatsapp']}>
      <Link
        target="_blank"
        rel="noreferrer noopener"
        href={`https://wa.me/${contact}`}
        legacyBehavior
      >
        <Image
          src={'/WhatsAppButtonGreenSmall.svg'}
          alt="Chat on WhatsApp"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </div>
  );
};
