import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { getAllCastingCalls } from "@/lib/casting-data"
import { ScrollHeader } from "@/components/scroll-header"

export default function CastingCallsPage() {
  const allCastingCalls = getAllCastingCalls()

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "rounded-none bg-green-100 text-green-800 border-green-200"
      case "Closing Soon":
        return "rounded-none bg-orange-100 text-orange-800 border-orange-200"
      case "Closed":
        return "rounded-none bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "rounded-none bg-gray-100 text-gray-800 border-gray-200"
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

      {/* Page Header */}
      <section className="py-16 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-light text-black mb-4">Casting Calls</h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Discover exciting opportunities for Indigenous Australian talent across film, television, fashion, and
            commercial projects.
          </p>
        </div>
      </section>

      {/* Featured Casting Calls */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-black tracking-wider mb-12">FEATURED OPPORTUNITIES</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {allCastingCalls
              .filter((call) => call.featured)
              .map((call) => (
                <Card key={call.id} className="rounded-none overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image src={call.image || "/placeholder.svg"} alt={call.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getStatusColor(call.status)}>{call.status}</Badge>
                    </div>
                    {call.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="rounded-none bg-amber-100 text-amber-800 border-amber-200">Featured</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="rounded-none">{call.type}</Badge>
                      <span className="text-sm text-gray-500">{call.company}</span>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{call.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{call.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {call.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        Deadline: {formatDate(call.deadline)}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {call.requirements.ageRange}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{call.compensation}</span>
                      <Link href={`/casting/${call.id}`}>
                        <Button size="sm" className="rounded-none">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Casting Calls */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-gray-900 tracking-wider mb-12">ALL OPPORTUNITIES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCastingCalls.map((call) => (
              <Card key={call.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={call.image || "/placeholder.svg"} alt={call.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className={getStatusColor(call.status)}>{call.status}</Badge>
                  </div>
                  {call.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {call.type}
                    </Badge>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{call.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{call.company}</p>

                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {call.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock className="w-3 h-3" />
                      Due: {formatDate(call.deadline)}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{call.compensation}</span>
                    <Link href={`/casting/${call.id}`}>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Don't See What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Register with us to be notified of new casting opportunities that match your profile and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              Register for Casting Alerts
            </Button>
            <Button size="lg" variant="outline">
              Submit Your Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
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
