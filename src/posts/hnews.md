---
title: Hacker News API - Part 1

date: "2020-4-20"
---

<div style="background-color: #fff; padding: .5rem" className="mdContent">

## Backstory

I have always wanted to work with API's and I thought the best way to do this was to build something that uses an API. I found the perfect tutorial on Free Code Camp's channel to help me with my journey. [React and APIs - Full Tutorial - Hacker News API Application](https://www.youtube.com/watch?v=LN6Dol_fX0w.)

I learned a lot from the tutorial but I came across some technologies that I don't fully understand and some that I know nothing about. I want to go back and review those technologies in a bit more depth and document everything into a Blog. This will help me develop a deeper understanding of the Tools used and might even help someone else who is struggling as well.

Instead of cramming everything into one long post I will be making this Blog into a series. In this post I will be going over the following topics:

1. **What is Hacker News**
2. **Whats is an API**
3. **Axios**

## What is Hacker News

Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one's intellectual curiosity".

### What is an API

**A**pplication **P**rogramming **I**nterface
![api-image](./api-image.png "API image representation")

**_Below is one of my favorite explanations of what an API does. It is not a technical explanation. it uses real world examples which makes it very easy to understand._**

When you go to a restaurants you do not go directly to the chef to order, you look at the menu and order something of the menu. the menu tells you what the restaurants offers that is their API. it tells you what their api what application is giving to you and things you can use. when the order is made the restaurant gives you back data. API expose what they want to expose to the world making them secure. If you go to order a PB and J sandwich it will throw an error. a web application is not going to expose the database with all the usernames and passwords
most common API's you can run into as a dev are REST API's from the web and library API's from code pulled into project

REST APIs expose different end points known as URL's that you can access to get data from the API

common API not usually refereed to as an API is a library you can pull into your code. they have methods defined on them that do specific things when called. It is contact between the library code and you own. you have different way to access them and you cannot access the internals of that library. only the methods that are exposed

common theme is that they expose only what they want you to access and hide away everything else

with web API's you will need some kind of tokens to authenticate yourself with the API to allow the application to know who is accessing the API

API's are everywhere. it is really just a contract of two things and how they interact with each other

```

      import axios from 'axios';

      import { selectFields } from '../selectors/selectFields';

      export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
      export const newStoriesUrl = `${baseUrl}newstories.json`;
      export const storyUrl = `${baseUrl}item/`;

      export const getStory = async (storyId) => {
        const result = await axios
          .get(`${storyUrl + storyId}.json`);

        return selectFields(result.data);
      };

      export const getStoryIds = async () => {
        const result = await axios.get(newStoriesUrl);

        return result.data;
      };
```

</div>
