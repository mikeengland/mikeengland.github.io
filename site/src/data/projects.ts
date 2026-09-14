// Side projects — things built outside of work. Add new entries to the top.
export interface Project {
	url: string;
	/** Bare domain, used as the visible link label. */
	domain: string;
	/** One-line summary of what it does, read as a continuation of the domain. */
	blurb: string;
	/** Optional aside — used here for the story behind the name. */
	note?: string;
}

export const PROJECTS: Project[] = [
	{
		url: 'https://willigettheshits.com/',
		domain: 'willigettheshits.com',
		blurb:
			'An interactive map of every official FSA food hygiene rating in the UK, refreshed daily.',
		note: 'The domain name is deliberately daft as an amusing hook. The site serves hundreds of visitors a month.',
	},
];
