<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/SailorEudes/RatelBack">
    <img src="https://i.imgur.com/iAJT8PT.png" alt="Logo" width="200">
  </a>

<h3 align="center">RatelBack</h3>
  <p align="center">
    Content management system powered by sqlite technology
    <br />
    <a href="https://github.com/SailorEudes/RatelBack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SailorEudes/RatelBack">View Demo</a>
    ·
    <a href="https://github.com/SailorEudes/RatelBack/issues">Report Bug</a>
    ·
    <a href="https://github.com/SailorEudes/RatelBack/issues">Request Feature</a>
  </p>

<center><img src="https://i.imgur.com/VwWOjIt.png" alt="Logo" width="500"></center>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#used-packages">Used Packages</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This product was created with Strapi and aims to manage the official Ratel-Roche website visually and simply

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Strapi](https://strapi.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


### Used Packages

* [@strapi/plugin-graphql (^4.1.5)](https://docs.strapi.io/developer-docs/latest/plugins/graphql.html)
* [@strapi/plugin-i18n (^4.1.5)](https://docs.strapi.io/developer-docs/latest/plugins/plugins-intro.html)
* [@strapi/plugin-seo (^4.1.5)](https://market.strapi.io/plugins/@strapi-plugin-seo)
* [@strapi/plugin-users-permissions (^4.1.5)](https://docs.strapi.io/developer-docs/latest/plugins/plugins-intro.html)
* [@strapi/provider-upload-aws-s3 (^4.1.5)](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/amazon-aws.html)
* [@strapi/strapi (^4.1.5)](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
* [pg (^8.7.3)](https://www.npmjs.com/package/pg)
* [pg-connection-string (^2.5.0)](https://www.npmjs.com/package/pg-connection-string)
* [sqlite3 (5.0.2)](https://www.npmjs.com/package/sqlite)
* [strapi-plugin-ezforms (^0.0.7)](https://market.strapi.io/plugins/strapi-plugin-ezforms)
* [strapi-plugin-migrations (^1.0.3)](https://market.strapi.io/plugins/strapi-plugin-migrations)
* [strapi-plugin-sitemap (^2.0.6)](https://market.strapi.io/plugins/strapi-plugin-sitemap)
* [strapi-provider-rest-cache-memory (^2.0.6)](https://market.strapi.io/plugins/strapi-plugin-rest-cache)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Before starting, it is important to make sure that NodeJS is installed on your machine and that it is up to date, to do this, 
you must open your CMD (Windows) or Terminal (Mac).

### Prerequisites

To check if NodeJS is installed on your machine :
* npm
  ```sh
  node -v
  ```

To launch the installation of the Strapi dependencies, you can use :
* npm
  ```sh
  npm i
  ```
or
* yarn
  ```sh
  yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SailorEudes/RatelBack.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
    or
   ```sh
   yarn
   ```
4. Create your environment file at the root of the project `.env`
   ```html
    HOST=0.0.0.0
    PORT=1337
    APP_KEYS=sNPFecV8ErU39zJDErJ4gw==,v7Wl4lsoDNylk5Tt3NnCqg==,p5vMYln+JCQ4bhwBHz2Ebg==,YAX6wK4mL+Yo8E8WMx3ksw==
    JWT_SECRET=36b01d65-eeef-4966-9700-03ca75b0f3bc
    API_TOKEN_SALT=7d6df6434e8a95a2a62d0bfdc7a9a507
    MY_HEROKU_URL=Pre-prod or production URL
    AWS_ACCESS_KEY_ID=AWS Acces Key
    AWS_ACCESS_SECRET=AWS Secret Key
    AWS_REGION=AWS S3 Region
    AWS_BUCKET_NAME=AWS S3 Bucket
    RECAPTCHA_ACCESS=RECAPTCHA KEY
   ```
   
 4. Use the command `yarn develop` to launch the system

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/SailorEudes/RatelBack](https://github.com/SailorEudes/RatelBack)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/SailorEudes/RatelBack/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/SailorEudes/RatelBack/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/SailorEudes/RatelBack/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/SailorEudes/RatelBack/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/SailorEudes/RatelBack/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
