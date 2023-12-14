"use client"

import { IconType } from "react-icons";

interface CategortInputProps {
    onClick: (value: string) => void;
    selected?: boolean;
    label: string
    icon: IconType
}
const CategoryInput: React.FC<CategortInputProps> = ({
    onClick,
    selected,
    label,
    icon: Icon
}) => {
  return (
    <div onClick={() => onClick(label)}
    className={`
    flex
    flex-col
    rounded-xl
    border-2
    hover:border-black
    transition
    cursor-pointer
    p-4
    gap-3
    ${selected ? 'border-black' : 'border-neutral-200'}
    `}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  )
}

export default CategoryInput
