'use client'

import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I'm someone with a background in Accounting and now focus on Information Systems and Technology. 
          Currently, I study at ITB Sabda Setia and work as a Junior Internal Auditor and Document Controller, 
          managing audits and ISO documentation. I enjoy building web systems with Laravel, MySQL, and React 
          to solve real-world problems.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>MySQL</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Junior Web Developer</h3>
            <p className="text-primary mb-2">Yayasan Gereja Protestan Kampung Bali • Dec 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developing an Internal Audit Information System for Sekolah Kristen Immanuel</li>
              <li>To streamline audit processes, enhance data accuracy, and improve reporting efficiency.</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Document Controller</h3>
            <p className="text-primary mb-2">Yayasan Gereja Protestan Kampung Bali • Aug 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Maintain and organize all documents for easy access and accuracy.</li>
                <li>Ensure document integrity, security, and proper version control.</li>
                <li>Work with departments to keep documents consistent and compliant.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Junior Internal Auditor</h3>
            <p className="text-primary mb-2">Yayasan Gereja Protestan Kampung Bali • Aug 2024 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Audit Reference: ISO 21001:2018 Standards Educational Organization Management System</li>
                <li>Evaluate processes for compliance and identify improvements.</li>
                <li>Prepare audit reports, provide recommendations, and assist in implementing corrective actions.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Financial Accountant</h3>
            <p className="text-primary mb-2">Yayasan Gereja Protestan Kampung Bali • Oct 2023 - Jul 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Recording transactions in the general journal</li>
                <li>Performing journal adjustments</li>
                <li>Analyzing and reconciling discrepancies in cash transactions</li>
                <li>Processing transaction data using Excel</li>
                <li>Inputting sales transactions for school supplies into program</li>
                <li>Verifying accuracy of receipts, disbursements, and reports from school treasurers</li>
                <li>Monitoring the performance and responsibilities of unit treasurers in financial matters</li>
                <li>Archiving monthly documents received from each school unit</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Salesforce Administrator</h3>
            <p className="text-primary mb-2">PT Grace Haluan Raya • Jun 2023 - Sep 2023</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
                <li>Creating and printing sales invoices</li>
                <li>Verifying document accuracy</li>
                <li>Inputting transactions into program</li>
                <li>Processing financial data using Excel</li>
                <li>Assisting customers both in the showroom and via WhatsApp chat</li>
                <li>Conducting product stock audits</li>
                <li>Archiving transaction documents</li>
                <li>Managing the company's social media accounts</li>
                <li>Creating content for social media platforms using CapCut and Canva</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-primary mb-2">Institut Teknologi dan Bisnis Sabda Setia • Aug 2023 - Present</p>
            <p className="text-secondary">
              Focused on software engineering and web development.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-6"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Accounting</h3>
            <p className="text-primary mb-2">SMK Kristen Immanuel 2 Sungai Raya • Jul 2020 - May 2023</p>
            <p className="text-secondary">
              Focused on accounting principles, financial reporting, and bookkeeping.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 