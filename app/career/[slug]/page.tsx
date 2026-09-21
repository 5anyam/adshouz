import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Briefcase, Send, Download } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ui/contact-form";

// Sample job data - in production this would come from a database or CMS
const jobs = [
  {
    title: "Senior Company Secretary",
    slug: "senior-company-secretary",
    department: "Compliance",
    location: "Mumbai",
    type: "Full-time",
    experience: "5-8 years",
    salary: "₹8-12 LPA",
    description: "Lead our compliance team and handle complex corporate matters including NCLT proceedings, mergers, and regulatory filings. Perfect opportunity for experienced CS professionals to grow their career with challenging projects and leadership responsibilities.",
    requirements: [
      "Qualified Company Secretary (CS) with valid Certificate of Practice",
      "Minimum 5 years of experience in corporate compliance and regulatory affairs",
      "Strong experience with NCLT matters, mergers, and complex corporate filings",
      "In-depth knowledge of Companies Act 2013, SEBI regulations, and other corporate laws",
      "Excellent communication, leadership, and client management skills",
      "Ability to work under pressure and meet tight deadlines",
      "Experience in managing teams and mentoring junior professionals"
    ],
    responsibilities: [
      "Handle complex ROC filings, annual compliance, and statutory submissions",
      "Manage NCLT matters including mergers, amalgamations, and court proceedings",
      "Lead and mentor a team of junior CS professionals",
      "Build and maintain strong client relationships",
      "Ensure timely completion of all statutory requirements and deadlines",
      "Provide strategic advice to clients on corporate governance matters",
      "Stay updated with regulatory changes and implement compliance procedures"
    ],
    benefits: [
      "Competitive salary with performance-based incentives",
      "Professional development and continuing education support",
      "Health insurance for employee and family",
      "Flexible working arrangements and work-life balance",
      "Opportunity to work on high-profile cases and complex matters",
      "Career advancement opportunities in a growing firm"
    ]
  }
];

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = jobs.find(j => j.slug === params.slug);
  
  if (!job) {
    return {
      title: 'Job Not Found',
    };
  }

  return {
    title: `${job.title} - Career at CSPKIndia`,
    description: `Join CSPKIndia as ${job.title}. ${job.description.substring(0, 150)}...`,
    keywords: `${job.title}, CS careers, ${job.department}, company secretary jobs, Mumbai jobs`,
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobs.find(j => j.slug === params.slug);
  
  if (!job) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    employmentType: job.type.toUpperCase(),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'CSPKIndia',
      url: 'https://cspkindia.in',
    },
    jobLocation: {
      '@type': 'Place',
      address: job.location,
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        value: job.salary,
      },
    },
    experienceRequirements: job.experience,
    skills: job.requirements,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PageHeader
        title={job.title}
        description={`${job.department} • ${job.location} • ${job.type}`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
          { label: job.title }
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <div className="flex items-center text-gray-600 space-x-4 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{job.type}</Badge>
                      <Badge className="bg-[#3AA6FF] text-white">{job.salary}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#3AA6FF] mr-3 mt-1">•</span>
                      <span className="text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements & Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#3AA6FF] mr-3 mt-1">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            {job.benefits && (
              <Card>
                <CardHeader>
                  <CardTitle>Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Application Process */}
            <Card>
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { step: "1", title: "Submit Application", desc: "Complete the online application form with your resume" },
                    { step: "2", title: "Initial Screening", desc: "HR review and initial phone screening" },
                    { step: "3", title: "Technical Interview", desc: "Technical assessment with senior CS professionals" },
                    { step: "4", title: "Final Interview", desc: "Discussion with leadership team and offer" }
                  ].map((process, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#3AA6FF] text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{process.title}</h4>
                        <p className="text-gray-600 text-sm">{process.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Back to Careers */}
            <div className="flex items-center justify-between pt-6">
              <Button variant="outline" asChild>
                <Link href="/career">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Careers
                </Link>
              </Button>
              <Button asChild className="bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
                <a href={`mailto:careers@cspkindia.in?subject=Application for ${job.title}`}>
                  <Send className="mr-2 h-4 w-4" />
                  Quick Apply via Email
                </a>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Now Form */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Apply for this Position</CardTitle>
                <p className="text-gray-600 text-sm">
                  Fill out the form below to apply - हमें आपका आवेदन भेजें
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AA6FF]"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AA6FF]"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AA6FF]"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume *
                    </label>
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AA6FF]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Letter
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3AA6FF]"
                      placeholder="Tell us why you're perfect for this role..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Job Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Department:</span>
                  <span className="font-medium">{job.department}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type:</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-600">Salary:</span>
                  <span className="font-medium text-[#3AA6FF]">{job.salary}</span>
                </div>
              </CardContent>
            </Card>

            {/* Share Job */}
            <Card>
              <CardHeader>
                <CardTitle>Share this Job</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Know someone perfect for this role? Share it with them!
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    Share via Email
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Share on LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Copy Job Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}