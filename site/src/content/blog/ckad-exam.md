---
title: 'How I passed the Certified Kubernetes Application Developer (CKAD) exam'
pubDate: 'Apr 24 2023'
heroImage: '../../assets/containers.webp'
---

Last week I sat the CKAD exam and managed to pass with a score of 96%. I’ve decided to write about my experience sitting the exam as I found that there is a quite a bit of scare-mongering on various forums and websites around the experience taking it! The aim of this post is to provide a overview of the exam and the testing environment whilst also providing some advice for the best way to approach studying for it.

## What is the CKAD exam?

The CKAD exam focuses on using Kubernetes (K8s) from an application developer’s point of view, compared with other exams such as the CKA (Certified Kubernetes Administrator) which is more focused on the administration of Kubernetes clusters. The exam tests you on concepts such as launching and scaling pods, exposing applications via services, creating and storing configuration files and secrets, creating and using persistent volumes and so on. In my opinion, if you are interested in learning how to interact with K8s, maybe just out of interest or because you will be working with it in future, I think this is a worthwhile certification to study for.

What is interesting about his exam compared to other certifications I have taken is that it is a fully practical exam. The exam environment asks you to set up applications on Kubernetes and then automatically checks your environment after the exam ends to check that you have performed the tasks correctly. This means that it is not an easy exam to blag and you really need a good understanding of the relevant K8s objects and CLI to pass the exam.

The exam is 2 hours long and contains between 15–20 tasks. Each task is worth a certain percentage of the total grade, e.g. 4% or 8%. The pass mark for the exam is 66%.

The exam currently costs $395 (RRP) and this includes two attempts at the exam which I have to admit is pricey! There are some offers here and there to reduce this slightly. I used the code **DEVOPS15** which reduced the cost by 15%.

## The PSI exam environment

You take the exam using something called PSI provided by Pearson. This is an online system that creates a proctored exam environment — that is an environment that automatically checks to ensure you are not opening unauthorized programs and allows a proctor to watch you at all times during the exam to ensure you are not cheating.

Before taking the exam, I read a LOT of complaints about the PSI setup, especially about it being laggy and difficult to copy and paste into the terminals. I personally found the environment to be satisfactory for taking the test. It is a bit slow, but this did not hinder my progress.

When you launch the environment, you need to present your ID to the PSI system using a government ID e.g. a driving license. The PSI system takes a photo through your webcam. The first time round, my webcam feed hung when I launched the PSI secure browser and the camera appeared as just a gray rectangle in the app. However, after an initial panic I restarted the app and it worked as expected.

Once the exam begins, you see a Linux remote desktop in the main window with a side bar on the left hand side which contains the question instructions, a list of questions in a drop down box, a button to flag the question for later review and the percentage the question is worth.

I heard from a lot of people that it is extremely easy to run out of time and that you almost need to rush through the exam to finish it on time. **I actually found that I finished the exam with plenty of time!** While you do not want to get stuck on a question and spend a long time trying to figure it out, you have an average of around 6 minutes to tackle each question which is easily enough time once you are familiar with the kubectl CLI. I ended up completing the exam around 25 minutes before the timer finished. In terms of timing, my advice is to start by reading the question through. If you blank or are a bit unsure about the question, flag it for review and move on. You can always come back to it later. I’d recommend especially doing this for any questions worth a higher percentage e.g. 8%.

One other thing to mention about my exam experience is that I took the exam on a 14" Macbook Pro. The larger the screen you have, the less trouble you will have with the environment, as the Linux desktop is quite small! Unfortunately, like many people I did not have an external webcam, so I had to use just my laptop (you cannot use a second screen!). I found that zooming out of the environment a bit did help me fit more on the screen, but even without that, it would not be the end of the world. If you do have an external webcam however, I’d definitely recommend taking the exam on a larger external monitor.

## How I prepared for the exam

I started preparing for the exam by purchasing [Mumshad Mannambeth’s online course on Udemy](https://www.udemy.com/course/certified-kubernetes-application-developer/). The content is clear and it does cover all the necessary topics for the exam. The greatest benefit of this course is the KodeKloud environment that is provided with it, which provides labs for each lecture. In addition, there are a few extra labs and mock tests at the end of the course for further practice.

Once I completed the course, I practiced all of the scenarios provided by killercoda.com. These were quite basic, but helped refresh my memory over certain topics. I additionally watched some YouTube videos to gain an understanding of what sample questions looked like. I found this video from Dan Lister to be a good example of a question you could expect to see in the exam.

I then went through one of the two killer.sh environments that are bundled as part of the exam purchase. I found these to be slightly harder than the exam (they admit this!), and a very similar environment to the real exam in practice (remote desktop, requirement to ctrl + shift + c for copy, ctrl + shift + v for paste etc). Once you have gone through this exam, you can view the score and solutions. The environment remains active for 36 hours, so you can have multiple attempts at the questions. I do recommend saving one of the killer.sh sessions for the night before the exam for a final practice. Do be aware though that the two killer.sh environments are both identical in terms of questions!

## Tips & tricks

Before you take the exam, you want to get to the stage where the CLI is second nature to you. This means that you can run pods, create deployments/services, create config maps etc all via imperative commands where possible such as:

**Note, k is aliased to kubectl in the exam environment!**

```
k run test-container --image=busybox
```

You can also use the shortened object names to save some characters, for example:

```
k get po
k get deploy
k get svc
```

If you need more control over the yaml files, use the dry-run option to generate the yaml:


```
k create deployment mydeployment --image=busybox --replicas=3 --dry-run=client -o yaml > 3-deploy.yaml
```


To avoid confusion between files, I always set the name of the yaml to <question_number>-<obj identifier>.yaml.

When you open each question, you’ll also be provided with a command to switch to the correct cluster. Ensure you do this every time you start a question! I’d also recommend setting the current kubectl namespace via the following command:


```
k config set-context --current --namespace <namespace>
```


This will ensure you will not create objects in the wrong namespace and score 0 for the question.

The exam is open book as you can access the Kubernetes docs. You will need to be very familiar with this website as you will need to access the information you need quickly, or you may run out of time. This is where imperative commands give you a speed boost. Alternatively, you can also utilise `kubectl explain <path>` to get information about the CLI command directly in your terminal, again, saving you valuable time!

The CKAD exam has definitely helped me progress on my learning journey with Kubernetes and although I am still fairly new to the technology, I feel comfortable running applications on top of it. Lots of this is down to the fact that the exam tests your knowledge on Kubernetes practically compared with a standard theoretical multiple choice certification. I hope the above post gave you extra confidence to take this exam and improve your knowledge. Best of luck!
