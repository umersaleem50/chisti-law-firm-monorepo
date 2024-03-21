'use client';
import { ReactHTMLElement, useState } from 'react';
import classes from './Checkbox.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface ICheckbox {
  text: string;
  id: string | undefined;
  isChecked?: boolean;
  onClick?: () => void;
  handleCheckbox: any;
}

const Checkbox = ({
  text,
  id,
  isChecked = false,
  onClick = () => {
    return;
  },
  handleCheckbox,
}: ICheckbox) => {
  const [isActive, setIsActive] = useState(isChecked);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // const onSelect = (event: any, selectedValue: any) => {
  //   // now you got a read/write object
  //   const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
  //   console.log(current);

  //   // update as necessary
  //   const value = event.target.id.trim();

  //   if (!value) {
  //     current.delete(selectedValue);
  //   } else {
  //     current.set(selectedValue, event.target.value);
  //   }

  //   // cast to string
  //   const search = current.toString();
  //   // or const query = `${'?'.repeat(search.length && 1)}${search}`;
  //   const query = search ? `?${search}` : "";

  //   router.push(`${pathname}${query}`);
  // };

  return (
    <div
      className={classes['checkbox']}
      onClick={() => {
        setIsActive((prev) => !prev);
        onClick();
      }}
    >
      <input
        type="checkbox"
        className={[
          classes['checkbox__input'],
          isActive ? classes['checkbox__input--active'] : '',
        ].join(' ')}
        id={id}
        value={text}
        onChange={handleCheckbox}
        max={1}
      />

      <label className={classes['checkbox__label']} htmlFor={id}>
        {text}
      </label>
    </div>
  );
};
export default Checkbox;
