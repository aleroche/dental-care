import Image from "next/image";
import { ArrowRight, Bandage, Syringe, Smile, Baby, Maximize2, Stethoscope } from "lucide-react";
import { DigitalXRayBenefits } from "@/components/sections/digital-xray-benefits-section";
import { DigitalXRaySafety } from "@/components/sections/digital-xray-safety-section";

export default function DentalRadiographsPage() {
  return (
    <main>
      {/* Header Section - Blue-50 background */}
      <section className="bg-[#5EC8F2] min-h-40 mt-16 flex items-center">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up px-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
              Discover the Benefits of Digital Dental X-rays in Katy, TX
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section - White background */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="text-[#475569] text-lg leading-relaxed space-y-4 px-10">
              <p>
                At MiraMar Family Dental, the safety and comfort of your family are top priorities, which is why we proudly use advanced digital dental X-rays. This state-of-the-art system requires significantly less radiation than traditional film-based X-rays, making it a safer, faster, and more effective diagnostic tool for patients.
              </p>
              <p>
                Want to learn more or book your visit? Call us at 832-779-8444 or schedule online today. We offer FREE insurance verification and are always happy to answer your questions!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* What are Digital Dental X-rays? Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] font-bold mb-6 px-10">
              What are Digital Dental X-rays?
            </h2>
            <div className="text-[#475569] text-lg leading-relaxed space-y-4 px-10">
              <p>
                Digital X-rays are the modern evolution of dental radiography. Instead of using traditional film to capture images, a small digital sensor captures high-resolution images of your teeth, jaw, and surrounding structures. These images are instantly displayed on a screen, eliminating long wait times and allowing for quicker diagnoses and treatment planning.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ask us about financing Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="grid md:grid-cols-2 gap-8 items-center px-10">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="https://miramarfamilydental.com/wp-content/uploads/2024/10/Misc-Web-Asset-7.png"
                  alt="Financing options at MiraMar Family Dental"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] font-bold">
                  Ask us about financing
                </h2>
                <p className="text-[#475569] text-lg leading-relaxed">
                  MiraMar Family Dental has partnered with the Cherry financing platform to make the cost of dental implants and other procedures more manageable, allowing you to break payments into monthly installments. Some patients may even qualify for 0% APR options.
                </p>
                <a
                  href="https://miramarfamilydental.com/patients/financing-plans/"
                  className="inline-block bg-[#5EC8F2] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#4BB8E0] transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why are Dental X-rays Important? Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] font-bold mb-4 px-10">
              Why are Dental X-rays Important?
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-10 px-10">
              Dental X-rays – also called radiographs – allow dentists to see beneath the surface of your teeth and gums. Having X-rays performed regularly is part of the standard of care and is essential for identifying issues that aren't apparent during a visual examination, such as:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Bandage className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Decay between teeth</h3>
                <p className="text-[#475569] text-sm">X-rays can detect cavities hidden between teeth that are not visible during a visual exam.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Syringe className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Infections around the roots</h3>
                <p className="text-[#475569] text-sm">X-rays reveal infections and abscesses that may be developing at the root of the tooth.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Smile className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Bone loss from gum disease</h3>
                <p className="text-[#475569] text-sm">X-rays show the bone level around teeth, helping detect bone loss from periodontal disease.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Baby className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Developmental issues in children</h3>
                <p className="text-[#475569] text-sm">X-rays help monitor the development of children's teeth and jaw, identifying potential issues early.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Maximize2 className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Impacted or missing teeth</h3>
                <p className="text-[#475569] text-sm">X-rays can identify teeth that are stuck beneath the gum line or missing permanently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#5EC8F2]/10 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-[#5EC8F2]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">Cysts, tumors, or abnormalities</h3>
                <p className="text-[#475569] text-sm">X-rays help detect abnormal growths or lesions in the jawbone or soft tissues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Types of Digital X-rays We Use Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] font-bold mb-4 px-10">
              Types of Digital X-rays We Use
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-10 px-10">
              At MiraMar Family Dental, we use a variety of X-ray types to provide the most complete picture of your oral health:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
              <div className="bg-white border-2 border-[#5EC8F2]/30 rounded-xl p-6 hover:border-[#5EC8F2] transition-colors duration-200">
                <h3 className="font-bold text-[#1E293B] text-xl mb-3">Bitewing X-rays</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Show the crowns of upper and lower teeth and are ideal for spotting cavities between teeth. This type of X-ray is also used to look for abnormalities in bone and to check the occlusal (bite) surfaces of the teeth.
                </p>
              </div>
              <div className="bg-white border-2 border-[#5EC8F2]/30 rounded-xl p-6 hover:border-[#5EC8F2] transition-colors duration-200">
                <h3 className="font-bold text-[#1E293B] text-xl mb-3">Periapical X-rays</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Capture the entire tooth from crown to root to check for infections or bone issues.
                </p>
              </div>
              <div className="bg-white border-2 border-[#5EC8F2]/30 rounded-xl p-6 hover:border-[#5EC8F2] transition-colors duration-200">
                <h3 className="font-bold text-[#1E293B] text-xl mb-3">Occlusal X-rays</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Help visualize developing teeth, often used in pediatric dentistry.
                </p>
              </div>
              <div className="bg-white border-2 border-[#5EC8F2]/30 rounded-xl p-6 hover:border-[#5EC8F2] transition-colors duration-200">
                <h3 className="font-bold text-[#1E293B] text-xl mb-3">Panoramic X-rays</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Offer a full view of the jaw, sinuses, and surrounding structures.
                </p>
              </div>
              <div className="bg-white border-2 border-[#5EC8F2]/30 rounded-xl p-6 hover:border-[#5EC8F2] transition-colors duration-200">
                <h3 className="font-bold text-[#1E293B] text-xl mb-3">Cephalometric X-rays</h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  Used primarily in orthodontics to assess jaw and facial structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens if You Skip Dental X-rays? Section */}
      <section className="bg-[#5EC8F2]/5 py-16 md:py-20">
        <div className="container-wide w-full">
          <div className="animate-fade-in-up" style={{ animationDelay: "700ms" }}>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1E293B] font-bold mb-4 px-10">
              What Happens if You Skip Dental X-rays?
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8 px-10">
              The state licensing board of Texas requires patients to undergo regular X-ray examinations. Therefore, treatments may not be offered until radiographs are performed. Additionally, delaying or avoiding X-rays can lead to undetected dental problems, such as:
            </p>
            <div className="space-y-3 px-10 max-w-3xl">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#5EC8F2] mt-1 flex-shrink-0" />
                <p className="text-[#475569]">Cavities that worsen over time and require more invasive treatment.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#5EC8F2] mt-1 flex-shrink-0" />
                <p className="text-[#475569]">Gum disease leads to bone loss and tooth mobility (loose teeth).</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#5EC8F2] mt-1 flex-shrink-0" />
                <p className="text-[#475569]">Abscesses or infections can cause pain, swelling, and/or additional health risks.</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#5EC8F2] mt-1 flex-shrink-0" />
                <p className="text-[#475569]">Tooth loss, if decay or infection spreads too far.</p>
              </div>
            </div>
            <p className="text-[#1E293B] text-lg font-semibold mt-8 px-10">
              Early detection saves you time, money, and discomfort, which is why X-rays are an essential part of your dental checkup.
            </p>
          </div>
        </div>
      </section>

      <DigitalXRayBenefits />
      <DigitalXRaySafety />
    </main>
  );
}