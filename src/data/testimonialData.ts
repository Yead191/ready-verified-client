export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jasmin",
    position: "Trainee",
    company: "Auto Tech",
    quote:
      "I got my first interview in a week the ReadyScore and interview prompts made it click.",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    position: "Manager",
    company: "Ops",
    quote:
      "The Culture Map helped me hire to reality, not a wish list.",
  },
  {
    id: "3",
    name: "Kim",
    position: "Manager",
    company: "Career Services",
    quote:
      "Our grads place faster when employers see behaviors.",
  },
  // {
  //   id: "4",
  //   name: "David Thompson",
  //   position: "Data Analyst",
  //   company: "Analytics Pro",
  //   quote:
  //     "The certification process was thorough and professional. Having these credentials on my resume has definitely made me stand out in job applications and interviews.",
  // },
  // {
  //   id: "5",
  //   name: "Emily Johnson",
  //   position: "Project Manager",
  //   company: "Innovation Labs",
  //   quote:
  //     "The self-paced learning approach worked perfectly for my busy schedule. The assessments were challenging yet fair, and the results gave me confidence in my abilities.",
  // },
];
