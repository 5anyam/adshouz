"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Briefcase, Users, MapPin, Clock, Upload, Send } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const stats = [
  { icon: Users, number: "50+", label: "Team Members" },
  { icon: Briefcase, number: "10+", label: "Departments" }, 
  { icon: MapPin, number: "3", label: "Locations" },
  { icon: Clock, number: "24/7", label: "Support" }
];

const positions = [
  "Senior Company Secretary",
  "Junior Company Secretary", 
  "Legal Associate - IPR",
  "Compliance Executive",
  "Business Development Executive",
  "Content Writer - Legal",
  "Intern - CS Practice",
  "Other/General Application"
];

export default function CareerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentCompany: "",
    qualification: "",
    location: "",
    noticePeriod: "",
    expectedSalary: "",
    linkedIn: "",
    coverLetter: "",
    resume: null as File | null
  });

  const handleInputChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Please upload PDF or Word document only");
        return;
      }
      
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.position) {
      toast.error("Please fill all required fields");
      return;
    }
    
    if (!formData.resume) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'resume' && formData.resume) {
          submitData.append('resume', formData.resume);
        } else {
          submitData.append(key, formData[key as keyof typeof formData] as string);
        }
      });

      // Send to API route that will forward to email
      const response = await fetch('/api/career-application', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        toast.success("Application submitted successfully! We'll get back to you soon.");
        
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          currentCompany: "",
          qualification: "",
          location: "",
          noticePeriod: "",
          expectedSalary: "",
          linkedIn: "",
          coverLetter: "",
          resume: null
        });
        
        // Reset file input
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error("Something went wrong. Please email your resume to careers@cspkindia.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Join Our Team"
        description="Build your career with India's leading Company Secretary firm. Grow professionally while making a difference."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Career" }
        ]}
      />

      {/* Application Form */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 48 hours
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange("fullName")}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Current Location *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={handleInputChange("location")}
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Total Experience *</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={handleInputChange("experience")}
                      placeholder="e.g., 3 years"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="qualification">Highest Qualification *</Label>
                    <Input
                      id="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange("qualification")}
                      placeholder="e.g., CS, CA, MBA, B.Com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentCompany">Current Company</Label>
                    <Input
                      id="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleInputChange("currentCompany")}
                      placeholder="Your current employer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="noticePeriod">Notice Period</Label>
                    <Input
                      id="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange("noticePeriod")}
                      placeholder="e.g., Immediate, 30 days"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedSalary">Expected Salary (Annual)</Label>
                    <Input
                      id="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange("expectedSalary")}
                      placeholder="e.g., ₹6-8 LPA"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile URL</Label>
                    <Input
                      id="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange("linkedIn")}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter / Why do you want to join us?</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange("coverLetter")}
                      placeholder="Tell us about yourself and why you're interested in this position..."
                      rows={6}
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume Upload *</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#3AA6FF] transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <Label htmlFor="resume" className="cursor-pointer">
                    <span className="text-[#3AA6FF] hover:underline">Click to upload</span>
                    <span className="text-gray-600"> or drag and drop</span>
                  </Label>
                  <p className="text-sm text-gray-500 mt-2">PDF or Word document (Max 5MB)</p>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  {formData.resume && (
                    <p className="text-sm text-green-600 mt-4">
                      ✓ {formData.resume.name} selected
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#3AA6FF] hover:bg-[#2690E6] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      {/* Application Process */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and transparent hiring process designed to find the best fit
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Apply Online", desc: "Submit your application through our form with your resume and details" },
            { step: "2", title: "Initial Screening", desc: "Our HR team reviews your application and conducts initial screening" },
            { step: "3", title: "Technical Interview", desc: "Technical assessment by our senior CS professionals" },
            { step: "4", title: "Final Interview", desc: "Final discussion with leadership team and offer negotiation" }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                {process.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-[#3AA6FF] to-[#2690E6] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About the Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Feel free to reach out to our HR team for any queries regarding the application process or available positions.
          </p>
          <Button asChild size="lg" className="bg-white text-[#3AA6FF] hover:bg-gray-100">
            <a href="mailto:careers@cspraveenkumar.in?subject=Career Inquiry">
              Contact HR Team
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}
