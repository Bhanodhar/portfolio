import { motion } from "framer-motion";import { motion } from "framer-motion";

import { Mail, Phone, Linkedin, Github } from "lucide-react";import { Mail, Phone, Linkedin, Github } from "lucide-react";

import { Section } from "../components/ui/section";import { Section } from "../components/ui/section";

import { Card } from "../components/ui/card";import { Card } from "../components/ui/card";



export function ContactSection() {export function ContactSection() {

  const contactInfo = [  const contactInfo = [

    {    {

      icon: Mail,      icon: Mail,

      label: "Email",      label: "Email",

      value: "bhanodhar@gmail.com",      value: "bhanodhar@gmail.com",

      href: "mailto:bhanodhar@gmail.com",      href: "mailto:bhanodhar@gmail.com",

    },    },

    {    {

      icon: Phone,      icon: Phone,

      label: "Phone",      label: "Phone",

      value: "+91 9704325955",      value: "+91 9704325955",

      href: "tel:+919704325955",      href: "tel:+919704325955",

    },    },

  ];  ];



  const socialLinks = [  const socialLinks = [

    {    {

      icon: Linkedin,      icon: Linkedin,

      href: "https://www.linkedin.com/in/bhanodharpenagaluru",      href: "https://www.linkedin.com/in/bhanodharpenagaluru",

      label: "LinkedIn",      label: "LinkedIn",

    },    },

    {    {

      icon: Github,      icon: Github,

      href: "https://github.com/Bhanodhar",      href: "https://github.com/Bhanodhar",

      label: "GitHub",      label: "GitHub",

    },    },

  ];  ];



  return (  return (

    <Section id="contact" title="Contact Me">    <Section id="contact" title="Contact Me">

      <div className="max-w-5xl mx-auto px-4">      <div className="max-w-5xl mx-auto px-4">

        <div className="grid gap-12">        <div className="grid gap-12">

          {/* Contact Information */}          {/* Contact Information */}

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ duration: 0.5 }}            transition={{ duration: 0.5 }}

          >          >

            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">

              {contactInfo.map((info, index) => (              {contactInfo.map((info, index) => (

                <Card                <Card

                  key={index}                  key={index}

                  className="p-6 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all border-yellow-500/20"                  className="p-6 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all border-yellow-500/20"

                >                >

                  <div className="flex items-center gap-4">                  <div className="flex items-center gap-4">

                    <div className="p-3 bg-yellow-500/10 rounded-xl">                    <div className="p-3 bg-yellow-500/10 rounded-xl">

                      <info.icon className="w-8 h-8 text-yellow-500" />                      <info.icon className="w-8 h-8 text-yellow-500" />

                    </div>                    </div>

                    <div>                    <div>

                      <h3 className="font-medium text-lg mb-1">{info.label}</h3>                      <h3 className="font-medium text-lg mb-1">{info.label}</h3>

                      {info.href ? (                      {info.href ? (

                        <a                        <a

                          href={info.href}                          href={info.href}

                          className="text-yellow-500 hover:text-yellow-400 hover:underline transition-colors"                          className="text-yellow-500 hover:text-yellow-400 hover:underline transition-colors"

                        >                        >

                          {info.value}                          {info.value}

                        </a>                        </a>

                      ) : (                      ) : (

                        <p className="text-gray-300">{info.value}</p>                        <p className="text-gray-300">{info.value}</p>

                      )}                      )}

                    </div>                    </div>

                  </div>                  </div>

                </Card>                </Card>

              ))}              ))}

            </div>            </div>



            {/* Social Links */}            {/* Social Links */}

            <div className="text-center mt-12">            <div className="text-center mt-12">

              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

              <div className="flex gap-6 justify-center">              <div className="flex gap-6 justify-center">

                {socialLinks.map((social, index) => (                {socialLinks.map((social, index) => (

                  <a                  <a

                    key={index}                    key={index}

                    href={social.href}                    href={social.href}

                    target="_blank"                    target="_blank"

                    rel="noopener noreferrer"                    rel="noopener noreferrer"

                    className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 border border-yellow-500/20 transition-all hover:scale-110 hover:border-yellow-500/40"                    className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/50 border border-yellow-500/20 transition-all hover:scale-110 hover:border-yellow-500/40"

                    aria-label={social.label}                    aria-label={social.label}

                  >                  >

                    <social.icon className="w-8 h-8 text-yellow-500" />                    <social.icon className="w-8 h-8 text-yellow-500" />

                  </a>                  </a>

                ))}                ))}

              </div>              </div>

            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>

      </div>      </div>

    </Section>    </Section>

  );  );

}}
