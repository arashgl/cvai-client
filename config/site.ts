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
      href: '/services/analyze',
    },
    {
      label: 'Cover Letter',
      href: '/services/cover-letter',
    },
    {
      label: 'Compare',
      href: '/services/compare',
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
