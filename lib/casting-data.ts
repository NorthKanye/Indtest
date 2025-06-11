export interface CastingCall {
  id: string
  title: string
  type: "Film" | "Television" | "Commercial" | "Fashion" | "Theatre" | "Music Video" | "Documentary"
  company: string
  location: string
  datePosted: string
  deadline: string
  description: string
  requirements: {
    gender?: string[]
    ageRange: string
    ethnicity?: string[]
    skills?: string[]
    experience?: string
    physicalRequirements?: string[]
  }
  compensation: string
  contactEmail: string
  status: "Open" | "Closing Soon" | "Closed"
  featured: boolean
  image: string
}

export const castingCalls: CastingCall[] = [
  {
    id: "cc-001",
    title: "Lead Role - Indigenous Drama Series",
    type: "Television",
    company: "ABC Television",
    location: "Sydney, NSW",
    datePosted: "2024-01-15",
    deadline: "2024-02-15",
    description:
      "Seeking a talented Indigenous Australian actor for the lead role in a new drama series exploring contemporary Indigenous stories. This is a career-defining opportunity for the right performer.",
    requirements: {
      gender: ["Male", "Female"],
      ageRange: "25-35",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      skills: ["Acting", "Improvisation"],
      experience: "Professional acting experience preferred",
      physicalRequirements: ["Must be comfortable with emotional scenes", "Physical fitness required for some scenes"],
    },
    compensation: "$50,000 - $80,000 per season",
    contactEmail: "casting@abc.net.au",
    status: "Open",
    featured: true,
    image: "/indig.png?height=300&width=400&text=TV+Drama",
  },
  {
    id: "cc-002",
    title: "Tourism Australia Campaign",
    type: "Commercial",
    company: "Tourism Australia",
    location: "Multiple locations across Australia",
    datePosted: "2024-01-20",
    deadline: "2024-02-10",
    description:
      "National tourism campaign showcasing the beauty and culture of Australia. Looking for authentic Indigenous voices to represent our diverse communities.",
    requirements: {
      gender: ["Male", "Female", "Non-binary"],
      ageRange: "18-65",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      skills: ["Natural on-camera presence", "Storytelling"],
      experience: "No experience necessary - authenticity is key",
    },
    compensation: "$15,000 - $25,000",
    contactEmail: "casting@tourism.gov.au",
    status: "Closing Soon",
    featured: true,
    image: "/tourism.png?height=300&width=400&text=Tourism+Campaign",
  },
  {
    id: "cc-003",
    title: "Indigenous Fashion Week Runway",
    type: "Fashion",
    company: "Indigenous Fashion Week",
    location: "Melbourne, VIC",
    datePosted: "2024-01-10",
    deadline: "2024-01-30",
    description:
      "Runway models needed for Indigenous Fashion Week Melbourne. Celebrating Indigenous designers and cultural fashion.",
    requirements: {
      gender: ["Male", "Female", "Non-binary"],
      ageRange: "16-30",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      physicalRequirements: ["Height: 5'8\" - 6'2\"", "Confident runway walk"],
    },
    compensation: "$2,000 - $5,000",
    contactEmail: "models@indigenousfashionweek.com.au",
    status: "Closing Soon",
    featured: false,
    image: "/placeholder.svg?height=300&width=400&text=Fashion+Week",
  },
  {
    id: "cc-004",
    title: "Historical Documentary - Voice Over",
    type: "Documentary",
    company: "SBS Documentary Unit",
    location: "Remote recording available",
    datePosted: "2024-01-25",
    deadline: "2024-03-01",
    description:
      "Seeking Indigenous voice artists for a documentary about pre-colonial Australia. Must have strong storytelling abilities and cultural knowledge.",
    requirements: {
      gender: ["Male", "Female"],
      ageRange: "30-60",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      skills: ["Voice acting", "Narration", "Cultural knowledge"],
      experience: "Voice over experience preferred",
    },
    compensation: "$5,000 - $10,000",
    contactEmail: "documentary@sbs.com.au",
    status: "Open",
    featured: false,
    image: "/placeholder.svg?height=300&width=400&text=Documentary",
  },
  {
    id: "cc-005",
    title: "Banking Commercial - Family Campaign",
    type: "Commercial",
    company: "Commonwealth Bank",
    location: "Brisbane, QLD",
    datePosted: "2024-01-18",
    deadline: "2024-02-05",
    description:
      "Heartwarming commercial about family and community. Looking for a real Indigenous family or actors who can portray authentic family dynamics.",
    requirements: {
      gender: ["Male", "Female"],
      ageRange: "25-55 (parents), 8-16 (children)",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      skills: ["Natural acting", "Comfortable with children"],
      experience: "Some commercial experience preferred",
    },
    compensation: "$8,000 - $15,000",
    contactEmail: "casting@commbank.com.au",
    status: "Open",
    featured: false,
    image: "/placeholder.svg?height=300&width=400&text=Banking+Commercial",
  },
  {
    id: "cc-006",
    title: "Independent Film - Supporting Roles",
    type: "Film",
    company: "Blackfella Films",
    location: "Alice Springs, NT",
    datePosted: "2024-01-12",
    deadline: "2024-02-20",
    description:
      "Independent film exploring themes of connection to country. Multiple supporting roles available for Indigenous actors of all experience levels.",
    requirements: {
      gender: ["Male", "Female", "Non-binary"],
      ageRange: "18-70",
      ethnicity: ["Aboriginal Australian", "Torres Strait Islander"],
      skills: ["Acting", "Willingness to learn"],
      experience: "All experience levels welcome",
    },
    compensation: "$3,000 - $12,000 per role",
    contactEmail: "casting@blackfellafilms.com.au",
    status: "Open",
    featured: false,
    image: "/placeholder.svg?height=300&width=400&text=Independent+Film",
  },
]

export function getAllCastingCalls(): CastingCall[] {
  return castingCalls.sort((a, b) => {
    // Sort by featured first, then by date posted (newest first)
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
  })
}

export function getFeaturedCastingCalls(): CastingCall[] {
  return castingCalls.filter((call) => call.featured)
}

export function getCastingCallById(id: string): CastingCall | undefined {
  return castingCalls.find((call) => call.id === id)
}

export function getCastingCallsByType(type: CastingCall["type"]): CastingCall[] {
  return castingCalls.filter((call) => call.type === type)
}
