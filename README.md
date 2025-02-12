># Website
The studio's main website 


using nextjs-cloudflare boilerplate:
<!-- link to deploying with vercel: https://nextjs-vercel.payloadcms.com/ -->

<br/>

|Folder|Description|Documentation|
|--|--|--|
|**design**| design resources|[README](./design/README.md)|
|**docs**| site documentation | [README](./docs/README.md)|
|**web**| code for the site | [README](./web/README.md)| 

<br/>
<br/>

>## Sitemap

| Key | Meaning | Description |
|--|--|--|
|**[ ]**| `concrete page`| page is explicitly coded |
|**{ }**| `virtual page`| code is middleware routed or SPA in-page generated |


    /                       ( Home )
    /[portfolio]              ( portfolio )
    |    |
    |    +----/Design  
    |    |       |
    |    |       +---- web
    |    |       +---- landing-page
    |    |       +---- ui_ux
    |    |       +---- seo
    |    |       +---- branding
    |    |       +---- marketing
    |    |       +---- social
    |    |       +---- copywriting
    |    |       +---- print
    |    |       +---- stationery
    |    |
    |    +----/Software
    /[lets-work]              ( work booking )
    /[contact]                ( contact page )
    /[about]                  ( about )
    |    |
    |    +----[/privacy]
    |    |
    |    +----[/terms&conditions]   
    |     
    /{privacy}               (privacy)
    /{terms&conditions}      (terms)
    /{form}
        |
        +----/web
        |
        +----/landing-page
        |
        +----/ui_ux
        |
        +----/seo
        |
        +----/branding
        |
        +----/marketing
        |
        +----/social
        |
        +----/copywriting [❌] for now
        |
        +----/print
        |
        +----/stationery
