import Navbar from '@/components/navbar'
import Image from 'next/image'

const ResourcesPanel = (): JSX.Element => {
  const resources = [
      {
          file: "Onboarding",
          title: "Onboarding",
          description: "Complete guide for new organizers covering roles, responsibilities, and best practices from day 1 to hackathon date",
          image: "/filepictures/onboarding.png",
          category: "Information"
      },
      {
          file: "starting-hackathon",
          title: "Starting a Hackathon Guide",
          description: "Information for new organizers covering requirements and committments",
          image: "/filepictures/startingahackathon.png",
          category: "Information"
      },
      {
          file: "join-silicon",
          title: "Join Silicon Guide",
          description: "Information for veteran organizers covering requirements and committments",
          image: "/filepictures/joinsilicon.png",
          category: "Information"
      },
      {
          file: "example-shadyhacks",
          title: "shady.Hacks In Depth",
          description: "Case study example showing detailed planning and execution of shady.Hacks",
          image: "/filepictures/shadyhacks.png",
          category: "Example"
      },
      {
          file: "sponsor-info-packet",
          title: "Sponsor Info Packet",
          description: "Professional sponsor outreach template with event details and benefits",
          image: "/filepictures/sponsors.png",
          category: "Canva"
      },

      {
          file: "event-handbook",
          title: "Event Handbook (shady.Hacks 2024)",
          description: "Complete event handbook from shady.Hacks 2024 with rules, schedule, judging criteria, and resources",
          image: "/filepictures/infopacket.png",
          category: "Template"
      },
      {
          file: "sponsorship-thank-you-note",
          title: "Sponsorship Thank You Note",
          description: "Customizable thank you note template for sponsors showing appreciation",
          image: "/filepictures/sponsorthankyou.png",
          category: "Canva"
      },
      {
          file: "winner-certificate",
          title: "Winner Certificate",
          description: "Professional certificate template for hackathon winners and participants",
          image: "/filepictures/certificate.png",
          category: "Canva"
      },
    {
      file: "volunteer-registration-form",
      title: "Volunteer Registration Form",
      description: "Google Form template for managing volunteer signups and shift assignments",
          image: "/filepictures/volunteerfrm.png",
      category: "Template"
    },
      {
          file: "registration-form",
          title: "Registration Form",
          description: "Participant registration form with custom fields and validation",
          image: "/filepictures/registrationform.png",
          category: "Template"
      },
      {
          file: "feedback-form",
          title: "Feedback Form",
          description: "Google Form template to collect participant feedback post-event",
          image: "/filepictures/feedbackform.png",
          category: "Template"
      },
      {
          file: "planning-mastersheet",
          title: "Mastersheet",
          description: "Comprehensive planning spreadsheet covering timeline, budget, and task tracking. Center of your hackathon operations tracking",
          image: "/filepictures/mastersheet.png",
          category: "Planning"
      },
      {
          file: "opening-presentation",
          title: "Opening Presentation",
          description: "Editable opening ceremony presentation template with branding and agenda slides",
          image: "/filepictures/presentation.png",
          category: "Example"
      },
      {
          file: "scoresheet",
          title: "Scoresheet Template",
          description: "Scoresheet template for judging projects across various categories",
          image: "/filepictures/scoresheet.png",
          category: "Event"
      }, 
      {
          file: "closing-presentation",
          title: "Closing Presentation",
          description: "Editable closing ceremony presentation template for award announcements and event wrap-up",
          image: "/filepictures/presentation.png",
          category: "Canva"
      },
      {
          file: "brochure",
          title: "Brochure",
          description: "Event brochure template showcasing hackathon details and highlights",
          image: "/filepictures/brochure.png",
          category: "Canva"
      },
      {
          file: "poster",
          title: "Poster",
          description: "Eye-catching poster template for promoting your hackathon event",
          image: "/filepictures/poster.png",
          category: "Canva"
      },
    {
      file: "volunteer-outreach-template",
      title: "Volunteer Outreach",
      description: "Email templates and outreach documents to recruit volunteers effectively",
      category: "Template"
    },
    {
      file: "sponsorship-template",
      title: "Sponsorship Template",
      description: "Email templates and grant application guides to attract sponsors",
      category: "Template"
    },
    {
      file: "school-outreach-template",
      title: "School Outreach",
      description: "Email templates and outreach documents to connect with schools and educators",
      category: "Template"
    },
    {
          file: "planning-checklist",
          title: "Checklist",
          description: "Step-by-step checklist to ensure all critical tasks are completed leading up to the event",
          category: "Planning"
    },
    {
        file: "masterclass-presentation",
        title: "Masterclass Presentation",
        description: "Editable masterclass presentation template with branding and content slides",
        category: "Example"
    },
    {
        file: "logo",
        title: "Logo",
        description: "Example hackathon branding",
        category: "Example"
    },
    {
        file: "ai-ignition-example",
        title: "AI Ignition with Python",
        description: "Example hackathon masterclass presentation",
        category: "Example"
    },  

    {
        file: "judging-guide",
        title: "Judge Guide Template",
        description: "Judging guide for your judges including criteria and scoring rubrics",
        category: "Template"
    }, 
    {
        file: "judging-document",
        title: "Printed Judging Document",
        description: "Template for judges to track scores/teams",
        category: "Event"
    },  
    {
        file: "speaker-announcement",
        title: "Speaker Announcement",
        description: "Social media template for announcing speakers and workshop leaders",
        category: "Canva"
    },
    {
        file: "hackathon-announcement",
        title: "Hackathon Announcement",
        description: "Initial event announcement template for launching your hackathon",
        category: "Canva"
    },
    {
        file: "sponsor-announcement",
        title: "Sponsor Announcement",
        description: "Social media template for announcing and recognizing event sponsors",
        category: "Canva"
    },
    {
        file: "countdown",
        title: "Countdown",
        description: "Countdown graphic template to build excitement as the event approaches",
        category: "Canva"
    },
    {
        file: "1-week-countdown",
        title: "1 Week Countdown",
        description: "Special countdown template for the final week before your hackathon",
        category: "Canva"
    },
    {
        file: "funny-video-guide",
        title: "Funny Video Guide",
        description: "Creative video template guide for engaging promotional content",
        category: "Canva"
    },
    {
        file: "instagram-growth-strategies",
        title: "Instagram Growth Strategies",
        description: "Template with proven strategies and post ideas for growing your Instagram presence",
        category: "Canva"
    },
    {
        file: "linkedin-guide",
        title: "LinkedIn Guide",
        description: "Professional template for leveraging LinkedIn to promote your hackathon",
        category: "Canva"
    },
    {
        file: "advertisement-templates",
        title: "Advertisement Templates",
        description: "Collection of advertisement templates for various platforms and formats",
        category: "Canva"
    },
  ]

  return (
    <>
        <Navbar current="Resources" />
        <div className="w-screen min-h-screen bg-white py-20 mt-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-2">
                        Templates/Guides
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        Join to get access to our 50+ templates and guides.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 border border-gray-200 overflow-hidden"
                        >
                            {resource.image && (
                                <div className="relative h-48 w-full bg-white flex items-center justify-center p-4">
                                    <div className="relative max-w-full max-h-full" style={{filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25)) drop-shadow(0 6px 6px rgba(0, 0, 0, 0.23))'}}>
                                        <Image
                                            src={resource.image}
                                            alt={resource.title}
                                            width={500}
                                            height={192}
                                            className="object-contain max-h-40 w-auto"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="p-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono text-gray-500">{resource.file}</span>
                                    <span className="text-xs text-gray-400 font-medium">{resource.category}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default ResourcesPanel
