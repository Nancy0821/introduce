import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'jakus.superdev@gmail.com',
    href: 'mailto:jakus.superdev@gmail.com',
  },
  {
    social: 'github',
    link: 'seto0125',
    href: 'https://github.com/seto0125',
  },
  {
    social: 'skype',
    link: 'live:.cid.dd974db1f76f2e87',
    href: 'https://join.skype.com/invite/NIbYuOVEnwk2'
  },
  {
    social: 'discord',
    link: 'Good@4075',
    href: 'https://discord.com/Good@4075',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
