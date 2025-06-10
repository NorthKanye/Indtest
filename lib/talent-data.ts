export interface TalentProfile {
  slug: string
  name: string
  category: string
  location: string
  heritage: string
  bio: string
  stats: {
    height?: string
    bust?: string
    waist?: string
    hips?: string
    dress?: string
    shoe?: string
    hair: string
    eyes: string
  }
  portfolio: {
    id: string
    title: string
    type: string
    image: string
  }[]
  experience: string[]
  specialties: string[]
  languages: string[]
  profileImage: string
  coverImage: string
}

export const talentData: TalentProfile[] = [
  {
    slug: "maya-williams",
    name: "Maya Williams",
    category: "Fashion & Editorial Model",
    location: "Sydney, NSW",
    heritage: "Wiradjuri Nation",
    bio: "Maya is a rising star in the Australian fashion industry, known for her striking features and natural grace. With deep connections to her Wiradjuri heritage, she brings authenticity and cultural pride to every project. Maya has worked with leading Australian designers and international brands, always ensuring respectful representation of Indigenous culture.",
    stats: {
      height: "175cm",
      bust: "86cm",
      waist: "61cm",
      hips: "89cm",
      dress: "8-10",
      shoe: "9",
      hair: "Dark Brown",
      eyes: "Brown",
    },
    portfolio: [
      {
        id: "1",
        title: "Vogue Australia Editorial",
        type: "Editorial",
        image: "/placeholder.svg?height=400&width=300&text=Editorial1",
      },
      {
        id: "2",
        title: "Country Road Campaign",
        type: "Commercial",
        image: "/placeholder.svg?height=400&width=300&text=Commercial1",
      },
      {
        id: "3",
        title: "Melbourne Fashion Week",
        type: "Runway",
        image: "/placeholder.svg?height=400&width=300&text=Runway1",
      },
      {
        id: "4",
        title: "Indigenous Fashion Show",
        type: "Cultural",
        image: "/placeholder.svg?height=400&width=300&text=Cultural1",
      },
    ],
    experience: [
      "Vogue Australia",
      "Country Road",
      "David Jones",
      "Melbourne Fashion Week",
      "Indigenous Fashion Projects",
    ],
    specialties: ["High Fashion", "Commercial", "Cultural Campaigns", "Runway"],
    languages: ["English", "Basic Wiradjuri"],
    profileImage: "/placeholder.svg?height=600&width=400&text=Maya",
    coverImage: "/placeholder.svg?height=400&width=800&text=Maya+Cover",
  },
  {
    slug: "daniel-thompson",
    name: "Daniel Thompson",
    category: "Film & Television Actor",
    location: "Melbourne, VIC",
    heritage: "Yolŋu People",
    bio: "Daniel is an accomplished actor with extensive experience in both film and television. Born in Arnhem Land and raised between traditional and contemporary worlds, he brings depth and authenticity to his performances. Daniel is passionate about telling Indigenous stories and has been recognized for his powerful portrayals of complex characters.",
    stats: {
      height: "183cm",
      hair: "Black",
      eyes: "Dark Brown",
    },
    portfolio: [
      {
        id: "1",
        title: "The Dry - Feature Film",
        type: "Film",
        image: "/placeholder.svg?height=400&width=300&text=Film1",
      },
      {
        id: "2",
        title: "Redfern Now - ABC",
        type: "Television",
        image: "/placeholder.svg?height=400&width=300&text=TV1",
      },
      {
        id: "3",
        title: "Mystery Road Series",
        type: "Television",
        image: "/placeholder.svg?height=400&width=300&text=TV2",
      },
      {
        id: "4",
        title: "Theatre Production",
        type: "Stage",
        image: "/placeholder.svg?height=400&width=300&text=Stage1",
      },
    ],
    experience: [
      "ABC Television",
      "SBS Productions",
      "Independent Films",
      "Sydney Theatre Company",
      "Black Swan State Theatre",
    ],
    specialties: ["Drama", "Indigenous Stories", "Character Acting", "Voice Work"],
    languages: ["English", "Yolŋu Matha"],
    profileImage: "/placeholder.svg?height=600&width=400&text=Daniel",
    coverImage: "/placeholder.svg?height=400&width=800&text=Daniel+Cover",
  },
  {
    slug: "sarah-johnson",
    name: "Sarah Johnson",
    category: "Commercial Model",
    location: "Brisbane, QLD",
    heritage: "Kamilaroi Nation",
    bio: "Sarah specializes in commercial modeling and brand partnerships, with a focus on lifestyle and wellness campaigns. Her warm personality and professional approach have made her a favorite among clients seeking authentic representation. Sarah is also a qualified cultural consultant, ensuring brands approach Indigenous partnerships with respect and understanding.",
    stats: {
      height: "168cm",
      bust: "84cm",
      waist: "64cm",
      hips: "91cm",
      dress: "10-12",
      shoe: "8",
      hair: "Black",
      eyes: "Brown",
    },
    portfolio: [
      {
        id: "1",
        title: "Tourism Australia",
        type: "Commercial",
        image: "/placeholder.svg?height=400&width=300&text=Tourism1",
      },
      {
        id: "2",
        title: "Wellness Brand Campaign",
        type: "Lifestyle",
        image: "/placeholder.svg?height=400&width=300&text=Wellness1",
      },
      {
        id: "3",
        title: "Banking Commercial",
        type: "Corporate",
        image: "/placeholder.svg?height=400&width=300&text=Banking1",
      },
      {
        id: "4",
        title: "Cultural Tourism",
        type: "Cultural",
        image: "/placeholder.svg?height=400&width=300&text=Cultural2",
      },
    ],
    experience: ["Tourism Australia", "Commonwealth Bank", "Qantas", "Woolworths", "Cultural Tourism Projects"],
    specialties: ["Commercial", "Lifestyle", "Corporate", "Cultural Consultation"],
    languages: ["English", "Basic Kamilaroi"],
    profileImage: "/placeholder.svg?height=600&width=400&text=Sarah",
    coverImage: "/placeholder.svg?height=400&width=800&text=Sarah+Cover",
  },
  {
    slug: "marcus-davis",
    name: "Marcus Davis",
    category: "Cultural Consultant & Actor",
    location: "Perth, WA",
    heritage: "Noongar People",
    bio: "Marcus combines his acting talents with deep cultural knowledge as a respected cultural consultant. He works with production companies to ensure authentic and respectful representation of Indigenous culture in film, television, and advertising. Marcus is also an accomplished storyteller and educator.",
    stats: {
      height: "178cm",
      hair: "Black",
      eyes: "Brown",
    },
    portfolio: [
      {
        id: "1",
        title: "Cultural Consultation - Major Film",
        type: "Consultation",
        image: "/placeholder.svg?height=400&width=300&text=Consult1",
      },
      {
        id: "2",
        title: "Documentary Narration",
        type: "Voice",
        image: "/placeholder.svg?height=400&width=300&text=Voice1",
      },
      {
        id: "3",
        title: "Educational Content",
        type: "Educational",
        image: "/placeholder.svg?height=400&width=300&text=Education1",
      },
      {
        id: "4",
        title: "Corporate Training",
        type: "Corporate",
        image: "/placeholder.svg?height=400&width=300&text=Corporate1",
      },
    ],
    experience: [
      "Screen Australia Projects",
      "ABC Documentary Unit",
      "Corporate Cultural Training",
      "Educational Institutions",
      "Tourism WA",
    ],
    specialties: ["Cultural Consultation", "Storytelling", "Education", "Voice Work"],
    languages: ["English", "Noongar"],
    profileImage: "/placeholder.svg?height=600&width=400&text=Marcus",
    coverImage: "/placeholder.svg?height=400&width=800&text=Marcus+Cover",
  },
]

export function getTalentBySlug(slug: string): TalentProfile | undefined {
  return talentData.find((talent) => talent.slug === slug)
}

export function getAllTalent(): TalentProfile[] {
  return talentData
}
