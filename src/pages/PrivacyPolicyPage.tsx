import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';

export default function PrivacyPolicyPage() {
    return (
        <div className="noise min-h-screen" style={{ background: '#050508' }}>
            <SEO
                title="Privacy Policy | Nvilo Infotech"
                description="Our privacy policy details how we collect, use, and protect your personal information. We are committed to maintaining your trust and data security."
                canonical="https://nviloinfotech.in/privacy-policy"
            />
            <Navbar />

            <main className="pt-20">
                <PageHero
                    title="Privacy Policy"
                    subtitle="Legal"
                    description="Last updated: October 2023. Your privacy is important to us. This policy explains how we handle your information."
                />

                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-6">
                        <Reveal animation="fade-up">
                            <div className="prose prose-invert max-w-none">
                                <div className="space-y-12">
                                    <div>
                                        <h2 className="font-display font-800 text-2xl text-[#f0f0f8] mb-4">1. Information We Collect</h2>
                                        <p className="text-[#8888a8] font-body leading-relaxed">
                                            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="font-display font-800 text-2xl text-[#f0f0f8] mb-4">2. How We Use Your Information</h2>
                                        <p className="text-[#8888a8] font-body leading-relaxed">
                                            We use the information we collect to provide, maintain, and improve our services, to develop new products, and to protect Nvilo Infotech and our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="font-display font-800 text-2xl text-[#f0f0f8] mb-4">3. Information Sharing</h2>
                                        <p className="text-[#8888a8] font-body leading-relaxed">
                                            We do not share personal information with companies, organizations, or individuals outside of Nvilo Infotech except in the following cases: with your consent, for external processing, or for legal reasons.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="font-display font-800 text-2xl text-[#f0f0f8] mb-4">4. Data Security</h2>
                                        <p className="text-[#8888a8] font-body leading-relaxed">
                                            We work hard to protect Nvilo Infotech and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="font-display font-800 text-2xl text-[#f0f0f8] mb-4">5. Contact Us</h2>
                                        <p className="text-[#8888a8] font-body leading-relaxed">
                                            If you have any questions about this Privacy Policy, please contact us at:
                                            <br />
                                            <span className="text-[#723FE4]">info@nviloinfotech.in</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
