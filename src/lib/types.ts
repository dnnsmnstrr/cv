export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Master'

/** The JSON Resume schema. Translate keys by appending the country code (e.g. "label_de": "German Label") */
export type JSONResume = {
    /** The version of the schema */
    $schema?: string;
    version?: string;
    
    /** The basic personal information */
    basics: {
        /** The name of the person */
        name: string;
        /** The label or title of the person (e.g., "Software Engineer") */
        label?: string;
        /** The person's email address */
        email?: string;
        /** The person's phone number */
        phone?: string;
        /** The person's website or portfolio URL */
        url?: string;
        /** Image URL to a profile photo */
        image?: string;
        /** The person's summary or bio */
        summary?: string;
        /** The person's location */
        location?: {
            /** The city */
            city?: string;
            /** The region or state */
            region?: string;
            /** The country */
            country?: string;
            /** The postal code */
            postalCode?: string;
            [translatedKey: string]: string | undefined;

        };
        /** The person's profiles on social networks */
        profiles?: Array<{
            /** The network name (e.g., "LinkedIn") */
            network: string;
            /** The username or handle */
            username: string;
            /** The URL to the profile */
            url: string;
        }>;
        [translatedKey: string]: string | Array<Record<string, string | undefined>> | Record<string, string | undefined> | undefined;
    };

    /** The work experience section */
    work?: Array<{
        /** The name of the company */
        name: string;
        /** The job position */
        position: string;
        /** The start date of the job */
        startDate: string;
        /** The end date of the job (optional) */
        endDate?: string;
        /** The summary of the job role */
        summary?: string;
        /** The highlights or achievements in this role */
        highlights?: string[];
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The education section */
    education?: Array<{
        /** The degree obtained */
        institution: string;
        /** The date of graduation */
        area: string;
        /** The start date of the education */
        startDate: string;
        /** The end date of the education (optional) */
        endDate?: string;
        /** The grade or honors received (optional) */
        score?: string;
        /** Additional details about the education */
        courses?: string[];
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The skills section */
    skills?: Array<{
        /** The skill name */
        name: string;
        /** The level of proficiency (optional) */
        level?: string | ProficiencyLevel;
        /** The keywords associated with the skill (optional) */
        keywords?: string[];
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The interest section */
    interests?: Array<{
        /** The interest name */
        name: string;
        /** The keywords associated with the interest (optional) */
        keywords?: string[];
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The volunteer experience section */
    volunteer?: Array<{
        /** The position held in the volunteer role */
        position: string;
        /** The organization name */
        organization: string;
        /** The start date of the volunteer role */
        startDate: string;
        /** The end date of the volunteer role (optional) */
        endDate?: string;
        /** Details about the volunteer work */
        summary?: string;
        /** Highlights or achievements in this role */
        highlights?: string[];
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The projects section */
    projects?: Array<{
        /** The project name */
        name: string;
        /** The URL to the project (optional) */
        url?: string;
        /** The date the project was created or worked on */
        date?: string;
        /** The description of the project */
        description?: string;
        /** The technologies used in the project or other relevant keywords */
        keywords?: string[];
        /** The highlights or achievements in this project */
        highlights?: string[];
        /** The roles occupied for this project */
        roles?: string[];
        /** The type of project */
        type?: string | 'volunteering' | 'presentation' | 'talk' | 'application' | 'conference';
        /** The entity responsible for the project */
        entity?: string;
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The publications section */
    publications?: Array<{
        /** The name of the publication */
        name: string;
        /** The publisher of the publication */
        publisher?: string;
        /** The date of publication */
        releaseDate?: string;
        /** The URL to the publication (optional) */
        url?: string;
        /** The summary of the publication */
        summary?: string;
        [translatedKey: string]: string | string[] | undefined;
    }>;

    /** The awards section */
    awards?: Array<{
        /** The award name */
        title: string;
        /** The date the award was received */
        date: string;
        /** The issuer of the award */
        awarder?: string;
        /** A summary of the award (optional) */
        summary?: string;
        [translatedKey: string]: string | undefined;
    }>;

    /** The certificates section */
    certificates?: Array<{
        /** The certificate name */
        name: string;
        /** The date the certificate was awarded */
        date: string;
        /** The issuer of the certificate */
        issuer?: string;
        /** A summary of the certificate (optional) */
        url?: string;
        [translatedKey: string]: string | undefined;
    }>;

    /** The references section */
    references?: Array<{
        /** The name of the reference */
        name: string;
        /** The relationship to the person */
        reference: string;
        /** The phone number of the reference (optional) */
        phone?: string;
        /** The email address of the reference (optional) */
        email?: string;
        [translatedKey: string]: string | undefined;
    }>;

    /** Meta information */
    meta?: {
        /** The name of the reference */
        theme: string | 'elegant' | 'flat' | 'kendall' | 'macchiato' | 'paper-plus-plus' | 'rickosborne' | 'relaxed' | 'mantra' | 'onepage-plus' | 'minyma' | 'even' | 'tan-responsive' | 'stackoverflow;'
        /** The relationship to the person */
        canonical: string;
        /** The phone number of the reference (optional) */
        version?: string;
        /** The timestamp when the resume data was last changed (optional) */
        lastModified?: string;
    };

    /** Additional custom fields can be included as needed */
    [key: string]: any;
};
