"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { TeamMember } from "@/types/team";
import { Card, CardContent } from "@/components/ui/card";

interface TeamCardProps {
  member: TeamMember;
  onClick: (member: TeamMember) => void;
}

export function TeamCard({ member, onClick }: TeamCardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 py-0",
        "border-border/50 hover:border-primary/50"
      )}
      onClick={() => onClick(member)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={533}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </CardContent>
    </Card>
  );
}
