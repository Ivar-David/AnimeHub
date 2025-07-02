import type { SVGProps } from 'react';

export function GrimoireLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
      <path
        stroke="none"
        fill="currentColor"
        d="M14.5 12.5C14.5 14.433 13.433 16 12 16C10.567 16 9.5 14.433 9.5 12.5C9.5 10.567 10.567 9 12 9C13.433 9 14.5 10.567 14.5 12.5Z"
      />
    </svg>
  );
}
