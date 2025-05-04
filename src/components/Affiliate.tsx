"use client";
import { motion } from "framer-motion";
import CommonHero from '@/components/shared/hero/CommonHero';
import NewHeader from '@/components/shared/newHeader/NewHeader';
import affilateImg from "@/assets/others/Rectangle 34624198.png";

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Affiliate", href: "/affiliate" },
];

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    }
};

const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 0.77, 0.47, 0.97]
        }
    }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const Page = () => {
    return (
        <div className='section-gap overflow-hidden'>
            <NewHeader breadcrumbs={breadcrumbs} title='Affiliate' />

            <div className="section-gap space-y-[120px] bg-secondary">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        white
                        direction="left"
                        description="After many years of providing healing experiences for many people in need one of the main complaints my clients brought into my office is that their previous therapist used talk therapy to address their trauma. This just sounded insane to me! Trauma is stored in the body. The body doesn't understand 'get over it', it's absurd to think that talking will release deeply rooted, and often caused by an adverse childhood, core wounds.If you are an LPCC or LSW and are interested in building your own business while earning your hours towards licensure then reach out to me. Shoot me an email and let's talk about how I can support in becoming an efficient and independent business owner and an excellent clinician who knows how to work with difficult to address issues."
                        imageAlt="Become An Affiliated Provider!"
                        imageSrc={affilateImg.src}
                        title="Become An Affiliated Provider!"
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInRight}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        direction="right"
                        description="I will guide your through the necessary steps to get your own business started
Open your own office space – Finding your own office is very easy. The reality is that in today's environment there is a lack of human connection. We heal in connection not in isolation, particularly when addressing core trauma wounds. You must be willing to secure your own office space. The population we serve have relational wounding which can only be healed within the confines of a safe human relationship. I have found that in person treatment renders the best results!
Get needed supervision and training at no extra cost – Our list of clinical supervisors are an elite list of clinicians who have been in the helping business for decades! These elite clinicians have been hand selected for the skills they have to offer. I would like for you to benefit with the skillset we have accrued so that you don't have to learn them on your own. Truth is, most trainings are exponentially and prohibitively expensive. We will provide you with the skills you need to effectively help your clients in need. They know what is like to be squeezed dry by big mental health conglomerates who are only interested in profit. Their own profit!"
                        imageAlt="Own your own LLC"
                        imageSrc={affilateImg.src}
                        title="Own your own LLC"
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px] bg-secondary">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInLeft}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        white
                        direction="left"
                        description="Truth is, most new clinicians are afraid of not getting enough traffic. Starting on your own can be a daunting experience but it doesn't have to be! We are paneled with those insurance companies that provide us with enough referrals so that you will have traffic coming your way. Why is this list so small? Well, insurance companies are for profit, however we have discovered that some are more generous than others. Medicaid providers are few and far in between because of how difficult it is to enroll. We got this figured out. We panel with Medicaid because of the high need for providers in different areas of Colorado. We panel your office as an 'affiliated site', so your office is listed in their directory where clients can reach out to you directly."
                        imageAlt="We serve a small list of insurance companies"
                        imageSrc={affilateImg.src}
                        title="We serve a small list of insurance companies"
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={scaleUp}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        direction="right"
                        description="Zina Ortiz has many years of experience and has built up a really good reputation. Having an affiliation with her business makes you look good. It creates a trickle down effect. We market 'our' (yours and ours) locations through Google, Facebook, etc.
We take care of your billing – All you have to do is work your magic with the strategies our clinical supervisors provide. Skills you can start using to help those in need. Isn't that why you sacrificed many years of your life? You didn't get this far to just sit in an old danky office while someone profits off of your hard work."
                        imageAlt="We take care of your marketing"
                        imageSrc={affilateImg.src}
                        title="We take care of your marketing"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Page;