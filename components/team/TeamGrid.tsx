import { TeamMember } from "@/types/team";
import { TeamCard } from "./TeamCard";

interface TeamGridProps {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
}

export function TeamGrid({ members, onMemberClick }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} onClick={onMemberClick} />
      ))}
    </div>
  );
}
