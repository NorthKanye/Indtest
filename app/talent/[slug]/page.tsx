import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import { getTalentBySlug } from "@/lib/talent-data"
import { ScrollHeader } from "@/components/scroll-header"

interface TalentPageProps {
  params: {
    slug: string
  }
}

export default function TalentPage({ params }: TalentPageProps) {
  const { slug } = params
  const talent = getTalentBySlug(slug)

  if (!talent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Transparent Scroll Header */}
      <ScrollHeader />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <Image
          src={talent.coverImage || "/placeholder.svg"}
          alt={`${talent.name} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Image and Stats */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Image
                src={talent.profileImage || "/placeholder.svg"}
                alt={talent.name}
                width={400}
                height={600}
                className="w-full rounded-lg object-cover mb-6"
              />

              {/* Contact CTA */}
              <Card className="mb-6">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-gray-900 mb-4">Interested in booking {talent.name.split(" ")[0]}?</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Request Callback
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 mb-4">MEASUREMENTS</h3>
                  <div className="space-y-2 text-sm">
                    {talent.stats.height && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Height:</span>
                        <span className="font-medium">{talent.stats.height}</span>
                      </div>
                    )}
                    {talent.stats.bust && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bust:</span>
                        <span className="font-medium">{talent.stats.bust}</span>
                      </div>
                    )}
                    {talent.stats.waist && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Waist:</span>
                        <span className="font-medium">{talent.stats.waist}</span>
                      </div>
                    )}
                    {talent.stats.hips && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Hips:</span>
                        <span className="font-medium">{talent.stats.hips}</span>
                      </div>
                    )}
                    {talent.stats.dress && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dress:</span>
                        <span className="font-medium">{talent.stats.dress}</span>
                      </div>
                    )}
                    {talent.stats.shoe && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shoe:</span>
                        <span className="font-medium">{talent.stats.shoe}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hair:</span>
                      <span className="font-medium">{talent.stats.hair}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Eyes:</span>
                      <span className="font-medium">{talent.stats.eyes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-8">
              <h1 className="text-4xl font-light text-gray-900 mb-2">{talent.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  {talent.category}
                </Badge>
                <Badge variant="outline">{talent.location}</Badge>
                <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                  {talent.heritage}
                </Badge>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{talent.bio}</p>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {talent.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {talent.languages.map((language, index) => (
                  <Badge key={index} variant="secondary">
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Recent Experience</h2>
              <ul className="space-y-2">
                {talent.experience.map((exp, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6">Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {talent.portfolio.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-[3/4]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {item.type}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-4">MODELS</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    New Faces
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Children
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-4">INFORMATION</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Cultural Values
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-4">HEAD OFFICE</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  123 Collins Street
                  <br />
                  Melbourne VIC 3000
                  <br />
                  Australia
                </p>
                <p>
                  Phone: +61 3 9000 0000
                  <br />
                  Email: info@indigenoustalent.com.au
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-4">CONNECT</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
