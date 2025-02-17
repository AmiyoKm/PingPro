import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
interface DiscordMessageProps {
    avatarSrc : string
    avatarAlt : string;
    username : string
    timeStamp : string
    badgeText? :string
    badgeColor? : BadgeColor
    title : string
    content : Record<string , string>
}
type BadgeColor = "#43b581" | "#faa61a" | string & {}
const getBadgeStyle =(color : BadgeColor)=> {
  switch(color) {
    case "#43b581" : return "bg-green-100/10 text-green-400 ring-green-500/20";
    case "#faa61a" : return "bg-yellow-100/10 text-yellow-400 ring-yellow-500/20";
    default : return "bg-gray-100/10 text-gray-400 ring-gray-500/20";
  }
}
const DiscordMessage = ({avatarAlt , avatarSrc , content , timeStamp , title , username , badgeColor= "#43b581" , badgeText} : DiscordMessageProps) => {
  return (
    <div className='w-full flex items-start justify-start'>
        <div className='flex items-center mb-2'>
            <Image src={avatarSrc} alt={avatarAlt} width={40} height={40} className='object-cover rounded-full mr-3' />
        </div>
        <div className='w-full max-w-xl'>
          <div className='flex items-center'>
            <p className="font-semibold text-white">{username}</p>
            <span className='ml-2 px-1.5 py-0.5 text-xs font-semibold bg-brand-600 text-white rounded'>
              APP
            </span>
            <span className='text-gray-400 text-xs ml-1.5 font-normal'>{timeStamp}</span>
          </div>
          <div className='bg-[#2f3136] text-sm w-full rounded p-3 mb-4 mt-1.5'>
            <div className='flex flex-row items-center justify-between mb-2'>
              {badgeText ? <span className={cn("inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset" , getBadgeStyle(badgeColor))}>{badgeText}</span> :null}
              <p className="text-white order-1 text-base/7 font-semibold">{title}</p>
            </div>
            {Object.entries(content).map(([key ,value])=> (
              <p key={key} className='text-[#dcddde] text-sm/6'>
                <span className='text-[#b9bbbe]'>{key} : </span>{value}
              </p>
            ))}
            <p className='text-[#72767b] text-xs mt-2 flex items-center'>
              <Clock className='size-3 mr-1'/>
              {timeStamp}
            </p>
          </div>
        </div>
    </div>
  )
}

export default DiscordMessage