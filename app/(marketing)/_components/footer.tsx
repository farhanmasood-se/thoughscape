import { Logo } from './logo';

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground text-sm">
        2024 © Thoughscape. All rights reserved.
      </div>
    </div>
  );
};
