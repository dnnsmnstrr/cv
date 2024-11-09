"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { getInitials, getMonthName, getTranslatedKey } from "@/lib/utils";
import { SUPPORTED_LANGUAGES, translations } from "@/lib/i18n";
import { JSONResume } from "@/lib/types";
import jsonResume  from '@/data/resume.json'

export default function Page() {
  const RESUME_DATA: JSONResume = jsonResume
  const [selectedLanguage, setSelectedLanguage] = useState<keyof typeof translations>(SUPPORTED_LANGUAGES[0])

  useEffect(() => {
    // Enable linking to specific language hash
    const handleHashChange = () => {
      const hashLanguage = window.location.hash.replace('#', '') as typeof SUPPORTED_LANGUAGES[number]
      const initialLanguage = SUPPORTED_LANGUAGES.includes(hashLanguage) ? hashLanguage : SUPPORTED_LANGUAGES[0]
      setSelectedLanguage(initialLanguage);
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const socialIcons = {
    LinkedIn: <LinkedInIcon className="h-4 w-4" />,
    GitHub: <GitHubIcon className="h-4 w-4" />,
    X: <XIcon className="h-4 w-4" />
  }
  function getSocialIcon(network: keyof typeof socialIcons) {
    if (Object.keys(socialIcons).includes(network)) {
      return socialIcons[network]
    }
    return <GlobeIcon className="h-4 w-4" />
  }

  const months = translations[selectedLanguage].months;
  const translatedMonths = Array.isArray(months) ? [...months] : [months];
  
  const links = [
    {
      url: 'mailto:' + RESUME_DATA.basics.email,
      title: translations[selectedLanguage].email,
    },
    ...(RESUME_DATA.basics.profiles || []).map((socialMediaProfile) => ({
      url: socialMediaProfile.url,
      title: String(socialMediaProfile.network),
    })),
  ]
  if (RESUME_DATA.basics.url) {
    links.unshift({
      url: RESUME_DATA.basics.url,
      title: String(translations[selectedLanguage].homepage),
    })
  }
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.basics.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {String(getTranslatedKey('label', selectedLanguage, RESUME_DATA.basics))} {RESUME_DATA.basics.location ? translations[selectedLanguage].from + ' ' + getTranslatedKey('city', selectedLanguage, RESUME_DATA.basics.location) : ''}
            </p>
            
            {RESUME_DATA.basics.url ? (
              <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME_DATA.basics.url}
                  target="_blank"
                >
                  <GlobeIcon className="h-3 w-3" />
                  {RESUME_DATA.basics.url.replace('https://', '')}
                </a>
              </p>
            ) : null}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.basics.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.basics.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.basics.phone ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.basics.phone}`}>
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {(RESUME_DATA.basics.profiles || []).map((social) => (
                <Button
                  key={social.network}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    {getSocialIcon(social.network as keyof typeof socialIcons)}
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.basics.email ? (
                <a href={`mailto:${RESUME_DATA.basics.email}`}>
                  <span className="underline">{RESUME_DATA.basics.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.basics.phone ? (
                <a href={`tel:${RESUME_DATA.basics.phone}`}>
                  <span className="underline">{RESUME_DATA.basics.phone}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.basics.name} src={RESUME_DATA.basics.image} />
            <AvatarFallback>{RESUME_DATA.basics.initials ? String(RESUME_DATA.basics.initials) : getInitials(RESUME_DATA.basics.name)}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">{translations[selectedLanguage].about}</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
          {getTranslatedKey('summary', selectedLanguage, RESUME_DATA.basics)}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">{translations[selectedLanguage].workExperience}</h2>
          {(RESUME_DATA.work || []).map((work) => {
            let formattedStartDate = work.startDate.split('-')[0]
            const formattedEndDate = work.endDate ? work.endDate.split('-')[0] : ''
            if (formattedStartDate === formattedEndDate && work.endDate) {
              formattedStartDate = getMonthName(Number(work.startDate.split('-')[1]) - 1, translatedMonths) + '-' + getMonthName(Number(work.endDate.split('-')[1]) - 1, translatedMonths) + ' ' + work.startDate.split('-')[0]
            } else if (!work.endDate) {
              formattedStartDate = getMonthName(Number(work.startDate.split('-')[1]) - 1, translatedMonths) + ' ' + work.startDate.split('-')[0]
            }
            const name = getTranslatedKey('name', selectedLanguage, work)
            const url = getTranslatedKey('url', selectedLanguage, work)
            const position = getTranslatedKey('position', selectedLanguage, work)
            return (
              <Card key={work.name}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={url}>
                        {name}
                      </a>

                      <div className="invisible sm:visible inline-flex gap-x-1">
                        {(getTranslatedKey('badges', selectedLanguage, work) as string[] || []).map((badge: string) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </h3>
                    <div className="text-sm text-right min-w-24 tabular-nums text-gray-500" title={`${work.startDate}${work.endDate ? ' - ' + work.endDate : ''}`}>
                      {!work.endDate ? translations[selectedLanguage].since + ' ' : ''}{formattedStartDate} {work.endDate && work.startDate.split('-')[0] !== work.endDate.split('-')[0] ? ' - ' + formattedEndDate : ''}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {position}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {getTranslatedKey('summary', selectedLanguage, work)}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">{translations[selectedLanguage].education}</h2>
          {(RESUME_DATA.education || []).map((education) => {
            let formattedStartDate = education.startDate.split('-')[0]
            const formattedEndDate = education.endDate ? education.endDate.split('-')[0] : ''
            if (formattedStartDate === formattedEndDate && education.endDate) {
              formattedStartDate = getMonthName(Number(education.startDate.split('-')[1]) - 1, translatedMonths) + '-' + getMonthName(Number(education.endDate.split('-')[1]) - 1, translatedMonths) + ' ' + education.startDate.split('-')[0]
            }
            const name = getTranslatedKey('institution', selectedLanguage, education)
            return (
              <Card key={education.institution}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {education.url ? (
                        <a className="hover:underline" href={String(education.url)}>
                          {name}
                        </a>
                      ) : name}
                      <span className="inline-flex gap-x-1">
                        {(education?.badges as string[] || []).map((badge: string) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm text-right min-w-24 tabular-nums text-gray-500" title={`${education.startDate}${education.endDate ? ' - ' + education.endDate : ''}`}>
                      {formattedStartDate} {education.endDate && education.startDate.split('-')[0] !== education.endDate.split('-')[0] ? ' - ' + formattedEndDate : ''}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{getTranslatedKey('area', selectedLanguage, education)}</CardContent>
              </Card>
            );
          })}
        </Section>
        <div className="hidden print:flex w-full justify-end">
          <div>1</div>
        </div>
        <Section className="print-force-new-page">
          <div className="hidden print:flex w-full justify-between">
            <div>{translations[selectedLanguage].cv} - {RESUME_DATA.basics.name}</div>
          </div>

          <h2 className="text-xl font-bold print:mt-8">{translations[selectedLanguage].skills}</h2>
          <div className="flex flex-wrap gap-1">
            {(RESUME_DATA.skills || []).map((skill) => {
              const skills = skill.keywords?.join(', ')
              return <Badge key={skill.name} title={skills}>{getTranslatedKey('name', selectedLanguage, skill)}<span className="hidden print:block ml-2">({skills})</span></Badge>;
            })}
          </div>
        </Section>

        <Section className="scroll-mb-16">
          <h2 className="text-xl font-bold">{translations[selectedLanguage].projects}</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2">
            {(RESUME_DATA.projects || []).map((project) => {
              const title = getTranslatedKey('name', selectedLanguage, project)
              const description = getTranslatedKey('description', selectedLanguage, project)
              const keywords = getTranslatedKey('keywords', selectedLanguage, project)
              const link = getTranslatedKey('url', selectedLanguage, project)
              return (
                <ProjectCard
                  key={project.name}
                  title={title}
                  description={description}
                  tags={keywords}
                  link={link ? link : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">{translations[selectedLanguage].interests}</h2>
          <div className="flex flex-wrap gap-1">
            {(RESUME_DATA.interests || []).map((interest) => {
              const name = getTranslatedKey('name', selectedLanguage, interest)
              const keywords = getTranslatedKey('keywords', selectedLanguage, interest)
              const interests = keywords?.join(', ')
              return <Badge key={name} title={interests}>{name}<span className="hidden print:block ml-2">({interests})</span></Badge>;
            })}
          </div>
        </Section>

        <Section className="hidden print:flex flex-col justify-between h-80 mt-8 border-t pt-6 ">
          <div className="flex flex-col justify-start items-start gap-x-4">
            <div className="text-sm">
              {RESUME_DATA.basics.location?.city || translations[selectedLanguage].city}, {new Date().toLocaleDateString(selectedLanguage === 'en' ? 'en-US' : 'de-DE')}
            </div>
            <div className="flex flex-col pt-2">
              <div className="text-xs mt-8 border-t border-gray-700">
                {RESUME_DATA.basics.name}
              </div>
            </div>
          </div>
          <div className="hidden print:flex w-full h-fit justify-end items-end">
            <span>2</span>
          </div>
        </Section>
      </section>

      <CommandMenu
        links={links}
        onChangeLanguage={() => window.location.assign(selectedLanguage === 'en' ? '/#de' : '/#en')}
        translations={translations[selectedLanguage]}
      />    
    </main>
  );
}
