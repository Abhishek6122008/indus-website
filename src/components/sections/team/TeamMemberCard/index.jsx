import Image from 'next/image'
import { Linkedin } from 'lucide-react'

export function TeamMemberCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 bg-white">

      {/* Photo */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-blue-100">
        <Image
          src={member.image}
          alt={member.name}
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h3 className="font-heading font-semibold text-slate-900 text-base mb-1">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-blue-600 text-sm mb-3">
        {member.role}
      </p>

      {/* LinkedIn optional */}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-600 transition-colors"
          aria-label={`${member.name} LinkedIn`}
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}

    </div>
  )
}