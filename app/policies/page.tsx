import { Header } from "@/components/gide/header"
import { Footer } from "@/components/gide/footer"

export const metadata = {
  title: "Policies | Gide",
  description: "GDPR & Data Protection and Privacy Policy for Gide",
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        {/* GDPR & Data Protection */}
        <section className="mb-16">
          <h1 className="mb-2 font-serif text-4xl tracking-tight text-foreground">
            GDPR & Data Protection
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Our commitment</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gide follows the EU General Data Protection Regulation (GDPR) and Finnish data protection law. We handle all personal data with care and respect for your privacy.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data controller</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gide is the data controller for processing personal data related to the Gide service. We are responsible for ensuring your data is handled according to applicable laws.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For questions about how we process your data, contact us at{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">What data we process</h2>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                Gide processes the following types of personal data:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Name, email, and company details</li>
                <li>Organisation role and team membership</li>
                <li>Query and usage history within Gide</li>
                <li>Audit trail and provenance records</li>
                <li>Technical data (IP address, browser type)</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Gide connects to your data sources to generate insights, but does not copy or store the underlying data in your databases. Your source data remains in your infrastructure.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Lawful basis</h2>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                We process personal data based on:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Contract:</strong> To deliver and administer the Gide service</li>
                <li><strong className="text-foreground">Legitimate interest:</strong> To improve service quality, reliability, and security</li>
                <li><strong className="text-foreground">Legal obligation:</strong> When required by law (e.g., accounting, audit requirements)</li>
                <li><strong className="text-foreground">Consent:</strong> For optional features requiring your explicit approval</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Your rights</h2>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion when legally possible</li>
                <li>Restrict or object to processing in certain cases</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To exercise your rights, email{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data retention</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We keep personal data only as long as necessary to deliver the service or meet legal requirements. When data is no longer needed, it is deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Sub-processors</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use a limited number of trusted sub-processors to operate Gide. A list of current sub-processors is available on request. All sub-processors are bound by data processing agreements that meet GDPR requirements.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data Processing Agreement</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Enterprise customers can request a Data Processing Agreement (DPA) that covers Gide's processing of data on behalf of your organisation. Contact{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>{" "}
                to request a DPA.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Incident response</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours as required by GDPR, and notify affected data subjects without undue delay where required.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Contact</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Data protection inquiries:{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-border" />

        {/* Privacy Policy */}
        <section>
          <h1 className="mb-2 font-serif text-4xl tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">Last updated: March 2026</p>

          <div className="space-y-8">
            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">What this policy covers</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This policy explains what data we collect, why we collect it, and how we protect it. It applies to Gide's website, application, and services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data we collect</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Contact details you share (name, email, company)</li>
                <li>Organisation and team information</li>
                <li>Data source connection metadata (database type, query history, usage logs)</li>
                <li>Usage data (logins, queries run, features used)</li>
                <li>Technical data (IP address, device, browser)</li>
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We do not access, store, or retain the underlying data in your connected databases. Gide processes queries and returns insights, your source data stays in your infrastructure.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">How we use data</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>To deliver and improve Gide's analytics services</li>
                <li>To provide support and onboarding</li>
                <li>To keep your account secure</li>
                <li>To generate audit trails and provenance records</li>
                <li>To meet legal and compliance requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data sharing</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We do not sell your data. We share it only with trusted sub-processors needed to run Gide (e.g., cloud hosting, authentication), under strict data protection agreements.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Security</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We use encryption in transit and at rest, role-based access controls, and monitoring to safeguard data. Access is limited to personnel who need it to operate the service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Data retention</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We keep personal data only as long as necessary to deliver the service or meet legal requirements. Audit logs are retained according to your organisation's configuration. Data is deleted or anonymised when no longer needed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Your choices</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You can request access, correction, or deletion of your personal data at any time. To exercise your rights, email{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-serif text-xl text-foreground">Contact</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Questions about this policy? Contact us at{" "}
                <a href="mailto:support@gideagency.com" className="text-foreground underline hover:no-underline">
                  support@gideagency.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
