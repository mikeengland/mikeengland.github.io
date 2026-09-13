// Articles I have written or co-authored that are published elsewhere.
export interface ExternalPost {
	title: string;
	url: string;
	publication: string;
}

export const EXTERNAL_POSTS: ExternalPost[] = [
	{
		title: 'From RAG to Riches: How NatWest is Using GenAI to Unlock Knowledge Across the Organisation',
		url: 'https://nwg.ai/from-rag-to-riches-how-natwest-is-using-genai-to-unlock-knowledge-across-the-organisation-bda931e2d68a',
		publication: 'NatWest Group Engineering Blog',
	},
	{
		title: 'How NatWest Group Built a Secure, Compliant Self-Service MLOps Platform Using AWS Service Catalog and Amazon SageMaker',
		url: 'https://aws.amazon.com/blogs/machine-learning/part-2-how-natwest-group-built-a-secure-compliant-self-service-mlops-platform-using-aws-service-catalog-and-amazon-sagemaker/',
		publication: 'AWS Machine Learning Blog',
	},
];
