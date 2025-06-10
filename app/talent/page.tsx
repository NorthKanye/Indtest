import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllTalent } from "@/lib/talent-data"
import { ScrollHeader } from "@/components/scroll-header"

export default function TalentListingPage() {
  const allTalent = getAllTalent()

  return (
    <div className="min-h-screen bg-white">
      {/* Transparent Scroll Header */}
      <ScrollHeader />

      {/* Page Header */}
      <section className="py-16 bg-gray-50 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Our Talent</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our exceptional Indigenous Australian talent representing diverse backgrounds, skills, and cultural
            heritage from across the continent.
          </p>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allTalent.map((talent) => (
              <Card key={talent.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/talent/${talent.slug}`}>
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={talent.profileImage || "/placeholder.svg"}
                      alt={talent.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{talent.name}</h3>
                    <p className="text-gray-600 mb-3">{talent.category}</p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-800 border-amber-200">
                        {talent.heritage}
                      </Badge>
                      <p className="text-sm text-gray-500">{talent.location}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
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
