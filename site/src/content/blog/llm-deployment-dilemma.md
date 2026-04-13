---
title: 'The LLM Deployment Dilemma: Third-Party APIs or Self-Hosting?'
pubDate: 'Apr 08 2024'
heroImage: '../../assets/self-hosting.webp'
---

Over the last year or so, the prevailing strategy for many businesses deploying GenAI solutions has been to utilise third-party models provided via web APIs. The popularity of the models powering ChatGPT paired with OpenAI’s incredible ability to ship at pace has made their models the default option for the majority of businesses. Microsoft’s multi billion-dollar alliance with OpenAI and their enterprise offering of OpenAI models on Azure has made this the easy choice for many enterprises.

However, the growth of open source models which have comparable (and now sometimes even better) performance to the current OpenAI model offerings is leading some decision makers to think — do we continue to use third-party model APIs or should we host open source models ourselves?

I’ll use this post to explore a few points that you will want to consider when making this decision: cost, engineering skill-sets and model retirements.

## Cost

For many companies, offloading the inference compute cost and complexity to a third-party provider and paying per API call makes a lot of sense. Hosting an LLM can be difficult and extremely expensive!

For example, if you want to host a ‘small’ 7 billion parameter LLM such as Llama-7b on an Amazon SageMaker endpoint, you’d likely want to utilise a GPU instance such as a ml.g5.2xlarge (or bigger!) which contains an NVIDIA A10G chip. These instances will set you back $1.69 an hour before any pricing agreements, which on the face of it doesn’t sound a lot but ends up costing ~$15k per year for a single instance. If you want to run the model in multiple availability zones for fault tolerance, the yearly cost will be multiples of this.

Hosting larger models with comparable performance to the GPT series models will often require instances which are significantly more costly. Self-hosting can become very expensive, very quickly!

Compare this to using Microsoft Azure’s OpenAI offering. Using a basic calculation of sending 1m tokens as input to a Microsoft Azure GPT-3.5 Turbo model endpoint and generating 1m tokens as output will only cost you $2. Using GPT-4 Turbo would cost $40.

As you can see, unless you are inferencing with a huge number of tokens, using a third-party API is likely going to be cheaper. So why look at self-hosting? Well, using third-party APIs isn’t all sunshine and rainbows…

## Model retirements

One thing you don’t often hear people in the industry talking about is how aggressively model providers retire their old models. This is likely because most individuals and businesses are still at the experimentation phase of many of their projects, and bumping to the latest patch version of a model is either a config change or auto-upgrade away. When you begin productionising GenAI projects, you will suddenly have to start thinking about how you will deal with models you use being turned off.

Firstly, it is very important to understand how your model provider handles model retirements. The GenAI landscape is extremely fast paced and model providers want to move quickly. Unfortunately, this often means that models are retired much more quickly than standard software. For example, looking at the OpenAI deprecation page, once a new model version is launched, the current version is retired around six months later. OpenAI models running on Microsoft Azure look to have slightly longer retirement dates but are still retired quite aggressively.

Model updates are likely to change model behaviour, and can impact how your model will run in production. You need to re-evaluate your model before deploying an updated version to have confidence that the new model will have no adverse effects on your software. **You will need to make sure that you factor this work into your BAU schedule!**

Given how often you will need to do this, it is likely worth investing in building out automated evaluation test suites to reduce manual effort as much as possible.

This is an interesting data point in a decision about whether to use third-party vs self-hosted models. What does allocating technical resources to work on upgrading models cost your business? Is the added risk of upgrading to new models every six months worth the cost saving? Suddenly third-party vs self-hosted isn’t such a simple calculation.

## Engineering skill-sets

As I mentioned previously, self-hosting LLMs is not a trivial task. It involves a fair amount of ML Engineering, especially if you are planning to optimise model inference for improved latency or throughput (think quantisation, sharding across GPUs, utilising optimised inference containers etc). On top of this, unless you already have a ML platform, building out the infrastructure to self-host models in production can be a mighty task!

Many businesses don’t have this skill-set readily available. While I do foresee self-hosting models becoming easier over time, in the short term I’d suggest these businesses should look to use third-party APIs where possible. However, they should still keep tabs on projects which can allow them to utilise open-source models in just a few clicks such as Amazon SageMaker Jumpstart or Azure Model Catalog, as these could be a more simple approach to self-hosting in future.

I picked out three areas that I think are interesting to consider when deciding whether to self-host or use third-party APIs for your LLM-based projects. There are of course many other factors to consider — what scale do you need? Are you happy to lock yourself into proprietary models? Do you want to fine tune your models? Do you want to setup connectivity to yet another model provider?

Let me know your thoughts!