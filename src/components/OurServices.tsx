"use client";
import { motion } from "framer-motion";
import affilateImg from "@/assets/others/Rectangle 34624198.png";
import CommonHero from '@/components/shared/hero/CommonHero';
import NewHeader from '@/components/shared/newHeader/NewHeader';
import eye from "@/assets/services/eye.png"
import emdrc from "@/assets/services/emdrc.png"


const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
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

const OurServicesPage = () => {
    return (
        <div className='section-gap overflow-hidden'>
            <NewHeader breadcrumbs={breadcrumbs} title='Our Services' />

            <div className="section-gap space-y-[120px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        direction="left"
                        description="Our video software is HIPAA-compliant and easy to use. You don't need to download an app or purchase a program. You will receive a link by email or text and all you do and copy and paste it into your web browser. Virtual and online counseling offers all the benefits of traditional office setting in the privacy of your own home. Virtual Online Counseling Appointments Are Available To Colorado Residents. I am committed to continuing to help our community through virtual online counseling. I understand that some people simply prefer the privacy of their home. For others, their geographic location restricts their access to qualified providers."
                        imageAlt="Virtual Therapy"
                        imageSrc={affilateImg.src}
                        title="Virtual Therapy"
                        buttonText='Learn More'
                        buttonLink='/our-services/virtual-therapy'
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px] bg-secondary">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInRight}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        white
                        direction="right"
                        description="EMDR, short for Eye Movement Desensitization and Reprocessing, is a highly structured therapy technique that facilitates patients to briefly focus on their traumatic memories while simultaneously experiencing bilateral stimulation, often in the form of eye movements. This unique approach has been found to reduce the intensity and emotional impact associated with traumatic memories. Extensive research has established EMDR therapy as an effective psychotherapeutic method for aiding individuals in recovering from trauma and alleviating symptoms of post-traumatic stress disorder (PTSD)."
                        imageAlt="EMDR Therapy"
                        imageSrc={eye.src}
                        title="EMDR Therapy"
                        buttonText='Learn More'
                        buttonLink='/our-services/emdr-therapy'
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInLeft}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        direction="left"
                        description="Zina Ortiz is now a Consultant in training or CIT by EMDRIA.EMDR (Eye Movement Desensitization and Reprocessing) consultation is a professional service provided to therapists who are seeking guidance, support, and expertise in utilizing EMDR therapy with their clients."
                        imageAlt="EMDR Consultation"
                        imageSrc={emdrc.src}
                        title="EMDR Consultation"
                        buttonText='Learn More'
                        buttonLink='/our-services/emdr-consultation'
                    />
                </motion.div>
            </div>

            <div className="section-gap space-y-[120px] bg-secondary">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={slideInRight}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                >
                    <CommonHero
                        white
                        direction="right"
                        description="Rapid Resolution Therapy (RRT) is a therapeutic approach developed by Dr. Jon Connelly that aims to facilitate swift and lasting resolution of emotional and behavioral difficulties, including trauma and other distressing experiences. It is a brief, solution-focused therapy designed to bring about positive change efficiently.
RRT operates on the premise that unresolved traumatic experiences and negative emotions are stored in the subconscious mind and continue to influence an individual's thoughts, feelings, and behaviors. By accessing and reprocessing these subconscious patterns, RRT seeks to alleviate symptoms and promote emotional well-being."
                        imageAlt="Rapid Resolution Therapy"
                        imageSrc={affilateImg.src}
                        title="Rapid Resolution Therapy"
                        buttonText='Learn More'
                        buttonLink='/our-services/rapid-therapy'
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
                        description="Developed by Dr. Pat Ogden, Sensorimotor Psychotherapy focuses on body awareness and movement to process disturbing events connected to uncomfortable sensation in the body, transforming these memories, or 'disconnecting' the memories from the uncomfortable sensations. As you may or may not know, the human body has memory and is a vessel for emotions. The body moves according to these emotions or sensations, expressing thoughts and feelings, without one's awareness. The body never lies, evidenced by the success of uncovering truths with technologies such as lie detectors."
                        imageAlt="Sensorimotor Psychotherapy"
                        imageSrc={affilateImg.src}
                        title="Sensorimotor Psychotherapy"
                        buttonText='Learn More'
                        buttonLink='/our-services/emdr-consultation'
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default OurServicesPage;