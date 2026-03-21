"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { TeamMember } from "@/types/team";


interface TeamModalProps {
  member: TeamMember | null;
  open: boolean;
  onClose: () => void;
}

export function TeamModal({ member, open, onClose }: TeamModalProps) {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden border-0 rounded-2xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[600px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl font-bold text-foreground">
                {member.name}
              </DialogTitle>
              <DialogDescription className="text-base text-primary font-medium">
                {member.role}
              </DialogDescription>
            </DialogHeader>
            <p className="text-muted-foreground leading-relaxed ">
              {member.description}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
