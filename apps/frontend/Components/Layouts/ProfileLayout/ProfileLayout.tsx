import Image from 'next/image';
import classes from './profilelayout.module.scss';
import Button from '@/Components/Button/Button';
import Typography from '@/Components/Typography/Typography';
import { envConfig } from '@/envConfig';

export interface IProfileLayout {
  profileSrc: string;
  name: string;
  professions: string[];
  workplace?: string;
  expirence?: string;
  cases?: string;
  contact: string;
}
function ProfileLayout({
  profileSrc,
  name,
  professions,
  workplace,
  expirence,
  cases,
  contact,
}: IProfileLayout) {
  return (
    <>
      <div className={classes['container']}>
        <div className={classes['container__picture']}>
          <Image
            src={
              envConfig.STORAGE_BUCKET_URL +
              `/assets/profile/large/${profileSrc}`
            }
            alt="Profile Picture"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={classes['container__details']}>
          <div>
            <Typography
              component="h2"
              vairent="secondary"
              color="--color-accent"
              style={{ fontWeight: 'bold' }}
              text={'Advocate, ' + name}
            />

            <Typography
              component="h4"
              vairent="secondary"
              text={professions?.join(', ')}
            />

            <Typography
              component="p"
              vairent="p"
              text={workplace}
              color="var(--color-primary)"
            />
          </div>
          <Button
            customClasses={[classes['mg-top']]}
            varient="primary"
            // text="Contact Lawyer"
          >
            <a
              href={`phone:${contact}`}
              style={{ textDecoration: 'none', color: 'currentcolor' }}
            >
              Contact Lawyer
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
