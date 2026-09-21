import { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Disclaimer | M/s Praveen K & Associates - Company Secretary Services',
  description: 'Read the disclaimer and terms of use for M/s Praveen K & Associates website. Understand our liability limitations and terms of service.',
  keywords: 'disclaimer, terms of use, liability, CS services disclaimer',
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        title="Disclaimer"
        description="Terms and conditions for using our website and services"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Disclaimer" }
        ]}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Important Legal Notice</h2>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Terms of Access</h3>
                  <p className="text-justify">
                    Your access to this website constitutes your agreement to be bound by all terms and conditions 
                    listed herein below. If you do not agree to this, you may not access or otherwise use the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Usage & Distribution</h3>
                  <p className="text-justify">
                    The material displayed on this website may be downloaded for non-commercial, personal use only. 
                    Distribution, modification, transmission, use or reuse of the content and various facilities 
                    available on this website without written permission is not permissible.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Right to Modification</h3>
                  <p className="text-justify">
                    The firm reserves the right, for any reason, in its sole discretion, to terminate, change or 
                    suspend any aspect of this website, including, but not limited to, content or features.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h3>
                  <p className="text-justify">
                    All reasonable efforts shall be made to ensure that the information contained on this website is 
                    updated, accurate and complete. However, no representations or warranties are made (express or 
                    implied) as to the reliability, accuracy or completeness of such information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">External Links & Third-Party Resources</h3>
                  <p className="text-justify">
                    The site provides links to websites or resources operated by others over which we do not have 
                    any control. We do not undertake any responsibility for the availability of such external resources. 
                    We shall not be liable for any content, advertising, products, services or other materials on or 
                    available from such sites or resources. The inclusion of hyperlinks to such sites does not imply 
                    any endorsement of the material on such websites or any association with their operators.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Warranties & Liability</h3>
                  <p className="text-justify">
                    We shall not be responsible or liable, directly or indirectly, for any damage or loss caused or 
                    alleged to be caused by or in connection with use of or reliance on any such content or service 
                    available on or through any such site or resource. The site, including all content, functions, 
                    and information made available on or accessed through the site, is provided on an "as is available" 
                    basis without representations or warranties of any kind whatsoever, express or implied, including 
                    without limitation, non-infringement, merchantability or fitness for a particular purpose.
                  </p>
                  <p className="text-justify mt-4">
                    The firm does not warrant that the site or the functions, features or content contained therein 
                    will be timely, secure, uninterrupted or error free, or that defects will be corrected. No advice 
                    or information, whether oral or written, obtained by you from us or through this website shall 
                    create any warranty not expressly made herein.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-justify">
                    In no event shall the firm be liable for any special, incidental or consequential damages that 
                    are directly or indirectly related to the use of, or the inability to use this website or the 
                    content, materials and functions related thereto, including without limitation, loss of revenue 
                    or anticipated profits or lost business or lost sales.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Last Updated:</strong> October 2025
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  For any questions regarding this disclaimer, please <a href="/contact" className="text-[#3AA6FF] hover:underline">contact us</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
