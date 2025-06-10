import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { getAllTalent } from "@/lib/talent-data"
import { ScrollHeader } from "@/components/scroll-header"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Transparent Scroll Header */}
      <ScrollHeader />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/image2.png?height=1080&width=1920&text=Indigenous+Australian+Model"
            alt="Indigenous Australian talent"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
            Celebrating Indigenous
            <br />
            Australian Talent
          </h1>
          <p className="text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Australia's premier agency representing Aboriginal and Torres Strait Islander models, actors, and creative
            professionals across all industries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-medium tracking-wider"
            >
              VIEW OUR TALENT
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-medium tracking-wider"
            >
              LEARN MORE
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-gray-900 tracking-wider mb-12">FEATURED TALENT</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getAllTalent().map((talent) => (
              <Card key={talent.slug} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <Link href={`/talent/${talent.slug}`}>
                    <Image
                      src={talent.profileImage || "/placeholder.svg"}
                      alt={talent.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
                    />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{talent.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{talent.category}</p>
                    <p className="text-xs text-amber-700 font-medium">{talent.heritage}</p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm tracking-wider"
            >
              VIEW ALL TALENT
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900 leading-tight">
                We work in partnership with you from start to finish to understand your brief, cultural sensitivities,
                and put forward the best suited Indigenous talent for your project seamlessly.
              </h2>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm tracking-wider"
              >
                CONTACT US
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Indigenous talent collaboration"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-gray-900 tracking-wider mb-12">FEATURED STORIES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none bg-white">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Indigenous Model Academy"
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">Indigenous Model Academy</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our academy is committed to empowering young Indigenous Australians with the tools and knowledge to
                    thrive in the modeling and entertainment industry.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-white">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Cultural Partnerships"
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">Cultural Partnerships</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We work closely with Indigenous communities and cultural leaders to ensure authentic representation
                    in all our collaborations.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-white">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="Success Stories"
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-2">Success Stories</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Celebrating the achievements of our talented Indigenous models and actors who are making their mark
                    on the global stage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-medium text-gray-900 tracking-wider mb-12">INSTAGRAM</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=Post${i + 1}`}
                  alt={`Instagram post ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm tracking-wider"
            >
              FOLLOW US
            </Button>
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
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Curve and Plus Size
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Mature Models
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
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
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
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Indigenous Talent Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
