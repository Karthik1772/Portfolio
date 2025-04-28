'use client';

import Image from 'next/image';
import { User, Bird } from "lucide-react";

interface CoordinatorCardProps {
  title: string
  icon: React.ReactNode
  iconColor: string
  bulletPoints: string[]
}

const CoordinatorCard = ({ title, icon, iconColor, bulletPoints }: CoordinatorCardProps) => {
  return (
    <div className="bg-muted dark:bg-muted rounded-lg shadow-sm p-6 text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconColor}`}>{icon}</div>
        <h2 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h2>
      </div>
      <div className="space-y-2">
        {bulletPoints.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="text-gray-500 mr-2">•</span>
            <p className="text-gray-600 dark:text-white">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-background w-full">
      <div className="container mx-auto px-4">
        {/* About Title */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">
            Hello, I'm Karthik S Kashyap, a student of Electronics and Communication Engineering from Alva's Institute of
            Engineering & Technology (VTU), Karnataka. I'm passionate about software development, open-source and
            problem-solving.
          </p>
        </div>

        {/* Image + Content side-by-side */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image */}
          <div className="relative w-full max-w-sm">
            <Image
              src="/img/my-profile-img.jpg"
              alt="Karthik S Kashyap"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about learning, problem-solving, and applying my skills towards impactful projects. Whether
              it is coding, mentoring, competing, or learning about new technologies, I'm a challenge-seeker.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 w-full">
              <div>
                <ul className="space-y-4">
                  <InfoItem label="Name" value="Karthik S Kashyap" />
                  <InfoItem label="Age" value="21" />
                  <InfoItem label="Phone" value="+91 9945681174" />
                  <InfoItem label="City" value="Mysore, Karnataka, India" />
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <InfoItem label="Degree" value="Bachelor of Engineering in E&C" />
                  <InfoItem label="Email" value="karthikamma2004@gmail.com" />
                  <InfoItem label="Website" value="karthik-s-kashyap.vercel.app" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coordinator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-4">
        <CoordinatorCard
          title="Edwin Lab Coordinator"
          icon={<User className="w-5 h-5 text-black" />}
          iconColor="bg-purple-200"
          bulletPoints={[
            "Led initiatives in open-source development",
            "Organized STEM sessions for over 100 Scouts and Guides",
          ]}
        />
        <CoordinatorCard
          title="CHIRP Club Coordinator"
          icon={<Bird className="w-5 h-5 text-black" />}
          iconColor="bg-green-200"
          bulletPoints={[
            "Documented bird species and habitats",
            "Delivered talk to over 3000 students at the International Cultural Jamboree",
          ]}
        />
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <li className={`flex items-center gap-2 w-full flex-wrap ${label === 'Email' ? 'break-all' : ''}`}>
      <span className="font-semibold">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </li>
  );
}
