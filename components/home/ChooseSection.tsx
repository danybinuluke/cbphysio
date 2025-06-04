'use client';

import React from 'react';
import {
  ThumbsUp,
  Home,
  Shirt,
  Smile,
  BriefcaseMedical,
  UserCheck,
} from 'lucide-react';
import TrueFocus from '@/components/ui/truefocus';

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureData = [
  { Icon: ThumbsUp, title: 'Personalized Care', description: 'We have treatment plans designed to meet individual needs and goals.' },
  { Icon: Smile, title: 'Client-Centered Approach', description: 'Taking the time to listen to concerns and actively involving patients in their treatment plans.' },
  { Icon: Home, title: 'Experienced Team', description: 'A dedicated team of experienced and qualified physiotherapists.' },
  { Icon: BriefcaseMedical, title: 'Manual Therapy Expertise', description: 'Offering joint mobilization, soft tissue mobilization, and myofascial release.' },
  { Icon: Shirt, title: 'Latest Techniques', description: 'Utilizing the most recent technologies in physiotherapy for effective and efficient care.' },
  { Icon: UserCheck, title: 'Evidence-Based Practice', description: 'Our treatments are rooted in the latest clinical research and proven methodologies.' },
];

const ChooseSection: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-chart-2 font-medium text-sm uppercase mb-2">Why choose us</p>

          <TrueFocus
            sentence="We help you to better health"
            blurAmount={4}
            borderColor="hsl(var(--chart-2))"
            glowColor="hsla(var(--chart-2), 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {featureData.map(({ Icon, title, description }, idx) => (
            <div key={idx} className="flex items-start space-x-5 group">
              <div className="bg-chart-2 p-3 rounded-full transition-transform transform duration-300 group-hover:scale-110 group-hover:bg-chart-1">
                <Icon className="w-6 h-6 text-chart-3 transition-colors duration-300 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 font-josefin">{title}</h3>
                <p className="text-muted-foreground text-sm font-josefin">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
