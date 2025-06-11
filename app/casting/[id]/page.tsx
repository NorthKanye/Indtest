import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Clock, Mail, DollarSign } from "lucide-react"
import { getCastingCallById } from "@/lib/casting-data"
import { ScrollHeader } from "@/components/scroll-header"

interface CastingCallPageProps {
  params: {
    id: string
  }
}

export default function CastingCallPage({ params }: CastingCallPageProps) {
  const { id } = params
  const castingCall = getCastingCallById(id)

  if (!castingCall) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-green-100 text-green-800 border-green-200"
      case "Closing Soon":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Closed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Transparent Scroll Header */}
      <ScrollHeader />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4 pt-20">
        <Link href="/casting" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Casting Calls
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80">
        <Image src={castingCall.image || "/placeholder.svg"} alt={castingCall.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute top-4 left-4">
          <Badge className={getStatusColor(castingCall.status)}>{castingCall.status}</Badge>
        </div>
        {castingCall.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-amber-100 text-amber-800 border-amber-200">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{castingCall.type}</Badge>
                <span className="text-gray-600">{castingCall.company}</span>
              </div>
              <h1 className="text-4xl font-light text-gray-900 mb-4">{castingCall.title}</h1>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{castingCall.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Posted: {formatDate(castingCall.datePosted)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Deadline: {formatDate(castingCall.deadline)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-5 h-5" />
                  <span>{castingCall.compensation}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Project Description</h2>
              <p className="text-gray-600 leading-relaxed">{castingCall.description}</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Requirements</h2>
              <div className="space-y-4">
                {castingCall.requirements.gender && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Gender</h3>
                    <div className="flex flex-wrap gap-2">
                      {castingCall.requirements.gender.map((gender, index) => (
                        <Badge key={index} variant="secondary">
                          {gender}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Age Range</h3>
                  <Badge variant="secondary">{castingCall.requirements.ageRange}</Badge>
                </div>

                {castingCall.requirements.ethnicity && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Ethnicity</h3>
                    <div className="flex flex-wrap gap-2">
                      {castingCall.requirements.ethnicity.map((ethnicity, index) => (
                        <Badge key={index} variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                          {ethnicity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {castingCall.requirements.skills && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {castingCall.requirements.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {castingCall.requirements.experience && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Experience</h3>
                    <p className="text-gray-600">{castingCall.requirements.experience}</p>
                  </div>
                )}

                {castingCall.requirements.physicalRequirements && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Physical Requirements</h3>
                    <ul className="space-y-1">
                      {castingCall.requirements.physicalRequirements.map((req, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Apply Card */}
              <Card className="mb-6">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-gray-900 mb-4">Interested in This Role?</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800">
                      <Mail className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save for Later
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">Applications will be forwarded to {castingCall.company}</p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Company:</span>
                      <p className="text-gray-600">{castingCall.company}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Email:</span>
                      <p className="text-gray-600">{castingCall.contactEmail}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Compensation:</span>
                      <p className="text-gray-600">{castingCall.compensation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-900 tracking-wider mb-4">CASTING</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Current Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    How to Apply
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Casting Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Success Stories
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
