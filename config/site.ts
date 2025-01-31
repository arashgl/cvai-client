export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Resume Analyzer',
  description:
    'Analyze your resume, generate cover letters, and compare with job descriptions using AI.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Analyze Resume',
      href: '/analyze',
    },
    {
      label: 'Cover Letter',
      href: '/cover-letter',
    },
    {
      label: 'Compare',
      href: '/compare',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'My Resumes',
      href: '/my-resumes',
    },
    {
      label: 'Cover Letters',
      href: '/my-cover-letters',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help',
      href: '/help',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
};
