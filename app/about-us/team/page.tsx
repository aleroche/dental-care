"use client";

import { useState } from "react";
import Header from "@/components/shared/header";
import { TeamMember, TEAM_MEMBERS } from "@/types/team";
import { TeamGrid } from "@/components/team/TeamGrid";
import { TeamModal } from "@/components/team/TeamModal";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 200);
  };

  return (
    <main>

      <section className="bg-white dark:bg-slate-900 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10">
            <div className="">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Meet the
                <br />
                <span className="text-[#00B894] dark:text-[#00D9A5]">MiraMar Family Dental Team</span>
              </h1>
              <p className="text-[#475569] dark:text-[#94A3B8] text-lg leading-relaxed">
                Our team is made up of doctors and dental assistants who are committed to the values of the clinic and Dr. Keyttia. Their dedication and professionalism are reflected in the daily care they provide to our patients. Together, we work to ensure the best experience and results for every person who trusts us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-slate-800 py-12 md:py-16">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10" style={{ animationDelay: "200ms" }}>
            <TeamGrid members={TEAM_MEMBERS} onMemberClick={handleMemberClick} />
          </div>
        </div>
      </section>

      <TeamModal
        member={selectedMember}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
