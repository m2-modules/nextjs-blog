# Static website based on [NextJS](https://nextjs.org)

---

## Table of contents

1. [To deploy through your github page](#to-deploy-through-your-github-page)
1. [To write your own posting](#to-write-your-own-posting)
1. [Renew](#renew)
1. [Detail of configurations](#detail-of-configurations)
   1. [Blog config](#blog-config)
   1. [Menu config](#menu-config)
   1. [Post config](#post-config)
   1. [Layout config](#layout-config)
   1. [Google analytics config](#google-analytics-config)
1. [SEO](#seo)
   1. [Sitemap.xml](#sitemapxml)
   1. [Robots.txt](#robotstxt)
1. [PWA](#pwa)
1. [Components](components)
   1. [Copyright Display](copyright-display)
   1. [Comments on posting](comments-on-posting)

---

## To deploy through your github page

1. `Fork` this repository to your own repository.
1. Change name of forked repository to your github page repository name
1. Allow to use predefined `Github Action`
   - You can activate predefined github action at `Action` menu.
1. After you activate `Github Action` you can deploy your changes by only pushing your changes on your repository.
1. Change github page root directory to `/docs`. You can change it in `Settings > Pages` on your github repository.
1. Add your own posting and push it to your repository
   - To deploy it you should push something at least once.
   - If everything is ready you can see your website through your own github page URL.

## To write your own posting

1. Main branch has `docs` directory to store built resources. To avoid conflict sources under this directory `docs` is a member of gitignore. Except `main` branch all the other branches won't have `docs`. Therefore you need to write your posting under another branch (you can use `draft`) and them merge your changes into `main` via PR.

1. Create new `markdown` file in `/public/resources/[CATEGORY]/[ANY-FILE-NAME].md`

   - `CATEGORY` will be used to sort your post.
   - `ANY-FILE_NAME` is element of consisting URL path.
   - During building time `file name` will be changed into URL friendly pattern. Therefore it is recommended to use `English` only

1. Add configuration for newly created posting
   - Open up `post.config.ts` file from `/src/config`
   - There might be bunch of sample posting.\
   - You can add your newly created posting by adding new element which has same structure compared with sample posting config.

## Renew

You can fetch latest update from [@m2-modules/nextjs-blog](https://github.com/m2-modules/nextjs-blog).

- As being upgraded this repository, You may want to renew your own blog from original branch.
  For doing this you need to merge `draft` branch of `nextjs-blog` to yours.

## Detail of configurations

### Blog config

| Prop           | Description                                                                                                                                                        | Required | Example                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------ |
| title          | Your website title. It will be use to show title and header                                                                                                        | true     | 'My Blog'                                  |
| titleDelimiter | When you move into specific page the title will change something like 'My Blog \| Posts' and ' \| ' is delimiter. You can change it whatever you want it if string | false    | '\*'                                       |
| lang           | Document language configuration                                                                                                                                    | false    | 'ko'                                       |
| email          | Your email address. It will be used to consist `Contact me` page. Not supported at                                                                                 | false    | my_email@email.com                         |
| author         | Your name that will be used to build up meta tag in head for SEO                                                                                                   | false    | 'Author'                                   |
| socials        | Your social network URLs that you want to open up to visitors                                                                                                      | false    | Refer predefined example in blog.config.ts |

### Menu config

You can add your own menu to edit this configuration

| Prop        | Description              | Required | Example                           |
| ----------- | ------------------------ | -------- | --------------------------------- |
| path        | pathname to access page  | true     | '/news'                           |
| title       | Tile of page             | true     | 'News                             |
| description | Description of the page. | true     | 'Interested news about traveling' |

### Post config

| Prop          | Description                                                                     | Required | Example                          |
| ------------- | ------------------------------------------------------------------------------- | -------- | -------------------------------- |
| title         | Title of your posting                                                           | true     | My new Posting!                  |
| fileName      | File name that system can refer to find post                                    | true     | 'my-new-posting.md'              |
| description   | Description for your posting                                                    | true     | 'Travel, Traveling, Hobby'       |
| category      | Category that post is allocated                                                 | true     | 'category-1'                     |
| published     | Whether you want to open it to your visitors or not                             | true     | true \| false                    |
| publishedAt   | The date that you published your posting. It will be used to sort your postings | true     | '2021-10-04'                     |
| thumbnailName | File name that system can refer to find thumbnail image for the posting         | false    | 'thumbnail.jpeg'                 |
| tags          | Tags can describe what current posting about. It will be used for SEO           | true     | ['Travel', 'Traveling', 'Hobby'] |

### Layout config

| Prop       | Description                                         | Required | Example |
| ---------- | --------------------------------------------------- | -------- | :-----: |
| postDetail | Components that can be shown in posting detail page | false    |    -    |
| footer     | Components that can be shown in footer section      | false    |    -    |

> Each layout has detail configurations.
>
> If you want to check detail of it please refer [components section](#components)

### Google analytics config

You can use google analytics report and APIs by setting up below configuration.

| Prop | Description                  | Required | Example               |
| ---- | ---------------------------- | -------- | --------------------- |
| id   | Google Analytics tracking ID | false    | 'YOUR-GA-TRACKING-ID' |

## SEO

### Sitemap.xml

To generate sitemap.xml you should config your publishing site URL in `package.json`

```json
// package.json
{
  "siteURL": "https://example.com"
}
```

Github action will generate `sitemap.xml` file right before publish it.

### Robots.txt

You can find default `robots.txt` file in `public/robots.txt` which is configured allow any searching engine robots.
If you want to modify it you can change it directly.

## PWA

To activate PWA you need to run below script to initialize `manifest.json`

```sh
$ yarn pwa:init
```

Default application name will be decided by name property of `package.json`
You can customize it after you generate default `manifest.json` which is located `./public/manifest.json`

## Components

There are few components that you can decide using it or not.

Supporting components:

- Copyright display
- Comments (Utterances)

### Copyright display

This is copyright display component which is located `footer` section of webpage.
Based on `blogConfig.author` ^ `blogConfig.email`, it will be appeared by default.
If you want to edit it you can change it in `layout.config.ts`

### Comments on posting

Detail of posting page has component to render [`Utterances`](https://utteranc.es/) which is awesome open source.
If you want to implement it you need to configure few properties in `layout.config.ts`

More details about the properties you can refer [`Utterances`](https://utteranc.es/) page.
