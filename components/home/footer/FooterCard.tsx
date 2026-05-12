import React from "react";

type Props = {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  size?: number;
};

const FooterCard = ({ href, icon: Icon, size = 24 }: Props) => {
  return (
    <div className="shadow-lg h-8 w-8 flex justify-center border border-brand-50/50 items-center rounded-md">
      <a href={href} target="_blank">
        <Icon size={size} />
      </a>
    </div>
  );
};

export default FooterCard;
