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
			'an interactive map of every official FSA food hygiene rating in the UK, refreshed daily, so checking a takeaway takes three seconds instead of a trip through a government search form.',
		note: 'The domain is deliberately daft, but it is also the actual product requirement: it is the question everyone is really asking when they squint at a hygiene sticker in a window.',
	},
];
