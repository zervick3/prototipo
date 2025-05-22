import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const TikTokIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.5 3.5c1 .8 2.1 1.3 3.5 1.4v3.1c-1.3 0-2.5-.3-3.5-.9v6.3c0 4-2.7 6.4-6.2 6.4-3.2 0-5.3-2.4-5.3-5.4 0-3.1 2.3-5.3 5.6-5.3.2 0 .4 0 .6.1v3.2c-.2-.1-.4-.1-.7-.1-1.4 0-2.4 1-2.4 2.4 0 1.5 1 2.5 2.4 2.5 1.6 0 2.7-1.3 2.7-3.1V2h3.3v1.5z" />
    </svg>
  )
);

TikTokIcon.displayName = "TikTokIcon";
